import "./Experience.css";


function Experience(){

    const experiences = [

        {
            date:"FEB 2026 — PRESENT",
            role:"Junior Developer",
            company:"Cannafrica",
            description:
            "Building business systems focused on backend development, database integration, and scalable software solutions.",
            skills:[
                "Node.js",
                "PostgreSQL",
                "Backend Development",
                "Database Design",
                "Apple & Google Wallet Research"
            ]
        },


        {
            date:"MAR 2026 — PRESENT",
            role:"Systems Analysis & Design Student Assistant",
            company:"North-West University",
            description:
            "Supporting students with system development concepts, requirements analysis, and project documentation.",
            skills:[
                "Systems Analysis",
                "Requirements Engineering",
                "Technical Communication",
                "Student Support"
            ]
        },


        {
            date:"OCT 2025 — DEC 2025",
            role:"Tech Consultant",
            company:"CogniHeroes Academy",
            description:
            "Provided technical guidance, recommended digital tools, and supported workflow improvements through technology adoption.",
            skills:[
                "Technical Consulting",
                "Problem Solving",
                "Workflow Optimisation"
            ]
        },


        {
            date:"JUL 2025 — NOV 2025",
            role:"UI Programming Student Assistant",
            company:"North-West University",
            description:
            "Assisted students during practical sessions, supported assessments, marked scripts, and helped explain programming concepts.",
            skills:[
                "Programming Support",
                "Assessment",
                "Mentoring",
                "Communication"
            ]
        },


        {
            date:"MAR 2025 — JUN 2025",
            role:"Mathematics Peer-Assisted Learning Assistant",
            company:"North-West University",
            description:
            "Supported distance-learning students by communicating module information, assisting with coursework, and monitoring academic progress.",
            skills:[
                "Academic Support",
                "Communication",
                "Performance Tracking"
            ]
        },


        {
            date:"FEB 2025 — MAR 2025",
            role:"Basic Computer Skills Assistant",
            company:"North-West University",
            description:
            "Helped students develop foundational computer literacy skills and provided support with everyday digital tools.",
            skills:[
                "Microsoft Office",
                "Digital Literacy",
                "Technical Support"
            ]
        }

    ];


    return(

        <main className="experience-page">

            <h1 className="page-heading">
                EXPERIENCE
            </h1>


            <div className="experience-container">

                {
                    experiences.map((experience,index)=>(

                        <article 
                            className="experience-card"
                            key={index}
                        >

                            <span className="experience-date">
                                {experience.date}
                            </span>


                            <h2>
                                {experience.role}
                            </h2>


                            <h3>
                                {experience.company}
                            </h3>


                            <p>
                                {experience.description}
                            </p>


                            <div className="experience-tags">

                                {
                                    experience.skills.map(skill=>(
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))
                                }

                            </div>


                        </article>

                    ))
                }


            </div>


        </main>

    );

}


export default Experience;