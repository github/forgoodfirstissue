import { Issue } from "../types";

type IssueItemProps = {
  issue: Issue;
};

export const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <li key={issue.url}>
      <span>#{issue.number}</span>
      <a
        href={issue.url}
        rel="noopener noreferrer"
        target="_blank"
        title="Open issue on GitHub"
      >
        {issue.title}
      </a>
    </li>
  );
};
