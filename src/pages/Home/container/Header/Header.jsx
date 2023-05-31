import React from "react";
import {motion} from "framer-motion";

import "./Header.scss";
import {AppWrap} from "../../../components/index.js";
import {images} from "../../../../constants";


const scaleVariants = {
    whileInView: {
        // scale: [0.95, 1],
        opacity: [0, 1],
        x: [45, 0],
        transition: {
            duration: 1.5,
            type: "spring",
            bounce: 0.3,
            delay: 0.03
        }
    }
}

const header_circles = [
    {name: "NodeJS", image: images.nodejs_js, url: "https://nodejs.org/en"},
    {name: "JavaScript", image: images.javascript, url: "https://developer.oracle.com/languages/javascript.html"},
    {name: "Git", image: images.git, url: "https://git-scm.com/"},
    {name: "ReactJS", image: images.reactjs, url: "https://react.dev/"},
    {name: "Sass", image: images.sass, url: "https://sass-lang.com/"}
];

const Header = () => {
    return (
        <>
            <div className="app__header app__flex">
                <motion.div
                    whileInView={{
                        x: [-100, 0],
                        opacity: [0, 1]
                    }}
                    transition={{duration: 1, type: "spring", bounce: 0.3, delay: 0.03}}
                    className="app__header-info"
                >
                    <div className="app__header-badge">
                        <div className="badge-cmp app__flex">
                            <span>👋</span>
                            <div style={{marginLeft: 20}}>
                                <p className="p-text">Hello, I'm</p>
                                <h1 className="head-text">Jerry</h1>
                            </div>
                        </div>

                        <div className="tag-cmp app__flex">
                            <p className="p-text">💻 Developer,</p>
                            <p className="p-text">🎮 Gamer</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{scale: [0.90, 1]}}
                    transition={{duration: 0.75, type: "tween", ease: "easeInOut", delay: 0.03, delayChildren: 0}}
                    className="app__header-img"
                >
                    <img src={images.aspectofjerry_head} alt="profile_bg" />
                    {/* <motion.img
                    className="background-img"
                    whileInView={{scale: [0.75, 1], opacity: [0, 0.05]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.charged_up_vert}
                    alt="Hovering glass effect"
                /> */}
                </motion.div>

                <div className="app__header-circles">
                    {header_circles.map((circle, index) => {
                        return (
                            <motion.div
                                variant={scaleVariants}
                                whileInView={scaleVariants.whileInView}
                                whileHover={{scale: 1.10}}
                                className="circle-cmp app__flex"
                                key={`circle-${index}`}
                            >
                                <img src={circle.image} alt={circle.name} />
                            </motion.div>
                        );
                    })}
                </div>
            </div >
        </>
    );
};

export default AppWrap(Header, "header");
