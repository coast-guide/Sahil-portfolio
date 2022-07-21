import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import About from './containers/about/index.jsx';
import Contact from './containers/contact/index';
import Home from './containers/home/index';
import Portfolio from './containers/portfolio/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import './App.css';
import Navbar from './components/navBar/index.jsx';
import particlesConfig from './helpers/particlesConfig.js';

function App() {
  const particlesInit = async function (main) {
    await loadFull(main);
  };

  const location = useLocation();
  console.log(location);
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
      <Navbar />
      {/* Main page */}
      <Routes>
        {/* Create all routes */}
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
