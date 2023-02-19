import React from 'react';
import {motion} from "framer-motion";

import './Header.scss';

import {images} from "../../constants";


const scaleVariants = {
    whileInView: {
        scale: [0.25, 1],
        opacity: [0.1, 1],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.75}}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, I'm</p>
                            <hi className="head-text">Jerry</hi>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <p className="p-text">beep</p>
                        <p className="p-text">boop</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{scale: [0.90, 1]}}
                transition={{duration: 1, delayChildren: 0}}
                className="app__header-img"
            >
                <img src={images.AspectOfJerry_head} alt="profile_bg" />
                <motion.img
                    className="overlay_glass-effect"
                    whileInView={{scale: [0.5, 1], opacity: [1, 0.2]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.glassEffect}
                    alt="Hovering glass effect"
                />
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.nodejs, images.javascript, images.git, images.react, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Header;
