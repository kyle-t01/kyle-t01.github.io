import '../style/Skills.css'
import { useState } from 'react';

const Skills = () => {
    const [showIcons, setShowIcons] = useState(false);
    const renderSkill = (iconURL, text, hasIcon = true) => {
        return showIcons && hasIcon
            ? <img src={iconURL} alt={text} title={text} />
            : <span>{text}</span>
    }
    return (
        <div className="skills">
            <div>
                <h2>My Skills</h2>
                <button onClick={() => setShowIcons(!showIcons)} className="button">
                    {showIcons ? 'Show Text' : 'Show Icons'}
                </button>
            </div>

            <div className="skill-group">
                <p className="skill-category">Languages</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", "C")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "Python")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "Java")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", "Kotlin")}
                    {renderSkill("", "SQL", false)}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">Frontend</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "HTML")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "CSS")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", "Flutter")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React.js")}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">Backend</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", "Spring Boot")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "Node.js")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", "Express.js")}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">Databases</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", "MongoDB")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "MySQL")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "PostgreSQL")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", "SQLite")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", "Redis")}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">Cloud Platforms</p>
                <div className="skill-items">

                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", "Firebase")}
                    {renderSkill("", "AWS", false)}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">DevOps</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "Docker")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", "Kubernetes")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", "Redis Pub/Sub")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", "Nginx")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", "Terraform")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", "Jenkins")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", "GitHub Actions")}
                </div>
            </div>

            <div className="skill-group">
                <p className="skill-category">Other</p>
                <div className="skill-items">
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg", "Ubuntu Linux")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "Git")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", "Postman")}
                    {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", "Bash")}
                    {renderSkill("", "pgAdmin", false)}
                    {renderSkill("", "REST APIs", false)}
                    {renderSkill("", "Coroutines", false)}
                    {renderSkill("", "WebSockets", false)}
                    {renderSkill("", "WSL2", false)}
                    {renderSkill("", "Regex", false)}
                    {renderSkill("", "SCP/SSH", false)}
                </div>
            </div>

        </div>
    );
}

export default Skills;