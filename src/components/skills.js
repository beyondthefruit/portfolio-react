import { GiTeamUpgrade, GiTeamIdea, GiArchiveResearch } from 'react-icons/gi';
import { FiAirplay } from 'react-icons/fi';

const Skills = ({ dataSkills, setDataSkills }) => {
  return (
    <div className='skills'>
      {/* <div className='underline underline-mobile'></div> */}
      <div className='skills-title'>Tech-skills</div>
      <div className='skills-wrap'>
        {dataSkills.map((skill) => {
          const { id, img, title, achieve } = skill;
          // console.log(skill);
          return (
            <div key={id} className='skills-cards'>
              <img src={img} alt={title} />
              <div className='skills-cards-info'>
                <div className='skills-card-title'>{title}</div>
                <div className='rating'>
                  {/* width of progress bar passed from the data */}
                  <span className='progress' style={{ width: achieve }}></span>
                </div>
              </div>
            </div>
          );
        })}
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
      {/* <div className='underline underline-mobile'></div> */}
    </div>
  );
};

export default Skills;
