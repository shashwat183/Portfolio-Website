import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faFacebook, faMedium} from '@fortawesome/free-brands-svg-icons';

function Links() {
  return (
    <div className="links-container">
      <h1>Social Links</h1>
      <div className='links-icons'>
        <FontAwesomeIcon icon={faGithub} className="links-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="links-icon" />
        <FontAwesomeIcon icon={faFacebook} className="links-icon" />
        <FontAwesomeIcon icon={faMedium} className="links-icon" />
      </div>
    </div>
  );
}

export default Links;
