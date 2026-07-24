import "./Contact.css";

import { 
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";


function Contact(){

    const contacts = [

        {
            title:"Phone",
            value:"+27 81 212 4253",
            icon:<FaPhone />,
            link:"tel:+27812124253",
            className:"phone"
        },


        {
            title:"Email",
            value:"kgohlello2@gmail.com",
            icon:<FaEnvelope />,
            link:"https://mail.google.com/mail/?view=cm&fs=1&to=your-kgohlello2@gmail.com",
            className:"email"
        },


        {
            title:"GitHub",
            value:"github.com/mmusorams",
            icon:<FaGithub />,
            link:"https://github.com/mmusorams",
            className:"github"
        },


        {
            title:"LinkedIn",
            value:"linkedin.com/in/kgohlello-ramafalo",
            icon:<FaLinkedin />,
            link:"https://www.linkedin.com/in/kgohlello-ramafalo-a6676940b/",
            className:"linkedin"
        }

    ];


    return(

        <main className="contact-page">


            <h1 className="page-heading">
                CONTACT
            </h1>


            <p className="contact-intro">
                Let's connect and create something meaningful.
            </p>


            <div className="contact-grid">

                {
                    contacts.map((contact)=>(
                        
                        <a
                            href={contact.link}
                            className={`contact-card ${contact.className}`}
                            key={contact.title}
                            target="_blank"
                            rel="noreferrer"
                        >

                            <div className="contact-icon">
                                {contact.icon}
                            </div>


                            <h2>
                                {contact.title}
                            </h2>


                            <p>
                                {contact.value}
                            </p>


                        </a>

                    ))
                }

            </div>


        </main>

    );

}


export default Contact;