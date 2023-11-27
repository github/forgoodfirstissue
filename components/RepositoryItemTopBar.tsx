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
        <h3>
          <div className="repo-item__owner">
            {repositoryOwner}
          </div>
          <span>&nbsp;/&nbsp;</span>
          <div className="repo-item__name">
            {repositoryName}
          </div>
        </h3>
      </a>

      <RepositoryIssueNumberIndicator
        isIssueOpen={isIssueOpen}
      />
    </div>
  );
};
