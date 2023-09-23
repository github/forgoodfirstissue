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
    <div className="justify-start items-start gap-6 inline-flex">
      <div className="justify-start items-center gap-1 flex">
        <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-[21px]">
          Issues:{" "}
        </div>
        <div className="px-2 py-1 bg-violet-50 rounded justify-center items-center gap-2 flex">
          <div className="text-slate-700 text-[13px] font-normal font-['Source Sans Pro']">
            {repositoryNumIssues}
            {repositoryNumIssues >= 10 ? "+" : ""}
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-[21px]">
          Language:{" "}
        </div>
        <div className="px-2 py-1 bg-violet-50 rounded justify-center items-center gap-2 flex">
          <div className="text-slate-700 text-[13px] font-normal font-['Source Sans Pro']">
            {repositoryLang}
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-[21px]">
          Label:
        </div>
        <div className="px-2 py-1 bg-violet-50 rounded justify-center items-center gap-2 flex">
          <div className="text-slate-700 text-[13px] font-normal font-['Source Sans Pro']">
            SDG-1
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-[21px]">
          Last activity:
        </div>
        <div className="px-2 py-1 bg-violet-50 rounded justify-center items-center gap-2 flex">
          <div className="text-slate-700 text-[13px] font-normal font-['Source Sans Pro']">
            {lastModified}
          </div>
        </div>
      </div>
    </div>
  );
};
