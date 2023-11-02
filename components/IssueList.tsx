import { Issue } from "../types";
import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
};

export const IssuesList = ({ issues }: IssueListProps) => {
  return (
    <ol className="repo-item__issue-list">
      {issues.length > 0 ? (
        issues.map((issue) => <IssueItem issue={issue} key={issue.id} />)
      ) : (
        <li>
          This project does not appear to have any issues marked Help Wanted or Good First Issue. If
          this project speaks to you, consider seeing if there are other ways to help contribute!
          You can find more information on the project&apos;s GitHub page. It is also possible that they
          are not using issue labels or GitHub issues to track their work.
        </li>
      )}
    </ol>
  );
};
