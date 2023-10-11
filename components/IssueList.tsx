import { Issue } from "../types";
import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
};

export const IssuesList = ({ issues }: IssueListProps) => {
  return (

    <ol className="repo-item__issue-list">
      {issues.map((issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ol>

  );
};
