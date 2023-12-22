import React from "react";
import {motion} from 'framer-motion';

const SectionTitle = ({raw, children}) => {
    return (
        <div style={{position: "relative"}}>
            <motion.div
                className="title-text-bars"
                initial={{width: 0, opacity: 1}}
                viewport={{once: true}}
                whileInView={{x: [0, ((270 / Math.sqrt(12)) * Math.sqrt(raw.length))], opacity: 0}}
                exit={{opacity: 0}}
                transition={{
                    x: {duration: 0.65, ease: "easeInOut"},
                    opacity: {delay: 0.60} // Delay the fade out of "//" to allow the title text to fade in
                }}
            >
                <span id="inner">/</span>/<span>/</span>
            </motion.div>
            <motion.h2
                className="title-text"
                initial={{opacity: 0}}
                viewport={{once: true}}
                whileInView={{opacity: 1}} // Fade in the title text
                exit={{opacity: 1}}
                transition={{duration: 0.50, delay: 0.45, ease: "easeInOut"}}
            >
                {children}
            </motion.h2>
        </div>
    );
};

export default SectionTitle;
