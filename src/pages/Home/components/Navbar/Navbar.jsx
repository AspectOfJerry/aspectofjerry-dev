import React, {useEffect, useState} from "react";

import "./Navbar.scss";
import {images} from "../../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi"; // 49:42
import {motion} from "framer-motion";


// title prop toLowerCase() is used as key
const nav_links = [
    {title: "Home", url: "#home"},
    {title: "About", url: "#about"},
    {title: "Skills", url: "#skills"},
    {title: "Socials", url: "#socials"},
    {title: "Projects", url: "#projects"}
];

// title prop toLowerCase() is used as key
const ext_links = [
    {title: "Status page", url: "https://status.aspectofjerry.dev"},
];

const Navbar = ({toggleTheme, themes, theme}) => { // 32:35
    const [toggle, setToggle] = useState(false);
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

    // Rest of your code...

    // SHRINKS WHEN SCROLLING UP AND DOWN
    // useEffect(() => {
    //     let prevScrollY = window.pageYOffset;

    //     const handleScroll = () => {
    //         const currentScrollY = window.pageYOffset;

    //         if(currentScrollY > prevScrollY) {
    //             setShrunk(true);
    //         } else {
    //             setShrunk(false);
    //         }

    //         prevScrollY = currentScrollY;
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <nav className={`app__navbar${isShrunk ? " app__navbar-shrunk" : ""}`}>
            <div className="app__navbar-logo">
                <a href="https://aspectofjerry.dev">
                    <img src={images.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <ul className="app__navbar-nav-links">
                {nav_links.map((link) => {
                    return (
                        <li className="app__flex p-text" key={`link-${link.title.toLowerCase()}`}>
                            {/* div for line on hover */}
                            <div />
                            <a href={`${link.url}`}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="app__navbar-ext-links">
                {ext_links.map((link) => {
                    return (
                        <li className="app__flex p-text" key={`link-${link.title.toLowerCase()}`}>
                            {/* div for line on hover */}
                            <div />
                            <a href={`${link.url}`} target="_blank" rel="noreferrer">{link.title}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="app__navbar-theme-toggle">
                <button onClick={() => toggleTheme(Object.values(themes))}>
                    <div className="theme-container">
                        <div className={`theme-circle ${theme.className}`} />
                        <div className="text theme-name">{theme.name}</div>
                    </div>
                </button>
            </div>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: "easeOut"}}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {["home", "about", "skills", "socials", "projects"].map((element) => (
                                <li key={element}>
                                    <a href={`#${element}`} onClick={() => setToggle(false)}>{element}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav >
    );
};

export default Navbar;
