import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Socials.scss";


const socials = [
    {name: "Discord", description: "Jerry#3756", iconUrl: media.clyde_icon_blurple},
    {name: "GitHub", description: "AspectOfJerry", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "Instagram", description: "aspectofjerry", iconUrl: media.instagram_gradient, url: "https://www.instagram.com/aspectofjerry/"},
    {name: "Reddit", description: "AspectOfJerry", iconUrl: media.reddit_mark, url: "https://www.reddit.com/user/AspectOfJerry"},
    {name: "Twitch", description: "aspectofjerrylive", iconUrl: media.twitch_glitch_purple, url: "https://www.twitch.tv/aspectofjerrylive"},
    {name: "YouTube", description: "@aspectofjerry", iconUrl: media.youtube_icon, url: "https://www.youtube.com/@aspectofjerry"}
];

const texts = [
    {title: "Contact info", description: "📡 You can find my contact information and social media links here.", imageUrl: ""},
    {title: "Public Email", description: "📧 jerry@jerrydev.net", imageUrl: ""},
];

const Socials = ({theme}) => {
    socials.find(e => e.name === "GitHub").iconUrl = theme.theme === "dark" ? media.github_white : media.github;

    return (
        <>
            <h2 className="head-text">Contact <span>info</span> & Socials</h2>

            <div className="app__socials-container">
                <motion.div className="app__socials-list">
                    {socials.map((social) => {
                        return (
                            <motion.div
                                // whileInView={{opacity: [0, 1]}}
                                // transition={{duration: 0.5}}
                                className="app__socials-item app__flex"
                                key={social.name}
                            >
                                <div className="app__flex">
                                    <a href={social.url} target="_blank" rel="noreferrer">
                                        <img src={social.iconUrl} alt={social.name} />
                                    </a>
                                </div>
                                <p className="bold-text">{social.name}</p>
                                <p className="p-text">{social.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
                {/* 2:58:35 */}
                <motion.div className="app__socials-texts">
                    {texts.map((text, index) => {
                        return (
                            <motion.div
                                whileInView={{opacity: [0, 1], x: [40, 0]}}
                                transition={{duration: 0.65, ease: "easeOut", delay: 0.03}}
                                className="app__socials-text app__flex"
                                key={index}
                            >
                                <h4 className="bold-text">{text.title}</h4>
                                <p className="p-text">{text.description}</p>
                                <div className="app__image-socials-text-image">
                                    {text.imageUrl ? <img src={text.imageUrl} alt={text.title} /> : ""}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Socials, "socials");
