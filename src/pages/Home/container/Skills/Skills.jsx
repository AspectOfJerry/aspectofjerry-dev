import React from "react";
import {motion} from "framer-motion";
// import {Tooltip} from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

import {images} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Skills.scss";


const skills = [
    {name: "Microsoft Azure", color: "", iconUrl: images.azure, url: "https://azure.microsoft.com/en-ca/"},
    {name: "C++", color: "", iconUrl: images.cpp, url: "https://isocpp.org/"},
    {name: "CSS", color: "", iconUrl: images.css, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "Cloudflare", iconUrl: images.cf_logo, url: "https://www.cloudflare.com/"},
    {name: "DiscordJS", color: "", iconUrl: images.djs, url: "https://discord.js.org/#/"},
    {name: "Git", color: "", iconUrl: images.git, url: "https://git-scm.com/"},
    {name: "GitHub", color: "", iconUrl: images.github, url: "https://github.com/AspectOfJerry"},
    {name: "HTML", color: "", iconUrl: images.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "", iconUrl: images.java, url: "https://www.java.com/en/"},
    {name: "JavaScript", color: "", iconUrl: images.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "NodeJS", color: "", iconUrl: images.nodejs_js, url: "https://nodejs.org/en"},
    {name: "ReactJS", color: "", iconUrl: images.reactjs, url: "https://react.dev/"},
    {name: "Sass", color: "", iconUrl: images.sass, url: "https://sass-lang.com/"},
    {name: "Visual Studio Code", color: "", iconUrl: images.vscode, url: "https://code.visualstudio.com/"},
];

const experience = [
    {
        year: "2017",
        works: [
            {name: "Programming", description: "Interest in programming. Hello, World!"}
        ]
    },
    {
        year: "2020",
        works: [
            {name: "C++", description: "Learned C++ but forgot everything about it because I haven't used it since then"}
        ]
    },
    {
        year: "2021",
        works: [
            {name: "JavaScript", description: "Learned JavaScript"},
            {name: "NodeJS", description: "Learned Node.JS"},
            {name: "Java", description: "Learned Java"}
        ]
    },
    {
        year: "2022",
        works: [
            {name: "Website", description: "Created the website you are currently on"},
            {name: "ReactJS", description: "Learned ReactJS basics"},
            {name: "HTML", description: "Learned HyperText Markup Language"},
            {name: "CSS", description: "Learned Cascading Style Sheets"}
        ]
    },
    {
        year: "2023",
        works: [
            {name: "Sass", description: "Learned Syntactically Awesome Style Sheets"}
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
                    <h4 className="bold-text">GitHub languages</h4>
                    <p className="p-text"></p>
                    <img className="app__skills-gh-card" src="https://github-readme-stats.vercel.app/api/top-langs/?username=aspectofjerry&layout=compact&langs_count=10&hide_title=true&hide_border=true&bg_color=fafbfc&title_color=87ceeb" alt="Github languages card" />
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
