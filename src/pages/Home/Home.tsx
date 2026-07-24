import "./Home.css";
import { useNavigate } from "react-router-dom";
import LiquidButton from "../../components/LiquidButton/LiquidButton";

const navigationItems = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Experience", path: "/experience" },
    { title: "Interests", path: "/interests" },
    { title: "Contact", path: "/contact" }
];

function Home() {

    const navigate = useNavigate();

    return (
        <main className="home">

            <section className="hero">

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