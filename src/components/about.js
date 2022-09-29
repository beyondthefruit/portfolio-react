import { SiSnapcraft } from 'react-icons/si';
import {
  GiHiking,
  GiAirplaneDeparture,
  GiCook,
  GiBookmark,
  GiMusicalNotes,
  GiMeditation,
} from 'react-icons/gi';
import { AiOutlineCode } from 'react-icons/ai';

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
        <div className='about-title'>And when I'm not coding?</div>
        <div className='about-text-nonpro'>
          <p>
            I love hiking and walking. I have done a couple of multi-days hikes.
            the most recent one was the Thorsnborne Trail on Hinchinbrook
            Island.
          </p>
          <p>
            I love to listen to music, mostly electronic music. Board Of Canada,
            Solar Fields...
          </p>
          <p>
            I love to learn new things. I read a lot on almost every topics,
            from science to politic and technology.
          </p>
        </div>
        <h4>
          <a href=''>
            If you want to know more about my experience, please download my
            resume
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
          <p>Listening</p>
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
          <p>Meditation</p>
        </div>
      </div>
    </div>
  );
};

export default About;
