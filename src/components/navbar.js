import { useState, useRef, useEffect } from 'react';
import { FaBars, FaHouseUser } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';

const Navbar = ({ showProjects, setShowProjects }) => {
  const [showLinks, setShowLinks] = useState(true);

  // both these fct are to toggle purposes (projects and links)
  const toggleLinks = () => {
    return setShowLinks(!showLinks);
  };
  const toggleProjects = () => {
    return setShowProjects(!showProjects);
  };

  // const navHeight = () => {
  //   const navu = document.querySelector('header');
  //   console.log(navu.clientHeight);
  // };
  // I got the height of header using this: header is 160px large screen and 68 px small screen
  // I also use the new css  scroll-margin-top: ;

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
          {/* <nav className={`nav ${showLinks ? 'show-container' : ''}`}> */}
          <ul className='links'>
            <li>
              {/* second onClick method with using a fct */}
              <a
                className='nav-items'
                onClick={(e) => {
                  toggleLinks();
                  navigation(e);
                  // navHeight();
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
            <li>
              <a className='nav-items'>
                <button
                  className={`btn-project tooltip ${
                    showProjects ? 'btn-hide' : 'btn-show'
                  }`}
                  onClick={() => {
                    setShowProjects(!showProjects);
                    toggleLinks();
                  }}
                >
                  <AiFillFolderOpen />
                  <span class='tooltip-text'>
                    If you want to look into my projects
                  </span>
                </button>
                <button
                  className={`btn-profile tooltip ${
                    showProjects ? 'btn-show' : 'btn-hide'
                  }`}
                  onClick={() => {
                    toggleProjects();
                    toggleLinks();
                  }}
                >
                  <FaHouseUser />
                  <span class='tooltip-text'>
                    Feel free to return on my website
                  </span>
                </button>
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
