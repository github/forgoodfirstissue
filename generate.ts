import { Octokit } from "@octokit/core";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { RequestOptions } from "@octokit/types";
import { buildSchema, parse, validate as validateGraphQL } from "graphql";
import dayjs from "dayjs";
import fs from "fs";
import millify from "millify";
import slugify from "slugify";

import happycommits from "./happycommits.json";
import {
  CountableTag as CountableTagModel,
  Repository as RepositoryModel,
  Tag as TagModel
} from "./types";

// Define interfaces for GitHub GraphQL types
interface GithubRepository {
  id: string;
  name: string;
  owner: {
    login: string;
  };
  isArchived: boolean;
  isDisabled: boolean;
  isPrivate: boolean;
  primaryLanguage: {
    id: string;
    name: string;
  } | null;
  stargazerCount: number;
  issues: {
    totalCount: number;
    edges: Array<{
      node: GithubIssue;
    }> | null;
  };
  pushedAt: string;
  licenseInfo: {
    name: string;
  } | null;
  description: string | null;
  url: string;
  repositoryTopics: {
    edges: Array<{
      node: {
        topic: {
          name: string;
          id: string;
        };
      };
    }> | null;
  };
}

interface GithubIssue {
  id: string;
  title: string;
  number: number;
  url: string;
  comments: {
    totalCount: number;
  };
  createdAt: string;
  labels?: {
    edges: Array<{
      node: {
        id: string;
        name: string;
      };
    }> | null;
  };
}

interface GraphQLResponse {
  search: {
    repositoryCount: number;
    edges: Array<{
      node: GithubRepository;
    }>;
  };
}

/** Number of repositories to query per request (max 100, but set to a smaller number to prevent timeouts) */
const REPOS_PER_REQUEST = 25;
/** Maximum number of issues to retrieve per repository */
const MAX_ISSUES = 10;

const validTopicNames = ['sdg-1', 'sdg-2', 'sdg-3', 'sdg-4', 'sdg-5', 'sdg-6', 'sdg-7', 'sdg-8', 'sdg-9', 'sdg-10', 'sdg-11', 'sdg-12', 'sdg-13', 'sdg-14', 'sdg-15', 'sdg-16', 'sdg-17'];

// symbols to replace with slugify
slugify.extend({
  "#": "sharp",
  "+": "plus"
});

