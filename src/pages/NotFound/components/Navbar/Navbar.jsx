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
        <nav className={`notfound__navbar${isShrunk ? " notfound__navbar-shrunk" : ""}`}>
            <div className="notfound__navbar-logo">
                <a href="https://jerrydev.net">
                    <img src={media.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <ul className="notfound__navbar-nav-links">
                {[...Array(6)].map((_, index) => (
                    <li key={index} className="notfound__flex p-text">
                        <div />
                        <a href="/">Take me home</a>
                    </li>
                ))}
            </ul>


            <div className="notfound__navbar-theme-toggle">
                <button onClick={() => toggleTheme(Object.values(themes))}>
                    <div className="theme-container">
                        <div className={`theme-circle ${theme.className}`} />
                        <div className="text theme-name">{theme.name}</div>
                    </div>
                </button>
            </div>

            <div className={`${showMenu ? "notfound__navbar-menu" : "notfound__navbar-menu-hidden"}`}>
                <HiMenuAlt4 onClick={() => setShowMenu(true)} />

                <motion.div
                // whileInView={{width: [0, 200]}}
                // initial={{width: 0}}
                // transition={{duration: 5, ease: "easeOut"}}
                >
                    <HiX onClick={() => setShowMenu(false)} />

                    <ul>
                        {[...Array(6)].map((_, index) => (
                            <li key={index} className="notfound__flex p-text">
                                <a href="/" onClick={() => setShowMenu(false)}>Take me home</a>
                            </li>
                        ))}
                    </ul>

                </motion.div>
            </div>
        </nav >
    );
};

export default Navbar;
