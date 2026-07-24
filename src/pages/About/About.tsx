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
                        I enjoy turning ideas into functional, intuitive solutions — whether that means building responsive web applications, 
                        designing user-friendly interfaces, or solving complex programming challenges. My journey in technology has allowed 
                        me to explore different areas of software development, from frontend development and databases to application design 
                        and system analysis.
                    </p>

                    <p>
                        I’m a curious and driven developer who values continuous learning, attention to detail, and writing solutions that 
                        are not only efficient but also enjoyable to use. I’m constantly expanding my skills, experimenting with new 
                        technologies, and looking for opportunities to grow as a software engineer.
                    </p>

                    <p>
                        Outside of coding, I enjoy exploring creative fields such as fashion, digital design, and content creation — 
                        interests that influence the way I approach technology and problem-solving.
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