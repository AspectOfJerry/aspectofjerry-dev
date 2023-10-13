import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Skills.scss";


const tech_stack = [
    {name: "Microsoft Azure", color: "", iconUrl: media.azure, url: "https://azure.microsoft.com/en-ca/"},
    // {name: "C++", color: "", iconUrl: media.cpp, url: "https://isocpp.org/"},
    {name: "CSS", color: "", iconUrl: media.css, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "Cloudflare", iconUrl: media.cf_logo, url: "https://www.cloudflare.com/"},
    {name: "DiscordJS", color: "", iconUrl: media.djs, url: "https://discord.js.org/#/"},
    {name: "Git", color: "", iconUrl: media.git, url: "https://git-scm.com/"},
    {name: "HTML", color: "", iconUrl: media.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "", iconUrl: media.java, url: "https://www.java.com/en/"},
    {name: "JavaScript", color: "", iconUrl: media.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "Kotlin", color: "", iconUrl: media.kotlin, url: "https://kotlinlang.org/"},
    // {name: "MongoDB", color: "", iconUrl: media.mongodb_leaf, url: "https://www.mongodb.com/"},
    {name: "NodeJS", color: "", iconUrl: media.nodejs_js, url: "https://nodejs.org/en"},
    {name: "Python", color: "", iconUrl: media.python_logo, url: "https://www.python.org/"},
    {name: "ReactJS", color: "", iconUrl: media.reactjs, url: "https://react.dev/"},
    {name: "Sass", color: "", iconUrl: media.sass, url: "https://sass-lang.com/"}
];

const dev_tools = [
    {name: "GitHub", color: "", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "IntelliJ IDEA", color: "", iconUrl: media.intellij_idea, url: "https://www.jetbrains.com/idea/"},
    {name: "PyCharm", color: "", iconUrl: media.pycharm, url: "https://www.jetbrains.com/pycharm/"},
    {name: "Visual Studio Code", color: "", iconUrl: media.vscode, url: "https://code.visualstudio.com/"},
    {name: "WebStorm", color: "", iconUrl: media.webstorm, url: "https://www.jetbrains.com/webstorm/"}
];

const experience = [
    {
        year: "2015",
        works: [
            {name: "Scratch :)", description: ""}
        ]
    },
    {
        year: "2016",
        works: [
            {name: "NXT/EV3", description: ""}
        ]
    },
    {
        year: "2020",
        works: [
            {name: "C++", description: ""}
        ]
    },
    {
        year: "2021",
        works: [
            {name: "JavaScript", description: ""},
            {name: "NodeJS", description: ""},
            {name: "Java", description: ""}
        ]
    },
    {
        year: "2022",
        works: [
            {name: "Web dev", description: ""}
        ]
    },
    {
        year: "2023",
        works: [
            {name: "Python", description: ""}
        ]
    }
];

const Skills = ({theme}) => {
    dev_tools.find(e => e.name === "GitHub").iconUrl = theme.theme === "dark" ? media.github_white : media.github;

    return (
        <>
            <h2 className="title-text">Skills <span>&</span> Tools</h2>

            <div className="app__skills-container">
                {/*<h3 className="subtitle-text">Tech stack</h3>*/}
                <motion.div className="app__tech-stack-list">
                    {tech_stack.map((skill) => {
                        return (
                            <motion.div
                                // whileInView={{opacity: [0, 1]}}
                                // transition={{duration: 0.5}}
                                className="app__tech-stack-item app__flex"
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
                {/*<h3 className={"subtitle-text"}>Development tools</h3>*/}
                <motion.div className="app__dev-tools-list">
                    <h4 className="bold-text">GitHub languages</h4>
                    <p className="p-text"></p>
                    <img className="app__dev-tools-gh-card"
                         src="https://github-readme-stats.vercel.app/api/top-langs/?username=aspectofjerry&layout=compact&langs_count=10&hide_title=true&hide_border=true&bg_color=00000000&title_color=87ceeb"
                         alt="Github languages card" />

                    <h3 className={"subtitle-text"}>Development tools</h3>
                    <p className="p-text">🚧 under construction 🚧</p>

                    {tech_stack.map((skill) => {
                        return (
                            <motion.div
                                // whileInView={{opacity: [0, 1]}}
                                // transition={{duration: 0.5}}
                                className="app__tech-stack-item app__flex"
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


                    {/*    {experience.map((experience) => {
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
                                                whileInView={{opacity: [0, 1], x: [50, 0]}}
                                                transition={{duration: 0.65, ease: "easeInOut"}}
                                                className="app__skills-exp-work app__flex"
                                                // data-tip
                                                // data-for={work.name}
                                                key={work.name}
                                            >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.description}</p>
                                            </motion.div>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )
                    })}*/}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills");
