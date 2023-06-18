import React, {useEffect, useState} from "react";

import "./Navbar.scss";
import {media} from "../../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi"; // 49:42
import {motion} from "framer-motion";


const Navbar = ({toggleTheme, themes, theme}) => { // 32:35
    const [showMenu, setShowMenu] = useState(false);
    const [isShrunk, setShrunk] = useState(false);
    const scrollThreshold = 96;

    useEffect(() => {
        let isScrolling = false;

        const handleScroll = () => {
            if(!isScrolling) {
                window.requestAnimationFrame(() => {
                    setShrunk(
                        document.body.scrollTop > scrollThreshold ||
                        document.documentElement.scrollTop > scrollThreshold
                    );
                    isScrolling = false;
                });
            }

            isScrolling = true;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <motion.nav
            className={`app__navbar${isShrunk ? " app__navbar-shrunk" : ""}`}
            initial={{opacity: 1, y: -96}}
            animate={{opacity: [0, 1], y: [-96, 0]}}
            transition={{delay: 1.75}}
        >
            <div className="app__navbar-logo">
                <a href="https://jerrydev.net">
                    <img src={media.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <motion.ul
                className="app__navbar-nav-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [25, 0]}}
                transition={{delay: 2}}
            >
                {/* div for line on hover */}
                <li className="app__flex p-text">
                    <div />
                    <a href="#home">Home</a>
                </li>
                <li className="app__flex p-text">
                    <div />
                    <a href="#about">About</a>
                </li>
                <li className="app__flex p-text">
                    <div />
                    <a href="#skills">Skills</a>
                </li>
                <li className="app__flex p-text">
                    <div />
                    <a href="#socials">Socials</a>
                </li>
                <li className="app__flex p-text">
                    <div />
                    <a href="#projects">Projects</a>
                </li>
            </motion.ul>
            <motion.ul
                className="app__navbar-ext-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [25, 0]}}
                transition={{delay: 2}}>
                {/* div for line on hover */}
                <li className="app__flex p-text">
                    <div />
                    <a href="https://status.jerrydev.net" target="_blank" rel="noreferrer">Status page</a>
                </li>
            </motion.ul>

            <div className="app__navbar-theme-toggle">
                <button onClick={() => toggleTheme(Object.values(themes))}>
                    <div className="theme-container">
                        <div className={`theme-circle ${theme.className}`} />
                        <div className="text theme-name">{theme.name}</div>
                    </div>
                </button>
            </div>

            <div className={`${showMenu ? "app__navbar-menu" : "app__navbar-menu-hidden"}`}>
                <HiMenuAlt4 onClick={() => setShowMenu(true)} />

                <div>
                    <HiX onClick={() => setShowMenu(false)} />
                    <ul>
                        <li className="app__flex p-text">
                            <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
                        </li>
                        <li className="app__flex p-text">
                            <a href="#about" onClick={() => setShowMenu(false)}>About</a>
                        </li>
                        <li className="app__flex p-text">
                            <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
                        </li>
                        <li className="app__flex p-text">
                            <a href="#socials" onClick={() => setShowMenu(false)}>Socials</a>
                        </li>
                        <li className="app__flex p-text">
                            <a href="#projects" onClick={() => setShowMenu(false)}>Projects</a>
                        </li>
                    </ul>
                    <ul className="app__navbar-ext-links">
                        <li className="app__flex p-text">
                            <a href="https://status.jerrydev.net" target="_blank" rel="noreferrer">Status page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav >
    );
};

export default Navbar;
