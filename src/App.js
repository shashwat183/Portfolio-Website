// import logo from './logo.svg';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Projects from './components/Projects';
import DownloadCV from './components/DownloadCV';
import Links from './components/Links';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <PersonalDetails />
    <Projects />
    <DownloadCV />
    <Links />
    <Footer />
    </div>
  );
}

export default App;
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
