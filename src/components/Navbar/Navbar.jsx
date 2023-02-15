import React from 'react';

import "./Navbar.scss";
import {images} from "../../constants/index.js";

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.aspectOfJerry_head} alt="AspectOfJerry Minecraft Head" />
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "skills", "contact", "projects"].map((element) => (
                    <li className="app__lex p-text" key={`link-${element}`}>
                        <a href={`#${element}`}>{element}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
