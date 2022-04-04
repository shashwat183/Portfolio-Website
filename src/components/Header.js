import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  return (
  <div className="header" id="Home">
    <h1>Shashwat Pragya</h1>
    <div className='header-right'>
      <Link to='Home' smooth={true} className="header-link">
        Home
      </Link>
      <Link to='Projects' smooth={true} className="header-link">
        Projects
      </Link>
      <Link to='CV' smooth={true} className="header-link">
        CV
      </Link>
      <Link to='Links' smooth={true} className="header-link">
        Social Links
      </Link>
    </div>
  </div>
  );
}

export default Header;
