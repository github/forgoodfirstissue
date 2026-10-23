import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type RepositoryIssueNumberIndicatorProps = {
  controlsId: string;
  isIssueOpen: boolean;
  label: string;
  onToggle: () => void;
};

export const RepositoryIssueNumberIndicator = ({
  controlsId,
  isIssueOpen,
  label,
  onToggle
}: RepositoryIssueNumberIndicatorProps) => {
  return (
    <button
      type="button"
      className="repo-item__toggle"
      aria-controls={controlsId}
      aria-expanded={isIssueOpen}
      aria-label={`${isIssueOpen ? "Hide" : "Show"} ${label}`}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      {isIssueOpen ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
    </button>
  );
};
