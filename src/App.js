import { useState } from 'react';
import Navbar from './components/navbar';
import Global from './components/main';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/footer';
import Projects from './components/projects';

import './App.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <main>
      {/* see pain palette idea with cursor brush if possible, on click change color etc */}
      <Navbar showProjects={showProjects} setShowProjects={setShowProjects} />
      <div className={` ${showProjects ? 'projects' : 'inactive'}`}>
        <Projects />
      </div>
      <div className={` ${showProjects ? 'me' : null}`}>
        <Global showProjects={showProjects} setShowProjects={setShowProjects} />
        <About />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
