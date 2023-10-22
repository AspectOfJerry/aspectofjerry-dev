import React from "react";
import {motion, useScroll} from "framer-motion";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";

const text_fade_in = {
    whileInView: {
        y: [25, 0],
        opacity: [0, 1]
    },
    transition: {
        duration: 0.5,
        ease: "easeOut",
    }
};

const About = () => {
    const {scrollYProgress} = useScroll();

    return (
        <>
            {/*<p className="p-text app__about_note">
                📌 Hello, World! 🚧
            </p>*/}
            <div style={{marginTop: "4rem"}} />
            <h2 className="title-text">About <span>Me</span></h2>
            <motion.div
                className="title-text-line"
                initial={{scaleX: 0}}
                style={{scaleX: scrollYProgress}}
                transition={{duration: 0.5}}
            />

            <motion.p
                className="p-text app__about-text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                👋 Hey there, I'm Jerry - a coding enthusiast residing in the great white north, 🍁Canada!
                <br /><br />
                💡 Coding is more than just a hobby for me; it's a daily adventure. I'm always looking for new ways to challenge myself and expand my knowledge.
                <br /><br />
                🔍 But I don't stop at just coding; I'm captivated by machine learning, AI, computer vision, networking, game engines, and the art of ethical
                hacking.
                <br /><br />
                🎮 When I'm not diving into lines of code, you might find me exploring the blocky landscapes of Minecraft or contemplating my lack of skill in
                Valorant.
            </motion.p>

            {/*<div className="app__profiles">
                {abouts.map((about, index) => {
                    return (
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{ease: "easeInOut", duration: 0.1}}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <a href={about.url} target="_blank" rel="noreferrer">
                                <img src={about.iconUrl} alt={about.title}></img>
                            </a>
                            <motion.h2
                                className="bold-text"
                                style={{marginTop: 20}}
                                whileInView={text_fade_in.whileInView}
                                transition={text_fade_in.transition}
                            >
                                {about.title}
                            </motion.h2>
                            <motion.p
                                className="desc-text"
                                style={{marginTop: 10}}
                                whileInView={text_fade_in.whileInView}
                                transition={text_fade_in.transition}
                            >
                                {about.description}
                            </motion.p>
                        </motion.div>
                    )
                })}
            </div>*/}
        </>
    );
};

export default AppWrap(About, "about");
