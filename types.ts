type Nullable<T> = T | null;

export interface Tag {
  display: string;
  id: string;
}

export interface CountableTag extends Tag {
  count: number;
}

export interface Repository {
  description: Nullable<string>;
  has_new_issues: boolean;
  id: string;
  issues: Issue[];
  language: Tag;
  last_modified: string;
  license?: string;
  name: string;
  owner: string;
  stars: number;
  stars_display: string;
  url: string;
  topics?: Tag[];
}

export interface Issue {
  comments_count: number;
  created_at: string;
  id: string;
  labels: Label[];
  number: number;
  title: string;
  url: string;
}

export interface Label {
  id: string;
  display: string;
}

export interface Organization {
  id: string;
  name: string;
  url: string;
  description: string;
  language: Tag;
  volunteers_needed: number;
  stakeholder_available: boolean;
  project_ask: string;
  issue_url: string;
  is_claimed: boolean;
}

export enum RepositorySortOrder {
  LEAST_STARS = "By Least Stars",
  MOST_STARS = "By Most Stars",
  NONE = "None"
}

export interface AppData {
  languages: CountableTag[];
  repositories: Repository[];
  repositorySortOrder: RepositorySortOrder;
  topics: CountableTag[];
  updateRepositorySortOrder: (sortOrder: RepositorySortOrder) => void;
}
