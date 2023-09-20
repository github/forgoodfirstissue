import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddYourProjectButton = () => {
  return (
    <div style={{paddingLeft: 1202}}>
      {/* <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}> */}
      <a
        className=""
        href="https://github.com/rubyforgood/happycommits"
        target="_blank"
        rel="noopener noreferrer"
        style={{height: 40, paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, background: '#604FDD', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}
      >
              <div style={{color: 'white',  fontFamily: 'Inter', fontWeight: '600'}}>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />&nbsp;&nbsp;
                Add your project
              </div>
      </a>

      </div>
    
  );
};
