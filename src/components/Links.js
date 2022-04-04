import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faFacebook, faMedium} from '@fortawesome/free-brands-svg-icons';

function Links() {
  return (
    <div className="links-container" id="Links">
      <h1>Social Links</h1>
      <div className='links-icons'>
        <a href='https://github.com/shashwat183'>
          <FontAwesomeIcon icon={faGithub} className="links-icon" />
        </a> 
        <a href='https://www.linkedin.com/in/shashwat-pragya/'>
          <FontAwesomeIcon icon={faLinkedin} className="links-icon" />
        </a> 
        <a href='https://www.facebook.com/profile.php?id=100009109136017'>
          <FontAwesomeIcon icon={faFacebook} className="links-icon" />
        </a> 
        <a href='https://medium.com/@shashwat183'>
          <FontAwesomeIcon icon={faMedium} className="links-icon" />
        </a> 
      </div>
    </div>
  );
}

export default Links;
