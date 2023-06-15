import React from "react";
import {motion} from "framer-motion";

import "./Home.scss";
import {AppWrap} from "../../../components/index.js";
import {media} from "../../../../constants";


const Home = ({theme}) => {
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <div id="home" className="app__container">
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
                            y: [75, 0],
                            opacity: [0, 100]
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.75,
                            delay: 0.10
                        }}
                    >
                        Hello
                    </motion.h1>
                    <motion.h1
                        className="app__home-small"
                        animate={{
                            y: [50, 0],
                            opacity: [0, 100]
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.75,
                            delay: 0.80
                        }}
                    >
                        I'm Jerry
                    </motion.h1>
                </div>
            </div>

            <div className="app__home_shadow"></div>
        </>
    );
};

export default Home;
