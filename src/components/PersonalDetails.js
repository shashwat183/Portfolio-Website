import './PersonalDetails.css';
import portfolio from '../assets/portfolio-me.jpg';

function PersonalDetails() {
  return (
    <div className="personal-details-container">
      <div className='personal-details'>
        <h1>Hi, I'm Shashwat.</h1>
        <h3>Professional Software Developer from Manchester UK. Experienced in 
          Web Development, API Development and Cloud Services. Currently
          working as Software Developer in Barclays. Technologies that
          interest me include APIs, Frontend, Crypto, Cloud etc.</h3> 
        <button>Keep Reading</button>
      </div>
      <img src={portfolio} alt="Me in a pub"></img>
    </div>
  );
}

export default PersonalDetails;
