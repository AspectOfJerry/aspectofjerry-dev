import React from "react";
import {motion} from "framer-motion";

import "./About.scss";
import {images} from "../../../../constants";

const abouts = [
    {title: "foo", description: "bar", iconUrl: images.placeholder},
    {title: "baz", description: "qux", iconUrl: images.placeholder},
    {title: "quux", description: "corge", iconUrl: images.placeholder},
    {title: "grault", description: "garply", iconUrl: images.placeholder}
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
        delay: 0.03
    }
};


const About = () => {
    return (
        <>
            <h2 id="about" className="head-text">About <span>Me</span></h2>

            <motion.p
                className="text app__about-text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                Hello, I'm Jerry, a student and member of <a href="https://www.team3990.com/en/" target={"_blank"} rel="noreferrer">Team 3990</a> at the <a href="https://www.firstinspires.org/robotics/frc" target={"_blank"} rel="noreferrer">First Robotics Competition</a>. That's all for now. 😐<br /><br />
                The gamer dolphin is here!<br />
                -&gt; 🐬 &lt;-<br />
                Awesome! 😄
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
                            <img src={about.iconUrl} alt={about.title}></img>
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
