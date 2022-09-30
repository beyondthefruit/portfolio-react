import { SiSnapcraft } from 'react-icons/si';
import {
  GiHiking,
  GiAirplaneDeparture,
  GiCook,
  GiBookmark,
  GiMusicalNotes,
  GiMeditation,
} from 'react-icons/gi';

import { GrDocumentDownload } from 'react-icons/gr';

const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        A transport manager turned into a passionate Web developer
      </div>
      <div className='about-text'>
        Having recently changed my career path, I am now seeking a new challenge
        on my professional journey. I've decided to pursue my interest in Web
        development and am actively looking for a job.
        <div className='about-title'>How did I learn?</div>
        <div className='about-text-nonpro'>
          <p>
            Mainly by following online courses and building my own projects.
          </p>
          <p>
            I've started learning during Covid-lockdown spent 5 months on HTML,
            CSS, Javascript and Jquery then had to find a job to pay the bill.
          </p>
          <p>
            Since February I'm back to full time learning, I've completed a
            Javascript course, I'm in the process of completing a react course
            and have followed youtube videos. Of course, following a course
            don't make you a web developer, the best way to learn is by building
            your own projects and it's what I'm currently doing.
          </p>
          <p>
            Since I started to build my project I've gained confidence in my
            coding skills through practice. Now, more than ever I know that I
            want to work as a developer.
          </p>
        </div>
        <div className='about-title'>And when I'm not coding?</div>
        <div className='about-text-nonpro'>
          <p>
            I love hiking and walking. I have done a couple of multi-days hikes.
            the most recent one was the Thorsnborne Trail on Hinchinbrook
            Island.
          </p>
          <p>
            I love to listen to music, mostly electronic music. Boards Of
            Canada, Solar Fields...
          </p>
          <p>
            I love to learn new things. I read a lot on almost every topics,
            from science to politics and technology. And I love history,
            particularly Roman, Greeks, Middle Ages, Napoleon, and the World
            Wars.
          </p>
        </div>
        <h4>
          If you want to know more about my experience, please download my
          resume
          <a href=''>
            <GrDocumentDownload />
          </a>
        </h4>
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
