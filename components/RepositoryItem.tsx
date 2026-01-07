import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect, useState } from "react";

import { Repository } from "../types";
import { IssuesList } from "./IssueList";
import { RepositoryDescription } from "./RepositoryDescription";
import { RepositoryItemTopBar } from "./RepositoryItemTopBar";
import { RepositoryMetadata } from "./RepositoryMetadata";

type RepositoryItemProps = {
  repository: Repository;
};

dayjs.extend(relativeTime);
const useLastModified = (date: string) => {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => setLastModified(dayjs(date).fromNow()), [date]);

  return lastModified;
};

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const [isIssueOpen, setIsIssueOpen] = useState(false);
  const [isIssuesListVisible, setIsIssuesListVisible] = useState(false);

  const lastModified = useLastModified(repository.last_modified);

  useEffect(() => {
    if (isIssueOpen) {
      setIsIssuesListVisible(true);
    } else {
      // Delay unmounting to allow close animation to complete
      const timer = setTimeout(() => setIsIssuesListVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isIssueOpen]);
  console.log(repository.name, repository.last_modified, lastModified);

  return (
    <div className="repo-item">
      <div id={`repo-${repository.id}`}>
        <div onClick={() => setIsIssueOpen(!isIssueOpen)}>
          <RepositoryItemTopBar
            isIssueOpen={isIssueOpen}
            repositoryHasNewIssues={repository.has_new_issues}
            repositoryName={repository.name}
            repositoryNumIssues={repository.issues.length}
            repositoryOwner={repository.owner}
            repositoryUrl={repository.url}
            repositoryTopics={repository.topics}
          />
          <div>
            <RepositoryDescription repositoryDescription={repository.description} />

            <RepositoryMetadata
              isIssueOpen={isIssueOpen}
              lastModified={lastModified}
              repositoryLang={repository.language.display}
              repositoryTopics={repository.topics}
              repositoryNumIssues={repository.issues.length}
            />
          </div>
        </div>
        <div className={`repo-item__issues-warper ${isIssueOpen ? "open" : ""}`}>
          {isIssuesListVisible && <IssuesList issues={repository.issues} />}
        </div>
      </div>
    </div>
  );
};
