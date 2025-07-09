import React, { useEffect, useState } from 'react';
import LIGHT_LOGO from "~/img/logo-light.svg";
import DARK_LOGO from "~/img/logo-dark.svg";

const MENU = [
    { id: 0, name: 'Being Here', link: '' },
    { id: 1, name: 'How We Hire', link: '' },
    { id: 2, name: 'All Jobs', link: '' },
    { id: 3, name: 'ICLD', link: '' },
];

const Header = ({ isDark = false }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-purple/80 backdrop-blur shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 md:px-0 py-4 flex items-center justify-between">
                <a href="#">
                    <img
                        className="w-3/6 md:w-auto transition-all"
                        src={isDark ? DARK_LOGO : LIGHT_LOGO}
                        alt="Ilesuem Club"
                    />
                </a>

                <nav className="space-x-4 md:space-x-10">
                    {MENU.map((menu) => (
                        <a
                            key={menu.id}
                            href={menu.link}
                            className="text-xs md:text-base transition-all hover:underline"
                        >
                            {menu.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
