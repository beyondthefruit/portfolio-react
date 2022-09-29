import { useState } from 'react';
import Navbar from './components/navbar';
import Global from './components/main';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/footer';
import Projects from './components/projects';
import projectsData from './data';
import skills from './dataSkills';

import './App.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [dataSkills, setDataSkills] = useState(skills);
  const [dataProjects, setDataProjects] = useState(projectsData);
  return (
    <main>
      {/* see pain palette idea with cursor brush if possible, on click change color etc */}
      <Navbar showProjects={showProjects} setShowProjects={setShowProjects} />
      <div className={` ${showProjects ? 'projects' : 'inactive'}`}>
        <Projects
          setDataProjects={setDataProjects}
          dataProjects={dataProjects}
        />
      </div>
      <div className={` ${showProjects ? 'me' : null}`}>
        <Global showProjects={showProjects} setShowProjects={setShowProjects} />
        <About />
        <Skills dataSkills={dataSkills} setDataSkills={setDataSkills} />
        <Contact />
      </div>
    </main>
  );
}

export default App;
