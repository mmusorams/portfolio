import "./Projects.css";


function Projects(){

    const projects = [

        {
            title:"Ecotrashure Info System",
            stack:"C# • SQL • Figma • GitHub",
            description:
            "Information system developed to manage recycling data, improve data organisation, and support efficient information management."
        },


        {
            title:"Apex Database System",
            stack:"Oracle • Database Design • ER Modelling",
            description:
            "A database management solution designed to store, organise, and retrieve organisational information efficiently."
        },


        {
            title:"KNGWoo Order Management",
            stack:"React • TypeScript • Node.js • Express.js • React Hot Toast • Axios",
            description:
            "A full-stack order management web application featuring CRUD operations, API integration, filtering, pagination, and responsive UI design."
        },

        {
            title:"Personal Portfolio Website",
            stack:"React • TypeScript • CSS • Vite",
            description:
            "A modern interactive portfolio website designed to showcase my skills, experience, and software projects."
        }

    ];


    return (

        <main className="projects-page">

            <h1 className="page-heading">
                PROJECTS
            </h1>


            <div className="projects-grid">


                {
                    projects.map((project,index)=>(

                        <div 
                            className="project-card"
                            key={project.title}
                        >

                            <span className="project-number">
                                0{index+1}
                            </span>


                            <h2>
                                {project.title}
                            </h2>


                            <p className="project-description">
                                {project.description}
                            </p>


                            <span className="project-stack">
                                {project.stack}
                            </span>


                        </div>

                    ))
                }


            </div>


        </main>

    );

}


export default Projects;