import { Issue } from "../types";
import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
};

export const IssuesList = ({ issues }: IssueListProps) => {
  return (
    <ol className="w-full py-6 bg-white rounded-bl-lg rounded-br-lg flex-col justify-start items-start inline-flex">
      {issues.map((issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ol>
  );
};

