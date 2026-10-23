import { Repository } from "../types";
import { RepositoryIssueNumberIndicator } from "./RepositoryIssueNumberIndicator";

type RepositoryItemTopBarProps = {
  isIssueOpen: boolean;
  issuesPanelId: string;
  onToggleIssues: () => void;
  repositoryHasNewIssues: boolean;
  repositoryName: Repository["name"];
  repositoryNumIssues: number;
  repositoryOwner: Repository["owner"];
  repositoryUrl: Repository["url"];
  repositoryTopics: Repository["topics"];
};

export const RepositoryItemTopBar = ({
  isIssueOpen,
  issuesPanelId,
  onToggleIssues,
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
        onClick={(event) => event.stopPropagation()}
      >
        <h3>
          <div className="repo-item__owner">{repositoryOwner}</div>
          <span>&nbsp;/&nbsp;</span>
          <div className="repo-item__name">{repositoryName}</div>
        </h3>
      </a>

      <RepositoryIssueNumberIndicator
        controlsId={issuesPanelId}
        isIssueOpen={isIssueOpen}
        label={`issues for ${repositoryOwner}/${repositoryName}`}
        onToggle={onToggleIssues}
      />
    </div>
  );
};
