import { FiExternalLink } from 'react-icons/fi';

// Everything dynamic

const Projects = ({ setDataProjects, dataProjects }) => {
  return (
    <div className='portfolio-projects'>
      {dataProjects.flatMap((project) => {
        const { id, img, title, desc, skills, link, shortTitle } = project;
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
              <FiExternalLink />
              <a href={link}>{shortTitle}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
