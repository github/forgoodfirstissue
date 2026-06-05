import React, { useEffect, useState } from "react";

import { Organization } from "../types";
import { OrganizationItemTopBar } from "./OrganizationItemTopBar";
import { OrganizationMetadata } from "./OrganizationMetadata";

type OrganizationItemProps = {
  organization: Organization;
};

export const OrganizationItem = ({ organization }: OrganizationItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isContentVisible = isOpen || isClosing;

  useEffect(() => {
    if (!isClosing) return;
    const timer = setTimeout(() => setIsClosing(false), 300);
    return () => clearTimeout(timer);
  }, [isClosing]);

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="repo-item">
      <div id={`org-${organization.id}`}>
        <div onClick={handleToggle}>
          <OrganizationItemTopBar
            isOpen={isOpen}
            organizationName={organization.name}
            organizationUrl={organization.url}
          />
          <div>
            <p className="repo-item__desc">{organization.description}</p>
            <OrganizationMetadata
              volunteersNeeded={organization.volunteers_needed}
              language={organization.language.display}
              stakeholderAvailable={organization.stakeholder_available}
              isClaimed={organization.is_claimed}
            />
          </div>
        </div>
        <div className={`repo-item__issues-warper ${isOpen ? "open" : ""}`}>
          {isContentVisible && (
            <div className="repo-item__issue-list">
              <p>{organization.project_ask}</p>
              <div className="org-item__actions">
                <a
                  href={organization.issue_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`org-join-link ${organization.is_claimed ? "org-join-link--claimed" : ""}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {organization.is_claimed ? "Project Claimed" : "Join this Project"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
