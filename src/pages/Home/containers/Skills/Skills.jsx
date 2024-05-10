import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Skills.scss";
import SectionTitle from "../../../components/SectionTitle";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

// color: H, S:35%, V: 100%
const tech_stack = [
    // {name: "C++", color: "", iconUrl: media.cpp, score: 0, url: "https://isocpp.org/"},
    // {name: "CSS", color: "#a6c1ff", iconUrl: media.css, score: 0, url: "https://www.w3.org/TR/CSS/#css"},
    {name: "DiscordJS", color: "#a6adff", iconUrl: media.djs, score: 3, url: "https://discord.js.org/#/"},
    {name: "HTML", color: "#ffc1a6", iconUrl: media.html, score: 4, url: "https://html.spec.whatwg.org/"},
    {name: "Java", color: "#a6eaff", iconUrl: media.java, score: 5, url: "https://www.java.com/en/"},
    {name: "JavaScript", color: "#fff5a6", iconUrl: media.javascript, score: 5, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "Kotlin", color: "#e6a6ff", iconUrl: media.kotlin, score: 1, url: "https://kotlinlang.org/"},
    // {name: "NodeJS", color: "#b8ffa6", iconUrl: media.nodejs_js, score: 0, url: "https://nodejs.org/en"},
    {name: "Python", color: "#ffeda6", iconUrl: media.python, score: 3, url: "https://www.python.org/"},
    {name: "PyTorch", color: "#ffb5a6", iconUrl: media.pytorch_flame, score: 3, url: "https://pytorch.org/"},
    {name: "ReactJS", color: "#a6edff", iconUrl: media.reactjs, score: 4, url: "https://react.dev/"},
    {name: "Sass/CSS", color: "#ffa6d2", iconUrl: media.sass, score: 3, url: "https://sass-lang.com/"},
    {name: "TensorFlow", color: "#ffe1a6", iconUrl: media.tensorflow_logo, score: 2, url: "https://www.tensorflow.org/"},
    {name: "WPILib", color: "#ffa6af", iconUrl: media.wpilib, score: 3, url: "https://docs.wpilib.org/en/stable/"},
];

const dev_tools = [
    {name: "Cloudflare", color: "#ffcea6", iconUrl: media.cf_logo, url: "https://www.cloudflare.com/"},
    {name: "DigitalOcean", color: "#a6d2ff", iconUrl: media.digitalocean, url: "https://www.digitalocean.com/"},
    {name: "Git", color: "#ffaca6", iconUrl: media.git, url: "https://git-scm.com/"},
    {name: "GitHub", color: "#a6d2ff", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "IntelliJ IDEA", color: "#ffa6b9", iconUrl: media.intellij_idea, url: "https://www.jetbrains.com/idea/"},
    {name: "PyCharm", color: "#a6ffdb", iconUrl: media.pycharm, url: "https://www.jetbrains.com/pycharm/"},
    {name: "VS Code", color: "#a6dbff", iconUrl: media.vscode, url: "https://code.visualstudio.com/"},
    {name: "WebStorm", color: "#a6fbff", iconUrl: media.webstorm, url: "https://www.jetbrains.com/webstorm/"}
];


const Skills = ({themeMode}) => {
    dev_tools.find((e) => e.name === "GitHub").iconUrl = themeMode === "dark" ? media.github_white : media.github;

    useGSAP(() => {
        gsap.fromTo(".skills__score-bar", {
            width: "0%",
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: ".skills__score-bar",
            },
            width: "100%",
            opacity: 1,
            duration: 3.5,
            ease: "power3.out",
            stagger: 0.1
        });
    }, []);

    return (
        <>
            <SectionTitle raw="Skills & Tools">
                Skills <span>&</span> Tools
            </SectionTitle>

            <h3 className="subtitle-text" style={{marginTop: "1.5rem"}}>Tech stack</h3>
            <div className="skills__container">
                <p className="p-text skills__side-text">
                    💭 Here are some of the technologies I've worked with. I'm always looking to learn new things and improve my skills.
                </p>
                <div className="skills__grid">
                    {tech_stack.map((skill) => {
                        return (
                            <motion.div
                                className="skills__item app__flex"
                                whileHover={{boxShadow: `0 0 16px ${skill.color}80`}}
                                key={skill.name}
                            >
                                <a href={skill.url} target="_blank" rel="noreferrer">
                                    <img src={skill.iconUrl} alt={`${skill.name} img`} />
                                </a>
                                <div className="skills__item-name-container">
                                    <p className="p-text">{skill.name}</p>
                                    <div className="skills__score-container">
                                        <div className="skills__score-bar" style={{maxWidth: `${skill.score * 20}%`}} />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
            <h3 className="subtitle-text" style={{marginTop: "1rem"}}>Development tools</h3>
            <div className="skills__container">
                <div>
                    <h4 className="bold-text">GitHub languages</h4>
                    <p className="p-text"></p>
                    <img
                        className="skills__langs-card"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=aspectofjerry&layout=compact&langs_count=10&hide_title=true&hide_border=true&bg_color=00000000&title_color=87ceeb"
                        alt="Github languages card" />
                </div>
                <div className="skills__grid">
                    {dev_tools.map((tool) => {
                        return (
                            <motion.div
                                className="skills__item app__flex"
                                whileHover={{boxShadow: `0 0 16px ${tool.color}80`}}
                                key={tool.name}
                            >
                                <a href={tool.url} target="_blank" rel="noreferrer">
                                    <img src={tool.iconUrl} alt={`${tool.name} img`} />
                                </a>
                                <div className="skills__item-name-container">
                                    <p className="p-text">{tool.name}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills");
