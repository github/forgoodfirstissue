import { Repository } from "../types";
import { RepositoryIssueNumberIndicator } from "./RepositoryIssueNumberIndicator";

type RepositoryItemTopBarProps = {
  isIssueOpen: boolean;
  repositoryHasNewIssues: boolean;
  repositoryName: Repository["name"];
  repositoryNumIssues: number;
  repositoryOwner: Repository["owner"];
  repositoryUrl: Repository["url"];
  repositoryTopics: Repository["topics"];
};

export const RepositoryItemTopBar = ({
  isIssueOpen,
  repositoryName,
  repositoryOwner,
  repositoryUrl
}: RepositoryItemTopBarProps) => {
  return (
    <div className="repo-item__top-bar">
      <a
        href={repositoryUrl}
        rel="noopener noreferrer"
        target="_blank"
        title={`Open ${repositoryOwner}/${repositoryName} on GitHub`}
      >
        <div className="repo-item__name">
          <h3>
            {repositoryName}
          </h3>
          <div className="repo-item__owner">
            &nbsp;/ {repositoryOwner}
          </div>
        </div>
      </a>

      <RepositoryIssueNumberIndicator
        isIssueOpen={isIssueOpen}
      />
    </div>
  );
};
