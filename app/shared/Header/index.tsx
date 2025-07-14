import React, { useEffect, useState } from 'react';
import LIGHT_LOGO from "~/img/logo-light.svg";
import DARK_LOGO from "~/img/logo-dark.svg";
import { useLocation } from '@remix-run/react';

const MENU = [
    { id: 0, name: 'Being Here', link: '/beinghere' },
    { id: 1, name: 'How We Hire', link: '/how-we-hire' },
    { id: 2, name: 'All Jobs', link: '/jobs' },
    { id: 3, name: 'ICLD', link: '/icld' },
];

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Now it's safe to access window

        const checkScreen = () => setIsLargeScreen(window.innerWidth > 768);
        checkScreen();

        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsHomePage(true)
        }
    }, [location])


    if (!isMounted) {
        return null;
    }

    // location.pathname !== '/'

    return (
        <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? `${isHomePage ? 'bg-white/80' : 'bg-purple/80'} backdrop-blur shadow-md` : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 md:px-0 py-4 flex items-center justify-between">
                <a href="/" className='block transition-all w-32 md:w-auto'>
                    <img
                        src={isHomePage ? DARK_LOGO : LIGHT_LOGO}
                        alt="Ilesuem Club"
                    />
                </a>

                {isLargeScreen ? (
                    <nav className="space-x-4 md:space-x-10">
                        {MENU.map((menu) => (
                            <a
                                key={menu.id}
                                href={menu.link}
                                className={`text-xs ${isHomePage ? 'text-black' : 'text-white'} md:text-base transition-all hover:underline`}
                            >
                                {menu.name}
                            </a>
                        ))}
                    </nav>
                ) : (
                    <nav className="space-x-4 md:space-x-10">
                        {MENU.map((menu) => (
                            <a
                                key={menu.id}
                                href={menu.link}
                                className={`text-xs ${isHomePage ? 'text-black' : 'text-white'} md:text-base transition-all hover:underline`}
                            >
                                {menu.name}
                            </a>
                        ))}
                    </nav>
                )}

            </div>
        </header>
    );
};

export default Header;
