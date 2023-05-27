import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {images} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";

import "./Projects.scss";


const categories = [
    {
        name: "All",
        description: "",
        imageUrl: ""
    },
    {
        name: "JavaScript",
        description: "",
        imageUrl: ""
    },
    {
        name: "Python",
        description: "",
        imageUrl: ""
    },
    {
        name: "Java",
        description: "",
        imageUrl: ""
    }
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [filterProject, setFilterProject] = useState([]);


    const handleFilter = (category) => {

    }

    return (
        <>
            <h2 className="head-text"><span>Pro</span>jects</h2>
            <div className="app__projects_filter">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleFilter(category)}
                        className={`app__projects_filter-item app__flex p-text ${activeFilter === category ? "item-active" : ""}`}

                    >
                        {category.name}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.50, delayChildren: 0.50}}
                className="app__project-portfolio"
            >

            </motion.div>
        </>
    );
};

export default AppWrap(Projects, "projects");
