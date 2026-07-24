import "./About.css";



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

                <div className="skills-grid">

                    <div className="skill-category">

                        <h3>Frontend</h3>

                        <div className="skill-tags">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>

                    </div>

                    <div className="skill-category">

                        <h3>Programming</h3>

                        <div className="skill-tags">
                            <span>Java</span>
                            <span>Python</span>
                            <span>C++</span>
                            <span>SQL</span>
                        </div>

                    </div>

                    <div className="skill-category">

                        <h3>Tools</h3>

                        <div className="skill-tags">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>VS Code</span>
                            <span>Figma</span>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;