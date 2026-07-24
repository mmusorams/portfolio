import "./Home.css";
import { useNavigate } from "react-router-dom";
import LiquidButton from "../../components/LiquidButton/LiquidButton";

const navigationItems = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Experience", path: "/experience" },
    { title: "Contact", path: "/contact" }
];

function Home() {

    const navigate = useNavigate();

    return (
        <main className="home">

           <section className="hero">

            <div className="hero-content">

                <h1 className="hero-name">
                    KGOHLELLO
                    <br />
                    RAMAFALO
                </h1>

                <p className="hero-title">
                    SOFTWARE ENGINEER
                    <br />
                    FINAL YEAR BSc IT STUDENT
                </p>

                <p className="hero-description">
                    Final-year BSc Information Technology student at North-West University
                    with practical experience in software development, database design, and
                    collaborative system building. Currently working as a Junior Developer,
                    contributing to business systems and data-driven applications with an
                    interest in backend development and reliable software solutions.
                </p>

                <div className="hero-buttons">

                    <a
                        href="/KgohlelloRamafalo_CV (UPDATED).pdf"
                        className="cv-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View CV
                    </a>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src="/Image.jpeg"
                    alt="Kgohlello Ramafalo"
                />

            </div>

        </section>

            <nav className="bottom-nav">

                {navigationItems.map((item) => (

                    <LiquidButton
                        key={item.title}
                        onClick={() => navigate(item.path)}
                    >
                        {item.title}
                    </LiquidButton>

                ))}

            </nav>

        </main>
    );
}

export default Home;