import "./Interests.css";


function Interests(){

    const interests = [

        {
            number:"01",
            title:"Technology & Innovation",
            description:
            "Exploring new technologies, software development trends, and building solutions that solve real-world problems."
        },


        {
            number:"02",
            title:"UI/UX & Creative Design",
            description:
            "Designing digital experiences that balance functionality, usability, and visual appeal."
        },


        {
            number:"03",
            title:"Content Creation",
            description:
            "Creating digital content and experimenting with storytelling, branding, and online platforms."
        },


        {
            number:"04",
            title:"Fashion & Personal Style",
            description:
            "Exploring creativity through fashion, visual identity, and self-expression."
        },


        {
            number:"05",
            title:"Roller Skating",
            description:
            "A hobby that combines movement, discipline, creativity, and continuous improvement."
        }

    ];


    return(

        <main className="interests-page">


            <h1 className="page-heading">
                INTERESTS
            </h1>


            <div className="interests-grid">


                {
                    interests.map((interest)=>(
                        
                        <article 
                            className="interest-card"
                            key={interest.number}
                        >

                            <span>
                                {interest.number}
                            </span>


                            <h2>
                                {interest.title}
                            </h2>


                            <p>
                                {interest.description}
                            </p>


                        </article>

                    ))
                }


            </div>


        </main>

    );

}


export default Interests;