import React from "react";
import {motion} from "framer-motion";

import "./Home.scss";
import {AppWrap} from "../../../components/index.js";
import {media} from "../../../../constants";


const Home = ({theme}) => {
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <div id="home" className="app__home app__container">
                {/* {
                    theme.bgMediaType === "image" ? (
                        <motion.img
                            key={theme.className}
                            className="app__home-bg-image"
                            src={theme.bgMedia}
                            alt="Background image"
                        />
                    ) : !isMobile && (
                        <motion.video autoPlay muted
                            className="app__home-bg-video"
                            key={theme.className}
                            alt="Background video"
                        >
                            <source src={theme.bgMedia} />
                        </motion.video>
                    )
                } */}

                <div className="app__text-container">
                    <motion.h1
                        className="app__home-text-big"
                        animate={{
                            y: [95, 0],
                            opacity: [0, 100]
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 1.1,
                            delay: 0.90
                        }}
                    >
                        Hello
                    </motion.h1>
                    <motion.h1
                        className="app__home-small"
                        animate={{
                            y: [35, 0],
                            opacity: [0, 100]
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.90,
                            delay: 1.25
                        }}
                    >
                        I'm Jerry
                    </motion.h1>
                    <motion.div
                        className="app__text-container-line"
                        initial={{width: 0}}
                        animate={{width: ["0%", "150%"]}}
                        transition={{delay: 0.15, duration: 1}}
                    ></motion.div>
                </div>
            </div>

            <div className="app__home_shadow"></div>
        </>
    );
};

export default Home;
