import React from "react";
import {motion} from "framer-motion";
import {images} from "../../../../constants";

import {AppWrap} from "../../../Global/wrapper";

import "./Projects.scss";

const Projects = () => {
    return (
        <>
            <h2 className="head-text"><span>Pro</span>jects</h2>
        </>
    );
};

export default AppWrap(Projects, "projects");
