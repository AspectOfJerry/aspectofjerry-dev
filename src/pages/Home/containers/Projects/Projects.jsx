import React, {useState} from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Projects.scss";
import SectionTitle from "../../../components/SectionTitle";

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
        name: "JerryBot (decommissioned)",
        category: "JavaScript",
        description: "JerryBot#9090 was a Discord bot built on discord.js v13.",
        homepage: "https://bot.jerrydev.net/",
        imageUrl: media.discord_mark_blurple
    },
    {
        name: "MotionLens FRC assisted scouting",
        category: "Python",
        description: "MotionsLens uses the Zebra MotionWorks tracker data to assist in scouting.",
        homepage: "",
        imageUrl: ""
    }
];

const Projects = ({themeMode}) => {
    projectsData.find(e => e.name === "JerryBot (decommissioned)").imageUrl = themeMode === "dark" ? media.discord_mark_white : media.discord_mark_black;

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
            <SectionTitle raw="Projects">
                <span>Pro</span>jects
            </SectionTitle>

            <div className="projects__filter">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleFilter(category)}
                        className={`projects__filter-cat p-text ${activeFilter?.name?.toLowerCase() === category.name.toLowerCase() ? "item-active" : ""}`}
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            <p className="p-text">🚧 work in progress 🚧</p>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="projects__portfolio"
            >
                {filterProjects.map((project, index) => (
                    <motion.div
                        className="projects__item"
                        key={index}
                        whileHover={{scale: [1, 1.025]}}
                    >
                        <div className="projects__inner_media">
                            <img className="projects__img" src={project.imageUrl} alt={project.name} />
                            <p className="projects__category p-text">{project.category}</p>
                        </div>
                        <div className="projects__content">
                            <h4 className="bold-text">{project.name}</h4>
                            <p className="p-text">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(Projects, "projects");
