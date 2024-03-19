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
        imageUrl: media.jerrybot
        // },
        // {
        //     name: "EfficientDet with EfficientNet V2 backbone",
        //     category: "Python",
        //     description: "Swapping the backbone of EfficientDet from EfficientNet B0 to EfficientNet V2 B0.",
        //     homepage: "",
        //     imageUrl: ""
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
            <SectionTitle raw="Projects">
                <span>Pro</span>jects
            </SectionTitle>

            <div className="app__projects-filter">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleFilter(category)}
                        className={`app__projects-filter-cat p-text ${activeFilter?.name?.toLowerCase() === category.name.toLowerCase() ? "item-active" : ""}`}
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
                        className="app__projects-item"
                        key={index}
                        whileHover={{scale: [1, 1.05]}}
                    >
                        <img className="app__projects-img" src={project.imageUrl} alt={`${project.name} img`} />
                        <div className="app__projects-content">
                            <p className="app__projects-category p-text">{project.category}</p>
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
