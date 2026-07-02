import { Organization } from "../types";

type OrganizationMetadataProps = {
  volunteersNeeded: Organization["volunteers_needed"];
  language: Organization["language"]["display"];
  stakeholderAvailable: Organization["stakeholder_available"];
  isClaimed: Organization["is_claimed"];
};

export const OrganizationMetadata = ({
  volunteersNeeded,
  language,
  stakeholderAvailable,
  isClaimed
}: OrganizationMetadataProps) => {
  return (
    <div className="repo-item__meta">
      <div>
        Volunteers needed: <span>{volunteersNeeded}</span>
      </div>

      <div>
        Language: <span>{language}</span>
      </div>

      <div>
        Stakeholder available: <span>{stakeholderAvailable ? "Yes" : "No"}</span>
      </div>

      <div
        className={`org-claimed-badge ${isClaimed ? "org-claimed-badge--claimed" : "org-claimed-badge--available"}`}
      >
        {isClaimed ? "Claimed" : "Available"}
      </div>
    </div>
  );
};