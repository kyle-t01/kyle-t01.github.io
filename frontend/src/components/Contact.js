import '../style/Intro.css'

const Contact = () => {
    return (
        <div className="contact">
            <a href="https://github.com/kyle-t01" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/kyle-t01/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            </a>
        </div>
    );
}

export default Contact;