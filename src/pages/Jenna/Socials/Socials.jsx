import React from "react";
import {motion} from "framer-motion";

import {media} from "../../../../constants";
import {AppWrap} from "../../../components/index.js";

import "./Socials.scss";
import SectionTitle from "../../../components/SectionTitle";

// color: H, S:35%, V: 100%
const socials = [
    {name: "⭐ Instagram", color: "#ffa6c3", description: "aspectofjerry", iconUrl: media.instagram_gradient, url: "https://www.instagram.com/aspectofjerry/"},
    {name: "Discord", color: "#a6adff", description: "jerrydev", iconUrl: media.clyde_icon_blurple},
    {name: "GitHub", color: "#a6d2ff", description: "AspectOfJerry", iconUrl: media.github, url: "https://github.com/AspectOfJerry"},
    {name: "Minecraft", color: "#beffa6", description: "AspectOfJerry", iconUrl: media.minecraft, url: "https://www.minecraft.net/"},
    // {name: "Reddit", color: "#ffc3a6", description: "AspectOfJerry", iconUrl: media.reddit_mark, url: "https://www.reddit.com/user/AspectOfJerry"},
    {name: "Riot ID", color: "#ffa6b5", description: "jerry#dev", iconUrl: media.riot_games, url: "https://playvalorant.com/"},
    {name: "Snapchat", color: "#fffea6", description: "aspectofjerry", iconUrl: media.snapcode_aspectofjerry, url: "https://t.snapchat.com/ZyCoCeUP"},
    {name: "Steam", color: "#a6eaff", description: "jerryberrydev", iconUrl: media.steam}
    // {name: "Twitch", color: "#c9a6ff", description: "aspectofjerrylive", iconUrl: media.twitch_glitch_purple, url: "https://www.twitch.tv/aspectofjerrylive"},
    // {name: "YouTube", color: "#ffaaa6", description: "@aspectofjerry", iconUrl: media.youtube_icon, url: "https://www.youtube.com/@aspectofjerry"}
];

const texts = [
    {title: "Contact info", description: "📡 You can find my contact information and social media links here.", imageUrl: ""},
    {title: "Public Email", description: "📧 jerry@jerrydev.net", imageUrl: ""},
    {title: "", description: "💭 Most of the time, you'll find me on Instagram and Discord.", imageUrl: ""},
    {title: "", description: "✨ Let's build something magic together!", imageUrl: ""},
];

const Socials = ({theme}) => {
    socials.find(e => e.name === "GitHub").iconUrl = theme.theme === "dark" ? media.github_white : media.github;

    return (
        <>
            <SectionTitle raw="Socials">
                <span>So</span>cials
            </SectionTitle>

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
