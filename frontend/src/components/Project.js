import '../style/Project.css'

const Project = ({ title, subtitle, description, imgSrc, link }) => {
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
                TODO: project core technologies used
            </div>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>);
}

export default Project;