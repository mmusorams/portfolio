import { Outlet, useNavigate, useLocation, } from "react-router-dom";
import LiquidButton from "../LiquidButton/LiquidButton";
import "./Layout.css";

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigationItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Experience", path: "/experience" },
        { title: "Interests", path: "/interests" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <main className="layout">

            <Outlet />

            <nav className="bottom-nav">

                {navigationItems.map((item) => (
                    
                    <LiquidButton
                        key={item.title}
                        active={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                    >
                        {item.title}
                    </LiquidButton>

                ))}

            </nav>

        </main>
    );
}

export default Layout;