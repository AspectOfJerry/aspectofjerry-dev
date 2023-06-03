import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Skills.scss";


const skills = [
    {name: "Microsoft Azure", color: "", iconUrl: media.azure, url: "https://azure.microsoft.com/en-ca/"},
    {name: "C++", color: "", iconUrl: media.cpp, url: "https://isocpp.org/"},
    {name: "CSS", color: "", iconUrl: media.css, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "Cloudflare", iconUrl: media.cf_logo, url: "https://www.cloudflare.com/"},
    {name: "DiscordJS", color: "", iconUrl: media.djs, url: "https://discord.js.org/#/"},
    {name: "Git", color: "", iconUrl: media.git, url: "https://git-scm.com/"},
    {name: "GitHub", color: "", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "HTML", color: "", iconUrl: media.html, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "", iconUrl: media.java, url: "https://www.java.com/en/"},
    {name: "JavaScript", color: "", iconUrl: media.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "MongoDB", color: "", iconUrl: media.mongodb_leaf, url: "https://www.mongodb.com/"},
    {name: "NodeJS", color: "", iconUrl: media.nodejs_js, url: "https://nodejs.org/en"},
    {name: "Python", color: "", iconUrl: media.python_logo, url: "https://www.python.org/"},
    {name: "ReactJS", color: "", iconUrl: media.reactjs, url: "https://react.dev/"},
    {name: "Sass", color: "", iconUrl: media.sass, url: "https://sass-lang.com/"},
    {name: "Visual Studio Code", color: "", iconUrl: media.vscode, url: "https://code.visualstudio.com/"},
];

const experience = [
    {
        year: "2017",
        works: [
            {name: "Programming", description: "Maybe when I started programming? Hello, World!"}
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
            // {name: "Website", description: "Created the website you are currently on"},
            {name: "ReactJS", description: "Learned ReactJS basics"},
            {name: "HTML", description: "Learned HyperText Markup Language"},
            {name: "CSS", description: "Learned Cascading Style Sheets"}
        ]
    },
    {
        year: "2023",
        works: [
            {name: "Sass", description: "Learned Syntactically Awesome Style Sheets"},
            {name: "Python", description: "Learned Python"}
        ]
    }
];

const Skills = ({theme}) => {
    skills.find(e => e.name === "GitHub").iconUrl = theme.className === "app_dark" ? media.github_white : media.github;

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
                    <img className="app__skills-gh-card" src="https://github-readme-stats.vercel.app/api/top-langs/?username=aspectofjerry&layout=compact&langs_count=10&hide_title=true&hide_border=true&bg_color=00000000&title_color=87ceeb" alt="Github languages card" />
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
