import { Organization } from "../types";
import { RepositoryIssueNumberIndicator } from "./RepositoryIssueNumberIndicator";

type OrganizationItemTopBarProps = {
  detailsPanelId: string;
  isOpen: boolean;
  onToggleDetails: () => void;
  organizationName: Organization["name"];
  organizationUrl: Organization["url"];
};

export const OrganizationItemTopBar = ({
  detailsPanelId,
  isOpen,
  onToggleDetails,
  organizationName,
  organizationUrl
}: OrganizationItemTopBarProps) => {
  return (
    <div className="repo-item__top-bar">
      <a
        href={organizationUrl}
        rel="noopener noreferrer"
        target="_blank"
        title={`Visit ${organizationName}'s website`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>
          <div className="repo-item__name">{organizationName}</div>
        </h3>
      </a>

      <RepositoryIssueNumberIndicator
        controlsId={detailsPanelId}
        isIssueOpen={isOpen}
        label={`details for ${organizationName}`}
        onToggle={onToggleDetails}
      />
    </div>
  );
};