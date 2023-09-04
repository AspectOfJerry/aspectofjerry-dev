import React, {useEffect, useState} from "react";

import "./Navbar.scss";
import {media} from "../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi"; // 49:42
import {motion} from "framer-motion";

const Navbar = ({toggleTheme, themes, theme, links, extLinks}) => { // 32:35
    const [showMenu, setShowMenu] = useState(false);
    const [isShrunk, setShrunk] = useState(false);
    const scrollThreshold = 32;

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
            transition={{delay: 0.25}}
        >
            <div className="app__navbar-logo">
                <a href="https://jerrydev.net">
                    <img src={media.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <motion.ul
                className="app__navbar-nav-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [-25, 0]}}
                transition={{delay: 0.50}}
            >
                {/* div for line on hover */}
                {links.map((dest, index) => (
                    <li className="app__flex p-text" key={index}>
                        <div />
                        <a href={dest.link}>{dest.name}</a>
                    </li>
                ))}
            </motion.ul>
            <motion.ul
                className="app__navbar-ext-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [-25, 0]}}
                transition={{delay: 0.50}}>
                {/* div for line on hover */}
                {extLinks.map((target, index) => (
                    <li className="app__flex p-text" key={index}>
                        <div />
                        <a href={target.link} target="_blank" rel="noreferrer">{target.name}</a>
                    </li>
                ))}
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
                        {links.map((dest, index) => (
                            <li className="app__flex p-text" key={index}>
                                <a href={dest.link} onClick={() => setShowMenu(false)}>{dest.name}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="app__navbar-ext-links">
                        {extLinks.map((dest, index) => (
                            <li className="app__flex p-text" key={index}>
                                <a href={dest.link} target="_blank" rel="noreferrer">{dest.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav >
    );
};

export default Navbar;
