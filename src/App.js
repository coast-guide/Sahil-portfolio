import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import About from './containers/about/index.jsx';
import Contact from './containers/contact/index';
import Home from './containers/home/index';
import Portfolio from './containers/portfolio/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import './App.scss';
import Navbar from './components/navBar/index.jsx';
import particlesConfig from './helpers/particlesConfig.js';
import Theme from './components/theme/index.jsx';

function App() {
  const particlesInit = async function (main) {
    await loadFull(main);
  };

  const location = useLocation();
  return (
    <div className='App'>
      {/* particls js */}
      {location.pathname === '/' && (
        <Particles
          id='particles'
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      {/* navbar component */}
      <div className='App__navbar-wrapper'>
        <Navbar />
      </div>
      {/* Main page content*/}
      <div className='App__main-content-wrapper'>
        <Theme />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
