import { SiSnapcraft } from 'react-icons/si';
import {
  GiHiking,
  GiAirplaneDeparture,
  GiCook,
  GiBookmark,
  GiMusicalNotes,
  GiMeditation,
} from 'react-icons/gi';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsBoxArrowRight } from 'react-icons/bs';

import { GrDocumentDownload } from 'react-icons/gr';

const About = ({ showProjects, setShowProjects, toggleLinks }) => {
  return (
    <div className='about'>
      <div className='about-title'>
        A transport manager turned into a passionate Web developer
      </div>
      <div className='about-text'>
        Having recently changed my career path, I am now seeking a new challenge
        on my professional journey. I've decided to pursue my interest in web
        and software development and am actively looking for a job.
        <div className='about-title'>How did I learn?</div>
        <div className='about-text-nonpro'>
          <p>
            Mainly by following online courses and building my own projects.
          </p>
          <p>
            I've started learning during Covid-lockdown spent 5 months on HTML,
            CSS, Javascript and jQuery then had to find a job to pay the bill.
          </p>
          <p>
            I'm back to full time learning and the best way to learn is through
            regular practice and building projects. I've followed youtube
            videos, already completed a Javascript course, obtained a Apollo
            GraphQL and AWS certifications, I'm in the process of completing the
            Full Stack Open certification from the university of Helsinki. Full
            Stack Open is quite different from what and how I've been learning
            so far. As the name suggests it's focused on full stack development,
            whereas I was front-end oriented. Also, progress through the course
            by building complex projects piece by piece by solving coding
            challenges. The best way to learn is through regular practice and
            building projects.
            {/* and have
            followed youtube videos. Of course, following courses don't make you
            a web developer, the best way to learn is by building your own
            projects and it's what I'm currently doing. I've recently obtained a
            Javascript and a GraphQL certifications. */}
          </p>
          <p>
            Since I started to build my project I've gained confidence in my
            coding skills through practice. Now, more than ever I know that I'm
            passionate and want to work as a developer.
          </p>
          <div className='about-project-link'>
            <h5>Check my projects here</h5>
            {/* <BsBoxArrowRight /> */}
            <button
              className={`about-btn-project ${
                showProjects ? 'btn-hide' : 'btn-show'
              }`}
              onClick={() => {
                setShowProjects(!showProjects);
                toggleLinks();
              }}
            >
              <AiFillFolderOpen />
            </button>
          </div>
          <h4>
            If you want to know more about my experience, here is my resume
            <a
              target='_blank'
              href='https://www.canva.com/design/DAFfIkU_HrU/z15K2QWN1ix395Rh9nCfXg/edit?utm_content=DAFfIkU_HrU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
            >
              <GrDocumentDownload />
            </a>
          </h4>
        </div>
        <div className='about-title'>And when I'm not coding?</div>
        <div className='about-text-nonpro'>
          <p>
            I love hiking and walking. I have done a couple of multi-day hikes.
            the most recent one was the Thorsnborne Trail on Hinchinbrook
            Island.
          </p>
          <p>
            I love to listen to music, mostly electronic music. Boards Of
            Canada, Solar Fields..
          </p>
          <p>
            I love to learn new things. I read a lot on almost every topics,
            from science to politics and new technology. I love history, my
            favorite topics are: Roman, Greeks, Middle Ages, Napoleon, and the
            World Wars.
          </p>
          <p>
            I like to craft as well, from making Origami to journaling, I'm also
            drawing.
          </p>
        </div>
      </div>
      <div className='about-graph'>
        <div className='about-graph-elements'>
          <GiHiking className='about-icon' />
          <p>Hiking</p>
        </div>
        <div className='about-graph-elements'>
          <SiSnapcraft className='about-icon' />
          <p>Crafting</p>
        </div>
        <div className='about-graph-elements'>
          <GiAirplaneDeparture className='about-icon' />
          <p>Traveling</p>
        </div>
        <div className='about-graph-elements'>
          <GiMusicalNotes className='about-icon' />
          <p>Music</p>
        </div>
        <div className='about-graph-elements'>
          <GiCook className='about-icon' />
          <p>Cooking</p>
        </div>
        <div className='about-graph-elements'>
          <GiBookmark className='about-icon' />
          <p>Reading</p>
        </div>
        <div className='about-graph-elements'>
          <GiMeditation className='about-icon' />
          <p>Meditating</p>
        </div>
      </div>
    </div>
  );
};

export default About;
