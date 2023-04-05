import React from "react";
import {motion} from "framer-motion";
// import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {images} from "../../../../constants";
import {AppWrap} from "../../wrapper";

import "./Skills.scss";


const skills = [
    {name: "Microsoft Azure", color: "", iconUrl: images.azure, url: "https://azure.microsoft.com/en-ca/"},
    {name: "C++", color: "", iconUrl: images.cpp, url: "https://isocpp.org/"},
    {name: "CSS", color: "", iconUrl: images.css, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "Cloudflare", iconUrl: images.CF_logo, url: "https://www.cloudflare.com/"},
    {name: "DiscordJS", color: "", iconUrl: images.djs, url: "https://discord.js.org/#/"},
    {name: "GitHub", color: "", iconUrl: images.github, url: "https://github.com/"},
    {name: "HTML", color: "", iconUrl: images.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "", iconUrl: images.java, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "JavaScript", color: "", iconUrl: images.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "NodeJS", color: "", iconUrl: images.nodejs, url: "https://nodejs.org/en"},
    {name: "ReactJS", color: "", iconUrl: images.reactjs, url: "https://react.dev/"},
    {name: "Sass", color: "", iconUrl: images.sass, url: "https://sass-lang.com/"},
    {name: "Visual Studio Code", color: "", iconUrl: images.vscode, url: "https://code.visualstudio.com/"},
];

const experience = [
    {
        year: "2017",
        works: [
            {name: "Programming", description: "Interests in programming. Building EV3 robots", iconUrl: images.vscode_alt},
        ]
    },
    {
        year: "2020",
        works: [
            {name: "C++", description: "Learned C++ but forgot everything about it because I haven't used it since then", iconUrl: images.cpp},
        ]
    },
    {
        year: "2021",
        works: [
            {name: "NodeJS", description: "Learned NodeJS to make a Discord bot", iconUrl: images.nodejs},
            {name: "JavaScript", description: "Learned JavaScript", iconUrl: images.javascript},
            {name: "DiscordJS", description: "A Node.js module to interact with the Discord API for Discord bots", iconUrl: images.discordjs},
            {name: "Java", description: "Learned Java", iconUrl: images.nodejs}
        ]
    },
    {
        year: "2022",
        works: [
            {name: "Website", description: "Created the website are currently on", iconUrl: images.reactjs},
            {name: "ReactJS", description: "Learned ReactJS basics", iconUrl: images.reactjs},
            {name: "HTML", description: "Learned HyperText Markup Language", iconUrl: images.html},
            {name: "CSS", description: "Learned Cascading Style Sheets", iconUrl: images.html}
        ]
    },
    {
        year: "2023",
        works: [
            {name: "Sass", description: "Learned Syntactically Awesome Style Sheets", iconUrl: images.sass},
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
                                whileInView={{opacity: [0, 1]}}
                                transition={{duration: 0.5}}
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
                                                whileInView={{opacity: [0, 1]}}
                                                transition={{duration: 0.5}}
                                                className="app__skills-exp-work app__flex"
                                                data-tip
                                                data-for={work.name}
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
