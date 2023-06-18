import React from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";


// https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/first-brand-guidelines-2020.pdf
// https://info.firstinspires.org/hubfs/2023%20Season/2023%20season%20assets/frc-chargedup-assets/firstenergize-frc-chargedup-styleguide.pdf
// https://info.firstinspires.org/hubfs/2022%20Season%20Assets/free-season-assets/ft%20-%20freight%20frenzy/firstforward-ftc-freightfrenzy-styleguide.pdf

const abouts = [
    {title: "Team 3990", description: "I'm in Team 3990, Tech for Kids, participating in the FIRST Robotics Competition.", iconUrl: media.t4k_logo_reduced, url: "https://www.team3990.com/en/"},
    {title: "FIRST® Robotics Competition", description: "FIRST Robotics Competition", iconUrl: media.frc_icon_vert, url: "https://www.firstinspires.org/robotics/frc"},
    {title: "Crescendo", description: "CRESCENDO presented by Haas | 2023-2024", iconUrl: media.crescendo_horz},
    {title: "2023 FIRST® Championship", description: "FIRST ENERGIZE season championship at Houston, Texas, April 19-22 | 2023.", iconUrl: media.first_cmp_2023},
    {title: "Charged Up", description: "CHARGED UP presented by Haas | 2022-2023", iconUrl: media.charged_up_horz},
    {title: "FIRST® Tech Challenge", description: "I was in team 20117 for the FIRST Tech Challenge.", iconUrl: media.ftc_icon_vert, url: "https://www.firstinspires.org/robotics/ftc"},
    {title: "Freight Frenzy", description: "FREIGHT FRENZY presented by Raytheon Technologies | 2021-2022", iconUrl: media.freight_frenzy_vert}
];

const text_fade_in = {
    whileInView: {
        y: [15, 0],
        opacity: [0, 1]
    },
    transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
        delay: 0.1
    }
};

const About = () => {
    return (
        <>
            {/* <motion.p
                className="p-text app__about_note"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            > */}
            <p className="p-text app__about_note">
                📌 Testing page themes!
            </p>
            {/* </motion.p> */}

            <h2 className="head-text">About <span>Me</span></h2>

            <motion.p
                className="text app__about-text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                Hello, I'm Jerry, a student and member of <a href="https://www.team3990.com/en/" target="_blank" rel="noreferrer">Team 3990</a> at the <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noreferrer">First Robotics Competition</a>.<br />
                <br />
                🌎 Canada 🍁
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
            </div>
        </>
    );
};

export default AppWrap(About, "about");
