import './DownloadCV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';

function DownloadCV() {
  return (
  <div className="download-cv-container">
    <a name="CV"></a>
    <button>
      <FontAwesomeIcon icon={faFileArrowDown} /> Download CV
    </button>
  </div>
  );
}

export default DownloadCV;
