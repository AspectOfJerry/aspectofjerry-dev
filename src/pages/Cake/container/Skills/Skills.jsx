import React from "react";
import {motion} from "framer-motion";
// import {Tooltip} from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

import {images} from "../../../../constants";
import {AppWrap} from "../../../Global/wrapper";

import "./Skills.scss";


const skills = [
    {name: "Aseprite", color: "", iconUrl: "", url: ""},
    {name: "C#", color: "", iconUrl: images.cs, url: ""},
    {name: "Batch", color: "", iconUrl: "", url: ""},
    {name: "Git", color: "", iconUrl: images.git, url: "https://git-scm.com/"},
    {name: "GitHub", color: "", iconUrl: images.github, url: "https://github.com/AspectOfJerry"},
    {name: "HTML", color: "", iconUrl: images.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "", iconUrl: images.java, url: "https://www.java.com/en/"},
    {name: "Unity", color: "", iconUrl: images.unity, url: ""},
    {name: "VBS", color: "", iconUrl: images.vbs, url: ""},
    {name: "Visual Studio Code", color: "", iconUrl: images.vscode, url: "https://code.visualstudio.com/"},
];

const experience = [
    {
        year: "2017",
        works: [
            {name: "Programming", description: "Interest in programming. Hello, World!", iconUrl: images.vscode_alt}
        ]
    },
    {
        year: "2020",
        works: [
            {name: "Unity", description: "Learned Unity"},
            {name: "C#", description: "Learned C#"}
        ]
    },
    {
        year: "2021",
        works: [
            {name: "Java", description: "Learned Java"}
        ]
    },
    {
        year: "2022",
        works: [
            {name: "Batch/CMD", description: "Learned Batch"},
            {name: "Pixel Art", description: "Started Pixel Art using Aseprite"}
        ]
    },
    {
        year: "2023",
        works: [
            {name: "VBS", description: "Learned VBS"},
            {name: "HTML", description: "Learned HTML"}
        ]
    }
];

const Skills = () => {
    return (
        <>
            <h2 className="head-text">Skills, Tools & <span>Exp</span>erience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => {
                        return (
                            <motion.div
                                // whileInView={{opacity: [0, 1]}}
                                // transition={{duration: 0.5}}
                                className="app__skills-item app__flex"
                                key={skill.name}
                            >
                                <div className="app__flex" style={{backgroundColor: skill.color}}>
                                    <a href={skill.url} target="_blank" rel="noreferrer">
                                        <img src={skill.iconUrl} alt={skill.name} />
                                    </a>
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
                {/* 2:58:35 */}
                <motion.div className="app__skills-exp">
                    {experience.map((experience) => {
                        return (
                            <motion.div
                                className="app__skills-exp-item"
                                key={experience.year}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{experience.year}</p>
                                </div>
                                <motion.div className="app__skills-exp-works">
                                    {experience.works.map((work) => {
                                        return (
                                            <motion.div
                                                whileInView={{opacity: [0, 1], x: [40, 0]}}
                                                transition={{duration: 0.65, ease: "easeOut", delay: 0.03}}
                                                className="app__skills-exp-work app__flex"
                                                // data-tip
                                                // data-for={work.name}
                                                key={work.name}
                                            >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.description}</p>
                                            </motion.div >
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills");
