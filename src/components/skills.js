import css from '../imgs/css.png';
import git from '../imgs/git.png';
import graphql from '../imgs/graphql.png';
import html from '../imgs/html.png';
import react from '../imgs/react.png';
import javascript from '../imgs/javascript.png';
import { GiTeamUpgrade, GiTeamIdea, GiArchiveResearch } from 'react-icons/gi';
import { FiAirplay } from 'react-icons/fi';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-title'>Tech-skills</div>
      <div className='skills-wrap'>
        <div className='skills-cards'>
          <img src={javascript} alt='JS' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Javascript</div>
            <div className='rating'>* * * *</div>
          </div>
        </div>
        <div className='skills-cards'>
          <img src={react} alt='React' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>React JS</div>
            <div className='rating'>* * * *</div>
          </div>
        </div>
        <div className='skills-cards'>
          <img src={css} alt='CSS' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>CSS3</div>
            <div className='rating'>* * *</div>
          </div>
        </div>
        <div className='skills-cards'>
          <img src={html} alt='HTML' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>HTML5</div>
            <div className='rating'>* * *</div>
          </div>
        </div>
        <div className='skills-cards'>
          <img src={git} alt='Github' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Github</div>
            <div className='rating'>* *</div>
          </div>
        </div>
        <div className='skills-cards'>
          <img src={graphql} alt='GraphQL' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>GraphQL</div>
            <div className='rating'>*</div>
          </div>
        </div>
      </div>

      <div className='skills-title'>Soft-skills</div>
      <div className='skills-wrap'>
        <div className='skills-cards'>
          <FiAirplay className='skills-logo' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Adaptability</div>
            <div className='skills-card-desc'>
              Continuous improvement mindset
            </div>
          </div>
        </div>
        <div className='skills-cards'>
          <GiArchiveResearch className='skills-logo' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Curious</div>
            <div className='skills-card-desc'>Love learning things</div>
          </div>
        </div>
        <div className='skills-cards'>
          <GiTeamIdea className='skills-logo' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Creativity</div>
            <div className='skills-card-desc'>Creative mindset</div>
          </div>
        </div>
        <div className='skills-cards'>
          <GiTeamUpgrade className='skills-logo' />
          <div className='skills-cards-info'>
            <div className='skills-card-title'>Collaboration</div>
            <div className='skills-card-desc'>Experience working on team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
