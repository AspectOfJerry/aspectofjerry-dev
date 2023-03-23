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
        y: [15, 0],
        opacity: [0, 1]
    },
    transition: {
        duration: 0.6,
        delay: 0.1,
    }
};


const About = () => {
    return (
        <>
            <h2 className="head-text">About <span>Me</span></h2>

            <motion.p
                className="text app__about-text"
                whileInView={{y: [15, 0], opacity: [0, 1]}}
                transition={{duration: 0.75, delay: 0.1}}
            >
                Hello, I'm Jerry. That's all for now. 😄😐<br />
                Gamer dolphin is here!<br />
                -&gt; 🐬 &lt;-
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
