import projects from '../data/projects';
import Project from './Project.js';
import Skills from './Skills.js';
import About from './About.js';
import Contact from './Contact.js';
import '../style/Intro.css'

const Intro = () => {

    const renderProjects = () => {
        return (
            <div className='project-preview'>
                <h2>Projects</h2>
                <div className='project-display'>
                    {projects.map((p, i) => (
                        <Project
                            key={i}
                            title={p.title}
                            subtitle={p.subtitle}
                            description={p.description}
                            imgSrc={p.imgSrc}
                            techstack={p.techstack}
                            link={p.link}
                        />
                    ))}
                </div>
            </div>
        )
    }



    return (
        <section className="intro">

            <div className='intro-profile'>
                {/* profile */}
                <h1>Kyle Tan</h1>
                <h2>Building skills in Software, Cloud, and DevOps Engineering</h2>
                <p className="intro-text">
                    Hey! I'm Kyle, a recent CompSci grad interested in Backend, Cloud, and DevOps. I'm currently building projects to sharpen my skills in Kubernetes and CI/CD workflows ^.^
                </p>
                <p>Melbourne, Australia</p>

            </div>
            <div className="about-me">
                <Skills />
                <About />
            </div>

            {renderProjects()}




            <Contact />





        </section>
    );
}

export default Intro;