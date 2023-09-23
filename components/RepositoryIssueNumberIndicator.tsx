import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

type RepositoryIssueNumberIndicatorProps = {
  isIssueOpen: boolean;
};

export const RepositoryIssueNumberIndicator = ({
  isIssueOpen
}: RepositoryIssueNumberIndicatorProps) => {
  return (
    <span>
      {isIssueOpen ? <FaChevronUp /> : <FaChevronDown />}
    </span>
  );
};
