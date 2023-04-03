import React from "react";
import {motion} from "framer-motion";

import "./About.scss";
import {images} from "../../../../constants";

// https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/first-brand-guidelines-2020.pdf
// https://info.firstinspires.org/hubfs/2023%20Season/2023%20season%20assets/frc-chargedup-assets/firstenergize-frc-chargedup-styleguide.pdf
// https://info.firstinspires.org/hubfs/2022%20Season%20Assets/free-season-assets/ft%20-%20freight%20frenzy/firstforward-ftc-freightfrenzy-styleguide.pdf

const abouts = [
    {title: "Team 3990", description: "Tech For Kids, participating in the FIRST Robotics Competition.", iconUrl: images.t4k_logo_reduced, url: "https://www.team3990.com/en/"},
    {title: "FIRST® Robotics Competition", description: "I am currently in Team 3990 for the FIRST Robotics Competition.", iconUrl: images.FRC_IconVert, url: "https://www.firstinspires.org/robotics/frc"},
    {title: "Charged Up", description: "CHARGED UP presented by Haas | 2022-2023", iconUrl: images.CHARGED_UP_Horiz, url: "https://www.firstinspires.org/robotics/frc/game-and-season"},
    {title: "FIRST® Tech Challenge", description: "I was in team 20117 for the FIRST Tech Challenge.", iconUrl: images.FTC_IconVert, url: "https://www.firstinspires.org/robotics/ftc"},
    {title: "Freight Frenzy", description: "FREIGHT FRENZY presented by Raytheon Technologies | 2021-2022", iconUrl: images.FREIGHT_FRENZY_Vert, url: "https://www.firstinspires.org/robotics/ftc/game-and-season"}
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
