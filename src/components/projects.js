import { FiExternalLink } from 'react-icons/fi';
import book from '../imgs/book.png';
import boc from '../imgs/boc.png';
import menu from '../imgs/menu.png';
import darkmode from '../imgs/darkmode.png';
import tours from '../imgs/tours.png';
import reviews from '../imgs/reviews.png';

// I have to create and populate a data files for this part, the idea of showing my projects like that came along the way

const Projects = () => {
  return (
    <div className='portfolio-projects'>
      <div className='project'>
        <img src={book} alt='book app' />
        <h4 className='project-title'>Book lists review React App</h4>
        <p>
          My first React App, created fron scratch. This is my own book lists
          with my own review. I included various functionalities, everything is
          dynamic (review star ratings, buttons choice by genres or authors...)
        </p>
        <div className='project-skills'>
          <p>React JS</p>
          <p>HTML</p>
          <p>CSS var()</p>
          <p>FLex/Grid</p>
          <p>Responsive Design</p>
          <p>Git</p>
        </div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://booklist-app-kevin.netlify.app/'>Booklist App</a>
        </div>
      </div>
      <div className='project'>
        <img src={boc} alt='Board of Canada' />
        <h4 className='project-title'>Board of Canada webpage Javascript </h4>
        <p>
          Probably my favourite music band. I've made a couple of projects on
          them since I started my tech journey. Made with Javascript, Buttons
          are dynamic
        </p>
        <div className='project-skills'>
          <p>CSS</p>
          <p>HTML</p>
          <p>Javascript JS</p>
          <p>Responsive Design</p>
          <p>Git</p>
        </div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://boc-fanpage-js.netlify.app/'>BOC</a>
        </div>
      </div>
      <div className='project'>
        <img src='' alt='' />
        <div className='project-title'></div>
        <p>Basic Dark Mode Javascript JS</p>
        <div className='project-skills'></div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://js-darkmode-beyond.netlify.app/'>Dark Mode</a>
        </div>
      </div>
      <div className='project'>
        <img src='' alt='' />
        <div className='project-title'></div>
        <p> This is my first project</p>
        <div className='project-skills'></div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://www.linkedin.com/in/kevin-hanard-275165a5/'>
            Linkedin Profile
          </a>
        </div>
      </div>
      <div className='project'>
        <img src='' alt='' />
        <div className='project-title'></div>
        <p> This is my first project</p>
        <div className='project-skills'></div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://www.linkedin.com/in/kevin-hanard-275165a5/'>
            Linkedin Profile
          </a>
        </div>
      </div>
      <div className='project'>
        <img src='' alt='' />
        <div className='project-title'></div>
        <p> This is my first project</p>
        <div className='project-skills'></div>
        <div className='project-link'>
          <FiExternalLink />
          <a href='https://www.linkedin.com/in/kevin-hanard-275165a5/'>
            Linkedin Profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
