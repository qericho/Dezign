import { useEffect, useState, useCallback } from "react";
import Logo from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [bg, setBg] = useState(false);
    const [active, setActive] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleScroll = useCallback(() => {
        setBg(window.scrollY >= 150);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

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

                <ul className="hidden md:flex space-x-5 text-[16px] lg:text-[18px] font-bold text-white">
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

                <FaBars
                    className="text-2xl md:text-3xl text-white md:hidden cursor-pointer"
                    onClick={() => setMobileMenu(true)}
                    aria-label="Open mobile menu"
                />
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed block md:hidden w-full h-screen left-0 top-0 z-10 bg-black transition-transform duration-300 ${
                    mobileMenu ? "translate-x-0" : "translate-x-full"
                }`}
                aria-hidden={!mobileMenu}
            >
                <div>
                    <ul className="w-full h-screen text-white gap-5 text-2xl flex flex-col items-center justify-center">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`cursor-pointer transition-all duration-200 ${
                                        active === link.id
                                            ? "text-[#C54B8C] relative after:content-[''] after:block after:w-[15px] after:h-[3px] after:mt-1 after:mx-auto after:bg-white"
                                            : "hover:text-[#C54B8C]"
                                    }`}
                                    onClick={() => {
                                        setActive(link.id);
                                        setMobileMenu(false);
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <span
                        className="absolute top-5 right-5 md:text-4xl text-3xl text-white cursor-pointer"
                        onClick={() => setMobileMenu(false)}
                        aria-label="Close mobile menu"
                    >
                        <IoClose />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
