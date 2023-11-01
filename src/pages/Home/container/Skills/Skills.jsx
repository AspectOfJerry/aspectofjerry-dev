import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Skills.scss";


// color: H, S:35%, V: 100%
const tech_stack = [
    // {name: "C++", color: "", iconUrl: media.cpp, url: "https://isocpp.org/"},
    {name: "CSS", color: "#a6c1ff", iconUrl: media.css, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "Cloudflare", color: "#ffcea6", iconUrl: media.cf_logo, url: "https://www.cloudflare.com/"},
    {name: "DiscordJS", color: "#a6adff", iconUrl: media.djs, url: "https://discord.js.org/#/"},
    {name: "Git", color: "#ffaca6", iconUrl: media.git, url: "https://git-scm.com/"},
    {name: "HTML", color: "#ffc1a6", iconUrl: media.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "#a6eaff", iconUrl: media.java, url: "https://www.java.com/en/"},
    {name: "JavaScript", color: "#fff5a6", iconUrl: media.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "Kotlin", color: "#e6a6ff", iconUrl: media.kotlin, url: "https://kotlinlang.org/"},
    // {name: "MongoDB", color: "", iconUrl: media.mongodb_leaf, url: "https://www.mongodb.com/"},
    {name: "NodeJS", color: "#b8ffa6", iconUrl: media.nodejs_js, url: "https://nodejs.org/en"},
    {name: "Python", color: "#ffeda6", iconUrl: media.python, url: "https://www.python.org/"},
    {name: "PyTorch", color: "#ffb5a6", iconUrl: media.pytorch_flame, url: "https://pytorch.org/"},
    {name: "ReactJS", color: "#a6edff", iconUrl: media.reactjs, url: "https://react.dev/"},
    {name: "Sass", color: "#ffa6d2", iconUrl: media.sass, url: "https://sass-lang.com/"},
    {name: "TensorFlow", color: "#ffe1a6", iconUrl: media.tensorflow_logo, url: "https://www.tensorflow.org/"},
    {name: "WPILib", color: "#ffa6af", iconUrl: media.wpilib, url: "https://docs.wpilib.org/en/stable/"},
];

const dev_tools = [
    {name: "Microsoft Azure", color: "#a6d8ff", iconUrl: media.azure, url: "https://azure.microsoft.com/en-ca/"},
    {name: "GitHub", color: "#a6d2ff", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "IntelliJ IDEA", color: "#ffa6b9", iconUrl: media.intellij_idea, url: "https://www.jetbrains.com/idea/"},
    {name: "PyCharm", color: "#a6ffdb", iconUrl: media.pycharm, url: "https://www.jetbrains.com/pycharm/"},
    {name: "Visual Studio Code", color: "#a6dbff", iconUrl: media.vscode, url: "https://code.visualstudio.com/"},
    {name: "WebStorm", color: "#a6fbff", iconUrl: media.webstorm, url: "https://www.jetbrains.com/webstorm/"}
];


const Skills = ({theme}) => {
    dev_tools.find(e => e.name === "GitHub").iconUrl = theme.theme === "dark" ? media.github_white : media.github;

    return (
        <>
            <div style={{position: "relative"}}>
                <motion.div
                    className="title-text-bars"
                    initial={{width: 0, opacity: 1}}
                    whileInView={{x: [0, 280], opacity: 0}} // Animate "//" from left to right
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
                    transition={{duration: 0.50, delay: 0.55, ease: "easeInOut"}}
                >
                    Skills <span>&</span> Tools
                </motion.h2>
            </div>

            <h3 className="subtitle-text" style={{marginTop: "1rem"}}>Tech stack</h3>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {tech_stack.map((skill) => {
                        return (
                            <motion.div
                                className="app__skills-item app__flex"
                                key={skill.name}
                            >
                                <motion.a href={skill.url}
                                          target="_blank"
                                          rel="noreferrer"
                                          whileHover={{boxShadow: `0 0 20px ${skill.color}`}}>
                                    <img src={skill.iconUrl} alt={skill.name} />
                                </motion.a>
                                <p className="p-text app__skills-item-name">{skill.name}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
            <h3 className="subtitle-text" style={{marginTop: "0.5rem"}}>Development tools</h3>
            <motion.div className="app__skills-container">
                <div>
                    <h4 className="bold-text">GitHub languages</h4>
                    <p className="p-text"></p>
                    <img className="app__dev-tools-langs-card"
                         src="https://github-readme-stats.vercel.app/api/top-langs/?username=aspectofjerry&layout=compact&langs_count=10&hide_title=true&hide_border=true&bg_color=00000000&title_color=87ceeb"
                         alt="Github languages card" />
                </div>
                <div className="app__skills-list">
                    {dev_tools.map((tool) => {
                        return (
                            <motion.div
                                className="app__skills-item app__flex"
                                key={tool.name}
                            >
                                <motion.a href={tool.url}
                                          target="_blank"
                                          rel="noreferrer"
                                          whileHover={{boxShadow: `0 0 20px ${tool.color}`}}>
                                    <img src={tool.iconUrl} alt={tool.name} />
                                </motion.a>
                                <p className="p-text app__skills-item-name">{tool.name}</p>
                            </motion.div>
                        )
                    })}
                </div>


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
        </>
    );
};

export default AppWrap(Skills, "skills");
