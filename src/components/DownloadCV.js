import './DownloadCV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';

function DownloadCV() {
  return (
  <div className="download-cv-container" id="CV">
      <button onClick={() => 
        {window.location.href = 
            'https://drive.google.com/file/d/1-PiJoL6BdUikVsbQN-6aqvczqrAg4GOM/view?usp=sharing'}}>
        <FontAwesomeIcon icon={faFileArrowDown} /> Download CV
      </button>
  </div>
  );
}

export default DownloadCV;
