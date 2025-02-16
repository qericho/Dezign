import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [bg, setBg] = useState(window.scrollY >= 150);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const scrollBg = () => {
            setBg(window.scrollY >= 150);
        };
        window.addEventListener("scroll", scrollBg);
        return () => window.removeEventListener("scroll", scrollBg);
    }, []);

    const navLinks = [
        { id: "home", label: "HOME" },
        { id: "works", label: "WORK" },
        { id: "about", label: "ABOUT" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full transition-colors duration-300 z-[100]">
            <div
                className={`container mx-auto flex justify-between items-center py-3 md:py-5 px-2 lg:px-[50px] ${
                    bg ? "bg-black/30 backdrop-blur-sm duration-500" : "duration-500"
                }`}
            >
                {/* Logo */}
                <div>
                    <img src={Logo} alt="Logo" className="w-[100px]" />
                </div>

                <ul className="flex space-x-5 text-[16px] lg:text-[18px] hidden md:flex font-[700] text-white">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`cursor-pointer transition-all duration-200 ${
                                    active === link.id
                                        ? "text-[#C54B8C] relative after:content-[''] after:block after:w-[10px] after:h-[3px] after:mt-1 after:mx-auto after:bg-white"
                                        : "hover:text-[#C54B8C]"
                                }`}
                                onClick={() => setActive(link.id)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <FaBars className="text-2xl md:text-3xl text-white md:hidden cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
