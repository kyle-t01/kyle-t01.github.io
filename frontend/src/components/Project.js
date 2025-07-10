import '../style/Project.css'
import TechIcon from './TechIcon';
const Project = ({ title, subtitle, description, imgSrc, techstack, link }) => {
    return (
        <div className="project">


            <div className="project-details">
                <h2 className="project-title">{title}</h2>
                <h3 className="project-subtitle">{subtitle}</h3>
                <ul className="project-list">
                    {description.map((dotPoint, index) => (
                        <li className="project-dotpoint" key={index}>{dotPoint}</li>
                    ))}
                </ul>

            </div>
            <div className="project-image-wrapper">
                <img src={imgSrc} alt={title} className="project-image" />
            </div>
            <div className='project-tech'>
                {techstack?.map((tech, i) => (
                    <TechIcon iconURL={tech} key={i} />

                ))}
            </div>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default Project;