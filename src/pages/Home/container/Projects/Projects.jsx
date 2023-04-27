import React from "react";
import {motion} from "framer-motion";
import {images} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";

import "./Projects.scss";

const Projects = () => {
    return (
        <>
            <h2 className="head-text"><span>Pro</span>jects</h2>
            <p className="text">💭</p>
        </>
    );
};

export default AppWrap(Projects, "projects");
