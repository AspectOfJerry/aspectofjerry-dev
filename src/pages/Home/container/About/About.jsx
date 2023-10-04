import React from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";


// https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/first-brand-guidelines-2020.pdf
// https://info.firstinspires.org/hubfs/2023%20Season/2023%20season%20assets/frc-chargedup-assets/firstenergize-frc-chargedup-styleguide.pdf
// https://info.firstinspires.org/hubfs/2022%20Season%20Assets/free-season-assets/ft%20-%20freight%20frenzy/firstforward-ftc-freightfrenzy-styleguide.pdf

const abouts = [
    {
        title: "Team 3990",
        description: "I'm on Team 3990, Tech for Kids, competing in the FIRST Robotics Competition.",
        iconUrl: media.t4k_logo_reduced,
        url: "https://www.team3990.com/en/"
    },
    {
        title: "FIRST® Robotics Competition",
        description: "FIRST inspires future tech leaders, founded by Dean Kamen in 1989.",
        iconUrl: media.frc_icon_vert,
        url: "https://www.firstinspires.org/robotics/frc"
    },
    {title: "Crescendo", description: "CRESCENDO presented by Haas | 2023-2024", iconUrl: media.crescendo_horz},
    // {title: "2023 FIRST® Championship", description: "FIRST ENERGIZE season championship at Houston, Texas, April 19-22 | 2023.", iconUrl: media.first_cmp_2023},
    {
        title: "Charged Up & Championship",
        description: "CHARGED UP and FIRST ENERGIZE Championship | Houston, TX, Apr 19-22, 2023",
        iconUrl: media.charged_up_horz
    },
    {
        title: "FIRST® Tech Challenge",
        description: "I participated in FREIGHT FRENZY with Team 20117 | 2021-2022",
        iconUrl: media.ftc_icon_vert,
        url: "https://www.firstinspires.org/robotics/ftc"
    },
    // {title: "Freight Frenzy", description: "FREIGHT FRENZY presented by Raytheon Technologies | 2021-2022", iconUrl: media.freight_frenzy_vert}
];

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
            {/*<p className="p-text app__about_note">
                📌 Hello, World! 🚧
            </p>*/}
            <h2 className="title-text">About <span>Me</span></h2>

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

            <p className="p-text">🚧 rework in progress 🚧</p>

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
