import React from "react";
import {motion} from "framer-motion";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";
import SectionTitle from "../../../components/SectionTitle";

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
    return (
        <>
            {/*<p className="p-text about__note">
                📌 Hello, World! 🚧
            </p>*/}
            <div style={{marginTop: "2rem"}} />
            <SectionTitle raw="About Me">
                About <span>Me</span>
            </SectionTitle>

            <motion.p
                className="p-text about__text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                👋 Hello there, I'm Jerry - a coding enthusiast residing in 🍁Canada!
                <br /><br />
                💡 Coding is more than just a hobby for me; it's a passion I pursue daily. I enjoy finding new challenges and learning as much as I can.
                <br /><br />
                🔍 Besides coding, I'm interested in areas like AI, machine learning, computer vision, networking, game engines.
                <br /><br />
                🎮 When I'm not immersed in coding, you might find exploring the dungeons of Lethal Company, competing in Valorant, or exploring the
                blocky world of Minecraft.
            </motion.p>
        </>
    );
};

export default AppWrap(About, "about");
