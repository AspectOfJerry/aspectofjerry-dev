import React, {useEffect, useState} from "react";

import "./Navbar.scss";
import {images} from "../../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi"; // 49:42
import {motion} from "framer-motion";

const links = [
    {title: "home", url: "#home"},
    {title: "about", url: "#about"},
    {title: "skills", url: "#skills"},
    {title: "socials", url: "#socials"},
    {title: "projects", url: "#projects"},
    {title: "status page", url: "https://status.aspectofjerry.dev"}
];

const Navbar = () => { // 32:35
    const [toggle, setToggle] = useState(false);

    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handler = () => {
            setShrunk((isShrunk) => {
                if(!isShrunk && (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3)) {
                    return true;
                }

                if(isShrunk && document.body.scrollTop < 2 && document.documentElement.scrollTop < 2) {
                    return false;
                }

                return isShrunk;
            });
        }

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`app__navbar${isShrunk ? " app__navbar-shrunk" : ""}`}>
            <div className="app__navbar-logo">
                <a href="https://aspectofjerry.dev">
                    <img src={images.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <ul className="app__navbar-links">
                {links.map((element) => (
                    <li className="app__flex p-text" key={`link-${element.title}`}>
                        {/* div for line on hover */}
                        <div />
                        <a href={`${element.url}`}>{element.title}</a>
                    </li>
                ))}
            </ul>

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
