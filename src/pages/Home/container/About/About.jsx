import React from "react";
import {motion} from "framer-motion";

import "./About.scss";
import {images} from "../../../../constants";

const abouts = [
    {title: "Team 3990", description: "Tech For Kids, participating in the FIRST Robotics Competition.", iconUrl: images.t4k_logo_reduced, url: "https://www.team3990.com/en/"},
    {title: "FIRST Robotics Competition", description: "I am currently in Team 3990 for the FIRST Robotics Competition.", iconUrl: images.FRC_IconVert, url: "https://www.firstinspires.org/robotics/frc"},
    {title: "FIRST Tech Challenge", description: "I was in team 20117 for the FIRST Tech Challenge.", iconUrl: images.FTC_IconVert, url: "https://www.firstinspires.org/robotics/ftc"},
];

const text_fade_in = {
    whileInView: {
        y: [20, 0],
        opacity: [0, 1]
    },
    transition: {
        duration: 0.55,
        type: "tween",
        ease: "easeOut",
        delay: 0.1
    }
};


const About = () => {
    return (
        <>
            <motion.p
                className="p-text app__about_note"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                🚧 This website is under development. More content will be added later. 🚧
            </motion.p>

            <h2 id="about" className="head-text">About <span>Me</span></h2>

            <motion.p
                className="text app__about-text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                Hello, I'm Jerry, a student and member of <a href="https://www.team3990.com/en/" target={"_blank"} rel="noreferrer">Team 3990</a> at the <a href="https://www.firstinspires.org/robotics/frc" target={"_blank"} rel="noreferrer">First Robotics Competition</a>.<br />
                📍Canada 🍁
            </motion.p>

            <div className="app__profiles">
                {abouts.map((about, index) => {
                    return (
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{type: "spring", duration: 0.5}}
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
                                className="p-text"
                                style={{marginTop: 10}}
                                whileInView={text_fade_in.whileInView}
                                transition={text_fade_in.transition}
                            >
                                {about.description}
                            </motion.p>
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
};

export default About;
