import './Header.css';

function Header() {
  return (
  <div className="header">
    <h1>Shashwat Pragya</h1>
    <div className='header-right'>
      <a href='#home'>Home</a>
      <a href='#projects'>Projects</a>
      <a href='#CV'>CV</a>
    </div>
  </div>
  );
}

export default Header;
