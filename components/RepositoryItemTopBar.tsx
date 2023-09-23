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
    <div className="w-full px-6 py-2 bg-violet-100 justify-between items-center inline-flex">
      <a
        href={repositoryUrl}
        rel="noopener noreferrer"
        target="_blank"
        title={`Open ${repositoryOwner}/${repositoryName} on GitHub`}
      >
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="hover:text-indigo-600 self-stretch text-zinc-900 text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            {repositoryName}
          </div>
          <div className="hover:text-indigo-600 self-stretch text-zinc-900 text-base font-normal font-['Inter'] leading-normal">
            {repositoryOwner}
          </div>
        </div>
      </a>

      <RepositoryIssueNumberIndicator
        isIssueOpen={isIssueOpen}
      />
    </div>
  );
};
