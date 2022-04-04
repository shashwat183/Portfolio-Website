import './Header.css';

function Header() {
  return (
  <div className="header" id="Home">
    <h1>Shashwat Pragya</h1>
    <div className='header-right'>
      <a href='#Home'>Home</a>
      <a href='#Projects'>Projects</a>
      <a href='#CV'>CV</a>
      <a href='#Links'>Social Links</a>
    </div>
  </div>
  );
}

export default Header;
