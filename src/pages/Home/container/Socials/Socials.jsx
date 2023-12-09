import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Socials.scss";

// color: H, S:35%, V: 100%
const socials = [
    {name: "Discord", color: "#a6adff", description: "jerrydev", iconUrl: media.clyde_icon_blurple},
    {name: "GitHub", color: "#a6d2ff", description: "AspectOfJerry", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "Instagram", color: "#ffa6c3", description: "aspectofjerry", iconUrl: media.instagram_gradient, url: "https://www.instagram.com/aspectofjerry/"},
    // {name: "Reddit", color: "#ffc3a6", description: "AspectOfJerry", iconUrl: media.reddit_mark, url: "https://www.reddit.com/user/AspectOfJerry"},
    {name: "Twitch", color: "#c9a6ff", description: "aspectofjerrylive", iconUrl: media.twitch_glitch_purple, url: "https://www.twitch.tv/aspectofjerrylive"},
    {name: "YouTube", color: "#ffaaa6", description: "@aspectofjerry", iconUrl: media.youtube_icon, url: "https://www.youtube.com/@aspectofjerry"}
];

const texts = [
    {title: "Contact info", description: "📡 You can find my contact information and social media links here.", imageUrl: ""},
    {title: "Public Email", description: "📧 jerry@jerrydev.net", imageUrl: ""},
];

const Socials = ({theme}) => {
    socials.find(e => e.name === "GitHub").iconUrl = theme.theme === "dark" ? media.github_white : media.github;

    return (
        <>
            <div style={{position: "relative"}}>
                <motion.div
                    className="title-text-bars"
                    initial={{width: 0, opacity: 1}}
                    whileInView={{x: [0, 170], opacity: 0}} // Animate "//" from left to right
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
                    <span>So</span>cials
                </motion.h2>
            </div>

            <div className="app__socials-container">
                <motion.div className="app__socials-list">
                    {socials.map((social) => {
                        return (
                            <motion.div
                                className="app__socials-item app__flex"
                                key={social.name}
                            >
                                <motion.a href={social.url}
                                          rel="noreferrer"
                                          whileHover={{boxShadow: `0 0 30px ${social.color}`}}
                                >
                                    <img src={social.iconUrl} alt={`${social.name} img`} />
                                </motion.a>
                                <p className="bold-text">{social.name}</p>
                                <p className="p-text">{social.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <motion.div className="app__socials-texts">
                    {texts.map((text, index) => {
                        return (
                            <motion.div
                                whileInView={{opacity: [0, 1], x: [50, 0]}}
                                transition={{duration: 0.65, ease: "easeInOut"}}
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
