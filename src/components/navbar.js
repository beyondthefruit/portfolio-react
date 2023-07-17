import { FaBars, FaHouseUser } from 'react-icons/fa';

const Navbar = ({
  showProjects,
  setShowProjects,
  toggleLinks,
  toggleProjects,
  showLinks,
  setShowLinks,
}) => {
  // I have to follow a react router course, in the meantime I used a old school querySelector method, I'm aware that it's not the best
  const navigation = (event) => {
    const about = document.querySelector('.presentation');
    const skills = document.querySelector('.skills');
    const contact = document.querySelector('.contact-me');
    let element = event.currentTarget.text.toLowerCase();
    // closeProjects();
    if (showProjects) {
      setShowProjects(!showProjects);
    }
    if (element === 'about') {
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (element === 'skills') {
      skills.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (element === 'contact') {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='nav-center'>
      <header>
        <div className='mobile-head'>
          <h1>Kevin Hanard</h1>
          <button
            className='nav-toggle'
            // first method using inline fct
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* ternary operator, if true we use 2 classes nav 
        and show-container, if false only nav */}
        <nav className={` ${showLinks ? 'nav show-container' : 'nav'}`}>
          <ul className='links'>
            <li>
              <a
                className={`nav-items btn-project tooltip ${
                  showProjects ? 'btn-hide' : 'btn-show'
                }`}
                onClick={() => {
                  setShowProjects(!showProjects);
                  toggleLinks();
                }}
              >
                {/* <AiFillFolderOpen /> Projects */}
                Projects
                <span class='tooltip-text' id='tool-project'>
                  Discover my projects
                </span>
              </a>
              <a
                className={`nav-items btn-profile tooltip ${
                  showProjects ? 'btn-show' : 'btn-hide'
                }`}
                onClick={() => {
                  toggleProjects();
                  toggleLinks();
                }}
              >
                <FaHouseUser />

                <span class='tooltip-text'>Return on my website</span>
              </a>
            </li>

            <li>
              <a
                className='nav-items'
                onClick={(e) => {
                  toggleLinks();
                  navigation(e);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className='nav-items'
                onClick={(e) => {
                  toggleLinks();
                  navigation(e);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className='nav-items'
                onClick={(e) => {
                  toggleLinks();
                  navigation(e);
                }}
              >
                Contact
              </a>
            </li>

            <button className='nav-toggle'></button>
          </ul>
        </nav>
        {/* apply the blur effect to the back */}
        <div className={`${showLinks ? null : 'blur-me'}`}></div>
      </header>
    </div>
  );
};

export default Navbar;