// Setup Octokit (GitHub API client)
const MyOctokit = Octokit.plugin(throttling, retry);
const octokit = new MyOctokit({
  auth: process.env.GH_PERSONAL_ACCESS_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: object, octokit: Octokit, retryCount: number) => {
      const { method, url } = options as RequestOptions;
      octokit.log.warn(`Request quota exhausted for request ${method} ${url}`);

      if (retryCount < 1) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onSecondaryRateLimit: (
      retryAfter: number,
      options: object,
      octokit: Octokit,
      retryCount: number
    ) => {
      const { method, url } = options as RequestOptions;
      octokit.log.warn(`SecondaryRateLimit detected for request ${method} ${url}`);

      if (retryCount < 2) {
        // retries twice
        octokit.log.warn(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    }
  }
});

/**
 * Retrieve a list of repositories by calling GitHub GraphQL API.
 */
const getRepositories = async (
  repositories: string[],
  labels: string[]
): Promise<RepositoryModel[]> => {
  const searchQuery = [
    ...repositories.map((repo) => `repo:${repo}`),
    "archived:false",
    "is:public",
    `pushed:>=${dayjs().add(-1, "month").format("YYYY-MM-DD")}`
  ].join(" ");

  const gqlQuery = `
  query {
    search(
      query: "${searchQuery}"
      type: REPOSITORY
      first: 100
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            isArchived
            isDisabled
            isPrivate
            primaryLanguage {
              id
              name
            }
            stargazerCount
            issues( 
              states: OPEN
              filterBy: {labels: [${labels.map((label) => `"${label}"`).join(",")}]}
              orderBy: {field: CREATED_AT, direction: DESC}
              first: ${MAX_ISSUES}
            ) {
              totalCount
              edges {
                node {
                  id
                  title
                  number
                  url
                  comments {
                    totalCount
                  }
                  createdAt
                  labels(first: 10) {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
            pushedAt
            licenseInfo {
              name
            }
            description
            url
            repositoryTopics(first: 20) {
              edges {
                node {
                  topic {
                    name
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  // Create schema for validation
  const schema = buildSchema(`
    type Query {
      search(query: String!, type: SearchType!, first: Int!): SearchResultItemConnection!
    }
    
    enum SearchType {
      REPOSITORY
    }
    
    type SearchResultItemConnection {
      repositoryCount: Int!
      edges: [SearchResultItemEdge!]!
    }
    
    type SearchResultItemEdge {
      node: Repository!
    }
    
    type Repository {
      id: ID!
      name: String!
      owner: RepositoryOwner!
      isArchived: Boolean!
      isDisabled: Boolean!
      isPrivate: Boolean!
      primaryLanguage: Language
      stargazerCount: Int!
      issues(states: [IssueState!], filterBy: IssueFilters, orderBy: IssueOrder, first: Int!): IssueConnection!
      pushedAt: String!
      licenseInfo: License
      description: String
      url: String!
      repositoryTopics(first: Int!): RepositoryTopicConnection!
    }
    
    type RepositoryOwner {
      login: String!
    }
    
    type Language {
      id: ID!
      name: String!
    }
    
    type IssueConnection {
      totalCount: Int!
      edges: [IssueEdge!]
    }
    
    type IssueEdge {
      node: Issue!
    }
    
    type Issue {
      id: ID!
      title: String!
      number: Int!
      url: String!
      comments: IssueComments!
      createdAt: String!
      labels(first: Int!): LabelConnection
    }
    
    type IssueComments {
      totalCount: Int!
    }
    
    type LabelConnection {
      edges: [LabelEdge!]
    }
    
    type LabelEdge {
      node: Label!
    }
    
    type Label {
      id: ID!
      name: String!
    }
    
    type License {
      name: String!
    }
    
    type RepositoryTopicConnection {
      edges: [RepositoryTopicEdge!]
    }
    
    type RepositoryTopicEdge {
      node: RepositoryTopic!
    }
    
    type RepositoryTopic {
      topic: Topic!
    }
    
    type Topic {
      id: ID!
      name: String!
    }
    
    input IssueFilters {
      labels: [String!]
    }
    
    input IssueOrder {
      field: IssueOrderField!
      direction: OrderDirection!
    }
    
    enum IssueOrderField {
      CREATED_AT
    }
    
    enum OrderDirection {
      ASC
      DESC
    }
    
    enum IssueState {
      OPEN
    }
  `);

  const gqlQueryErrors = validateGraphQL(schema, parse(gqlQuery));
  if (gqlQueryErrors.length > 0) {
    throw new Error(
      `GraphQL query is invalid:\n\t${gqlQueryErrors.map((error) => error.message).join("\n\t")}`
    );
  }

  const searchResults = await octokit.graphql<GraphQLResponse>({ query: gqlQuery });

  // map response data to our Repository model
  const repoData = searchResults.search.edges
    .map(({ node: repo }) => {
      if (!repo.primaryLanguage) return null;
      
      return {
        id: repo.id,
        owner: repo.owner.login,
        name: repo.name,
        description: repo.description ?? null,
        url: repo.url,
        stars: repo.stargazerCount,
        stars_display: millify(repo.stargazerCount),
        license: repo.licenseInfo?.name,
        last_modified: repo.pushedAt,
        language: {
          id: slugify(repo.primaryLanguage.name.toLowerCase()),
          display: repo.primaryLanguage.name
        },
        topics: repo.repositoryTopics.edges
          ?.map((edge) => edge.node)
          .filter((topic) => validTopicNames.includes(topic.topic.name.toLowerCase()))
          .map((topic) => ({
            id: slugify(topic.topic.name.toLowerCase()),
            display: topic.topic.name
          })) ?? [],
        issues: repo.issues.edges
          ?.map((edge) => edge.node)
          .map((issue) => ({
            id: issue.id,
            number: issue.number,
            title: issue.title,
            url: issue.url,
            comments_count: issue.comments.totalCount,
            created_at: issue.createdAt,
            labels: issue.labels?.edges
              ?.map((edge) => edge.node)
              .map((label) => ({
                id: slugify(label.name.toLowerCase()),
                display: label.name
              })) ?? []
          }))
          .sort((a, b) => a.number - b.number) ?? [],
        has_new_issues: repo.issues.edges
          ?.map((edge) => edge.node)
          .some((issue) => dayjs().diff(dayjs(issue.createdAt), "day") <= 7) ?? false
      } as RepositoryModel;
    })
    .filter((repo): repo is RepositoryModel => repo !== null);

  return repoData;
};

[...new Set(happycommits.repositories)]
  .slice(0, process.env.NODE_ENV === "development" ? 200 : happycommits.repositories.length)
  .reduce((repoChunks: string[][], repo: string, index) => {
    const chunkIndex = Math.floor(index / REPOS_PER_REQUEST);
    if (!repoChunks[chunkIndex]) {
      repoChunks[chunkIndex] = [];
    }
    repoChunks[chunkIndex].push(repo);
    return repoChunks;
  }, [])
  .reduce<Promise<RepositoryModel[]>>(async (repoData, chunk, index, arr) => {
    return repoData.then(async (repos) => {
      console.log(
        `Getting repositories - chunk ${index + 1} of ${arr.length} (size: ${chunk.length})`
      );
      const repositories = await getRepositories(chunk, happycommits.labels);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return [...repos, ...repositories];
    });
  }, Promise.resolve([]))
  .then((repoData) => {
    const filterLanguages = Object.values(
      repoData.reduce((arr: { [key: string]: CountableTagModel }, repo: RepositoryModel) => {
        const { id, display } = repo.language;
        if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
        else arr[id].count++;
        return arr;
      }, {} as { [key: string]: CountableTagModel })
    )
      .filter((language) => language.count >= 1)
      .sort((a, b) => a.display.localeCompare(b.display));

    const filterTopics = Object.values(
      repoData
        .filter((repo) => repo.topics !== undefined)
        .flatMap((repo) => repo.topics as TagModel[])
        .reduce((arr: { [key: string]: CountableTagModel }, topic: TagModel) => {
          const { id, display } = topic;
          if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
          else arr[id].count++;
          return arr;
        }, {} as { [key: string]: CountableTagModel })
    )
      .filter((topic) => topic.count >= 1)
      .sort((a, b) => b.count - a.count);

    return {
      repositories: repoData.sort(() => Math.random() - 0.5),
      languages: filterLanguages,
      topics: filterTopics
    };
  })
  .then((data) => {
    fs.writeFileSync("./generated.json", JSON.stringify(data));
    console.log("Generated generated.json");
    
    const topics = data.repositories
      .filter((repo) => repo.topics !== undefined)
      .flatMap((repo) => repo.topics as TagModel[])
      .map((topic) => topic.display);

    fs.writeFileSync("./topics.json", JSON.stringify(topics, null, 2));
    console.log("Generated topics.json");
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://forgoodfirstissue.dev</loc>
        </url>
        ${data.languages
          .map(
            (language: CountableTagModel) =>
              `<url><loc>https://forgoodfirstissue.dev/language/${language.id}</loc></url>`
          )
          .join("")}
        ${data.topics
          .map(
            (topic: CountableTagModel) =>
              `<url><loc>https://forgoodfirstissue.dev/topic/${topic.id}</loc></url>`
          )
          .join("")}
      </urlset>
    `;

    fs.writeFileSync("./public/sitemap.xml", sitemap);
    console.log("Generated sitemap.xml");
  })
  .finally(() => {
    console.log("Data generation complete.");
  })
  .catch((error: unknown) => {
    console.error(error);
  });
