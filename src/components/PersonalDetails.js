import './PersonalDetails.css';
import portfolio from '../assets/portfolio-me.jpg';
import { Link } from 'react-scroll';

function PersonalDetails() {
  return (
    <div className="personal-details-container" id="Home">
      <div className='personal-details'>
        <h1>Hi, I'm Shashwat.</h1>
        <h3>Professional Software Developer from Manchester UK. Experienced in 
          Web Development, API Development and Cloud Services. Currently
          working as Software Developer in Barclays. Technologies that
          interest me include APIs, Frontend, Crypto, Cloud etc.</h3> 
        <Link to='Projects' smooth={true}><button>Keep Reading</button></Link>
      </div>
      <img src={portfolio} alt="Me in a pub"></img>
    </div>
  );
}

export default PersonalDetails;
