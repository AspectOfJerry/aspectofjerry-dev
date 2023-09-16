import React, {useEffect} from "react";
import {motion} from "framer-motion";

import "./Home.scss";

const Home = ({theme}) => {
    useEffect(() => {
        // change title when component mounts
        document.title = "jerrydev • Jerry";
    }, []);

    return (
        <>
            <div id="home" className="app__home app__container">
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
                            delay: 0.85
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
                            delay: 1.20
                        }}
                    >
                        I'm Jerry
                    </motion.h1>
                    <motion.div
                        className="app__text-container-line"
                        initial={{width: 0}}
                        animate={{width: ["0%", "150%"]}}
                        transition={{duration: 1}}
                    ></motion.div>
                </div>
            </div>

            <div className="app__home_shadow"></div>
        </>
    );
};

export default Home;
