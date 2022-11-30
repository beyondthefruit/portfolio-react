import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';

const Projects = ({ dataProjects }) => {
  return (
    <div className='portfolio-projects'>
      {dataProjects.flatMap((project) => {
        const { id, img, title, desc, skills, linkWeb, linkGit, shortTitle } =
          project;
        return (
          <div key={id} className='project'>
            <img src={img} alt={title} />
            <h4 className='project-title'>{title}</h4>
            <div className='project-description'>{desc}</div>
            <div className='project-skills'>
              {skills.map((skill) => {
                return <p className='icon-skills'>{skill}</p>;
              })}
            </div>
            <div className='project-link'>
              <a target='_blank' href={linkWeb}>
                <FiExternalLink />
              </a>
              <p> {shortTitle}</p>
              <a target='_blank' href={linkGit}>
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
