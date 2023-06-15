import React, {useEffect} from "react";

import "./NotFound.scss";
import Navbar from "./components/Navbar/Navbar.jsx";

const NotFound = ({toggleTheme, themes, theme}) => {
    useEffect(() => {
        document.title = "AspectOfJerry • 404"
    }, []);

    return (
        <>
            <Navbar toggleTheme={toggleTheme} themes={themes} theme={theme} />
            <div id="NotFound" className="not-found">
                <h1 className="head-text">This is probably not what you are looking for!</h1>
                <a href="https://jerrydev.net">
                    <p className="text">Take me home</p>
                </a>
            </div>
        </>
    );
};

export default NotFound;
