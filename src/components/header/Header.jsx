import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, LogoutBtn } from "../";
import Container from "../../container/container";
import { useState } from "react";

function Header({ classname = "" }) {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", URL: "/home", active: true },
        { name: "All Posts", URL: "/all-posts", active: true },
        { name: "About", URL: "/about", active: true },
        { name: "Donations", URL: "/donate", active: true },
        { name: "Login", URL: "/login", active: !authStatus },
        { name: "Sign Up", URL: "/signUp", active: !authStatus },
        { name: "Add Post", URL: "/add-post", active: authStatus },
    ];

    return (
        <>
            {/* Header itself */}
            <header className={`bg-[#0C0A3E] rounded-full px-6 py-3 shadow-lg w-full z-20 ${classname}`}>
                <Container>
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center justify-between">
                        <div className="flex items-center space-x-4 ml-3">
                            <Logo width="48" height="48" />
                            <span className="text-white text-xl font-extrabold">TravelBlog</span>
                        </div>

                        <ul className="flex items-center gap-4 mr-3">
                            {navItems.map(
                                (el) =>
                                    el.active && (
                                        <li key={el.name}>
                                            <button
                                                onClick={() => navigate(el.URL)}
                                                className="px-4 py-2 rounded-full bg-[#FF8000] text-white font-semibold hover:bg-orange-500 transition duration-200 shadow-sm hover:shadow-md"
                                            >
                                                {el.name}
                                            </button>
                                        </li>
                                    )
                            )}
                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Logo width="36" height="36" />
                            <span className="text-white text-lg font-bold">TravelBlog</span>
                        </div>

                        <button
                            className="text-white text-3xl focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </Container>
            </header>

            {/* Dropdown menu appears separately and doesn't disturb header */}
            {menuOpen && (
                <div className="md:hidden bg-[#1E1B4B] rounded-xl mx-4 mt-2 p-4 shadow-lg z-10 relative">
                    {navItems.map(
                        (el) =>
                            el.active && (
                                <div key={el.name} className="mb-2">
                                    <button
                                        onClick={() => {
                                            navigate(el.URL);
                                            setMenuOpen(false);
                                        }}
                                        className="block w-full text-left text-white py-2 px-3 rounded-lg hover:bg-[#2E2A6A] transition"
                                    >
                                        {el.name}
                                    </button>
                                </div>
                            )
                    )}
                    {authStatus && (
                        <div className="mt-3">
                            <LogoutBtn />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Header;
