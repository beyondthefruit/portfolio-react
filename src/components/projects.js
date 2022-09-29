// import { FiExternalLink } from 'react-icons/fi';
import { TbEyeCheck } from 'react-icons/tb';
import { GiMagnifyingGlass } from 'react-icons/gi';

// Everything dynamic

const Projects = ({ setDataProjects, dataProjects }) => {
  return (
    <div className='portfolio-projects'>
      {dataProjects.flatMap((project) => {
        const { id, img, title, desc, skills, linkWeb, linkGit, shortTitle } =
          project;
        return (
          <div key={id} className='project'>
            <img src={img} alt={title} />
            <h4 className='project-title'>{title}</h4>
            <p>{desc}</p>
            <div className='project-skills'>
              {skills.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
            <div className='project-link'>
              <a target='_blank' href={linkWeb}>
                <TbEyeCheck />
              </a>
              <p> {shortTitle}</p>
              <a target='_blank' href={linkGit}>
                <GiMagnifyingGlass />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
