import { Routes, Route } from 'react-router-dom';
import About from './containers/about/index.jsx';
import Contact from './containers/contact/index';
import Home from './containers/home/index';
import Portfolio from './containers/portfolio/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* particls js */}
      {/* navbar component */}
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
