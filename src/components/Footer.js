import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
  <div className="footer-container">
    <div className="by-section">
      <p> Designed and Developed by Shashwat Pragya<br/ >
        Built using React and Google Firebase<br />
        <a href='https://github.com/shashwat183/Portfolio-Website'>
          Checkout the code  <FontAwesomeIcon icon={faCode}/>
        </a>
      </p>
    </div>
    <div className="contact-section">
      <p>
        <div className='contact-heading'>Contact</div>
        <a href='mailto:shashwat183@gmail.com'>
          <FontAwesomeIcon icon={faEnvelopeCircleCheck}/>  shashwat183@gmail.com
        </a> 
      </p>
    </div>
  </div>
  );
}

export default Footer;
