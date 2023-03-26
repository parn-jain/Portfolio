import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
  <>
      <div className="appContainer">
        <div className="nav">
        <Navbar/>
        </div>
        <div className="HomeStyling">
        <HomePage/>
        </div>
        <div className="AboutPage">
          <About/>
        </div>
        <div className="ProjectPage">
          <Projects/>
        </div>
      
      </div>
  </>
  );
}

export default App;
