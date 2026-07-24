import "./About.css";

import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaFigma
} from "react-icons/fa";

import {
    SiTypescript,
    SiJavascript,
    SiPostgresql,
    SiNodedotjs,
    SiExpress,
    SiVite,
    SiAxios
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function About() {
    return (
        <main className="about-page">

            <section className="about-section">

               
                 <h1 className="page-heading"> 
                        ABOUT ME
                    </h1>

                <div className="about-content">

                    <p>
                        Hi, I'm <span>Kgohlello Ramafalo</span>, a final-year
                        BSc Information Technology student at North-West University.
                        I enjoy creating modern web applications that combine
                        clean design with practical functionality.
                    </p>

                    <p>
                        My interests lie in software engineering, frontend
                        development, UI/UX design, and solving real-world
                        problems through technology. I enjoy learning new
                        frameworks, refining my coding skills, and building
                        projects that challenge me to grow.
                    </p>

                </div>

            </section>

            <div className="transition-word">

                <h1 className="page-heading"> 
                        TECH STACK
                    </h1>

            </div>

            <section className="skills-section">

            <div className="keyboard-layout">

            <div className="keyboard-row row-1">

                {/* React */}
                <div className="key">
                    <FaReact className="react" />
                    <span>React</span>
                </div>

                <div className="key">
                    <SiTypescript className="typescript" />
                    <span>TypeScript</span>
                </div>

                <div className="key">
                    <SiVite className="vite" />
                    <span>Vite</span>
                </div>

                <div className="key">
                    <SiExpress className="express" />
                    <span>Express.js</span>
                </div>


                <div className="key">
                    <FaHtml5 className="html" />
                    <span>HTML</span>
                </div>

                <div className="key">
                    <FaCss3Alt className="css" />
                    <span>CSS</span>
                </div>

            </div>

            <div className="keyboard-row row-2">

                <div className="key">
                    <FaJava className="java" />
                    <span>Java</span>
                </div>

                <div className="key">
                    <SiAxios className="axios" />
                    <span>Axios</span>
                </div>

                <div className="key">
                    <FaPython className="python" />
                    <span>Python</span>
                </div>

                <div className="key">
                    <SiNodedotjs className="node" />
                    <span>Node.js</span>
                </div>

                <div className="key">
                    <SiPostgresql className="postgres" />
                    <span>PostgreSQL</span>
                </div>

                <div className="key">
                    <span className="cplusplus">C++</span>
                </div>

            </div>

            <div className="keyboard-row row-3">

                <div className="key">
                    <FaGitAlt className="git" />
                    <span>Git</span>
                </div>

                <div className="key">
                    <SiJavascript className="javascript" />
                    <span>JavaScript</span>
                </div>

                <div className="key">
                    <span className="toast-icon">🍞</span>
                    <span>Hot Toast</span>
                </div>

                <div className="key">
                    <FaGithub className="github" />
                    <span>GitHub</span>
                </div>

                <div className="key">
                    <VscVscode className="vscode" />
                    <span>VS Code</span>
                </div>

                <div className="key">
                    <FaFigma className="figma" />
                    <span>Figma</span>
                </div>

            </div>

        </div>
            

                

        </section>

        </main>
    );
}

export default About;