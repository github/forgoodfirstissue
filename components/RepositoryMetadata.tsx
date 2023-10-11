import { Repository } from "../types";

type RepositoryMetadataProps = {
  isIssueOpen: boolean;
  repositoryNumIssues: number;
  lastModified: Repository["last_modified"];
  repositoryLang: Repository["language"]["display"];
  repositoryTopics: Repository["topics"];
};

export const RepositoryMetadata = ({
  repositoryNumIssues,
  lastModified,
  repositoryLang,
  repositoryTopics
}: RepositoryMetadataProps) => {
  return (
    <div className="repo-item__meta">
      <div>
        Issues:{" "}
        <span>
          {repositoryNumIssues}
          {repositoryNumIssues >= 10 ? "+" : ""}
        </span>
      </div>

      <div>
        Language:{" "}
        <span>
          {repositoryLang}
        </span>
      </div>

      {repositoryTopics && repositoryTopics.length > 0 && <div>
        Label:
        <span>
          {repositoryTopics && repositoryTopics.map(topic => topic.display).join(', ')}
        </span>
      </div>}

      <div>
        Last activity:
        <span>
          {lastModified}
        </span>
      </div>
    </div>
  );
};
