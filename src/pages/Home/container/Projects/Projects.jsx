import React, {useState} from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Projects.scss";

const categories = [
    {
        name: "All",
        description: "",
        imageUrl: "",
    },
    {
        name: "Java",
        description: "",
        imageUrl: "",
    },
    {
        name: "JavaScript",
        description: "",
        imageUrl: "",
    },
    {
        name: "Python",
        description: "",
        imageUrl: "",
    },
];

const projectsData = [
    {
        name: "BapUtils",
        category: "Java",
        description: "BapUtils is a Hypixel Skyblock mod featuring a variety of random utility features for Minecraft Forge 1.8.9.",
        homepage: "https://bap.jerrydev.net/",
        imageUrl: media.bap_dolphin
    },
    {
        name: "JerryBot",
        category: "JavaScript",
        description: "JerryBot#9090 is a Discord bot built on discord.js v13.",
        homepage: "",
        imageUrl: ""
    }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [filterProjects, setFilterProjects] = useState(projectsData);

    const handleFilter = (category) => {
        setActiveFilter(category);
        setAnimateCard({y: 100, opacity: 0});

        setTimeout(() => {
            setAnimateCard({y: 0, opacity: 1});

            if (category === "All") {
                setFilterProjects(projectsData);
            } else {
                setFilterProjects(projectsData.filter((project) => project.category === category));
            }
        }, 500);
    };

    return (
        <>
            <div style={{position: "relative"}}>
                <motion.div
                    className="title-text-bars"
                    initial={{width: 0, opacity: 1}}
                    whileInView={{x: [0, 180], opacity: 0}} // Animate "//" from left to right
                    exit={{opacity: 0}}
                    transition={{
                        x: {duration: 0.65, ease: "easeInOut"},
                        opacity: {delay: 0.60} // Delay the fade out of "//" to allow the title text to fade in
                    }}
                >
                    <span id="inner">/</span>/<span>/</span>
                </motion.div>
                <motion.h2
                    className="title-text"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}} // Fade in the title text
                    exit={{opacity: 1}}
                    transition={{duration: 0.50, delay: 0.45, ease: "easeInOut"}}
                >
                    <span>Pro</span>jects
                </motion.h2>
            </div>

            <div className="app__projects-filter">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleFilter(category)}
                        className={`app__projects-filter-cat app__flex p-text ${activeFilter?.name?.toLowerCase() === category.name.toLowerCase() ? "item-active" : ""}`}
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            <p className="p-text">🚧 work in progress 🚧</p>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__projects-portfolio"
            >
                {filterProjects.map((project, index) => (
                    <motion.div
                        className="app__projects-item app__flex"
                        key={index}
                        whileHover={{scale: [1, 1.10]}}
                    >
                        <div className="app__projects-img app__flex">
                            <img src={project.imageUrl} alt={`${project.name} img`} />
                            {/* <motion.div
                                whileHover={{opacity: [0, 1]}}
                                transition={{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                                className="app__projects-hover app__flex"
                            >
                                <a href={project.projectLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.90]}}
                                        transition={{duration: 0.25}}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.90]}}
                                        transition={{duration: 0.25}}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div> */}
                        </div>
                        <div className="app__projects-content app__flex">
                            <h4 className="bold-text">{project.name}</h4>
                            <p className="p-text" style={{marginTop: 10}}>{project.description}</p>
                            <div className="app__projects-tag app__flex">
                                <p className="p-text">{project.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(Projects, "projects");
