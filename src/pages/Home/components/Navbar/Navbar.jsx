import React, {useState} from "react";

import "./Navbar.scss";
import {images} from "../../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi"; // 49:42
import {motion} from "framer-motion";

const Navbar = () => { // 32:35
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="https://aspectofjerry.dev">
                    <img src={images.favicon} alt="AspectOfJerry Minecraft Head" height="16" />
                </a>
            </div>
            <div className="app__navbar-message">
                <p>This website is under development</p>
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "skills", "contact", "projects"].map((element) => (
                    <li className="app__flex p-text" key={`link-${element}`}>
                        {/* Circle above hover */}
                        <div />
                        <a href={`#${element}`}>{element}</a>
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
                            {["home", "about", "skills", "contact", "projects"].map((element) => (
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
