import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/experience" element={<Experience />} />

                    <Route path="/contact" element={<Contact />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;