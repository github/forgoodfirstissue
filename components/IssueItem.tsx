import { Issue } from "../types";

type IssueItemProps = {
  issue: Issue;
};

export const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <li key={issue.url} className="px-6 py-2 bg-white justify-start items-start gap-4 inline-flex">
      <span className="text-black text-base font-semibold font-['Inter'] leading-normal">#{issue.number}</span>
      <div className="flex items-start flex-row flex-auto">
        <a
          className="grow hover:text-indigo-600 shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal
          "
          href={issue.url}
          rel="noopener noreferrer"
          target="_blank"
          title="Open issue on GitHub"
        >
          {issue.title}
        </a>
      </div>
    </li>
  );
};
