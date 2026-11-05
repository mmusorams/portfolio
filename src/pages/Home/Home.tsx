
import "./Home.css";

function Home() {
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
                            href={`${import.meta.env.BASE_URL}CV_Portfolio.pdf`}
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
                        src={`${import.meta.env.BASE_URL}Image.jpeg`}
                        alt="Kgohlello Ramafalo"
                    />

                </div>

            </section>

        </main>
    );
}

export default Home;
