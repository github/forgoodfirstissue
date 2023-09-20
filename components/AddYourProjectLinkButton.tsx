import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddYourProjectLinkButton = () => {
  return (
    <div className="d-flex flex-row-reverse">
      <a
        className="btn btn-primary float-right text-end"
        href="https://github.com/rubyforgood/happycommits"
        target="_blank"
        rel="noopener noreferrer"
      >
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add your project
      </a>
    </div>
  );
};
