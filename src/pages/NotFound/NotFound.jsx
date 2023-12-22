import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./NotFound.scss";
import {Navbar} from "../components/index.js";

const NotFound = ({toggleTheme, themes, theme}) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // change title when component mounts
        document.title = "404 • jerrydev";

        // reset the title when component unmounts
        return () => {
            document.title = "Jerry";
        };
    }, []);

    const handleRedirect = () => {
        setFadeOut(true);
        setTimeout(() => {
            window.location.href = "/";
        }, 2350); // delay before redirecting
    };

    return (
        <>
            <Navbar
                toggleTheme={toggleTheme}
                themes={themes}
                theme={theme}
                links={[{name: "Take me home", link: "/"}]}
                extLinks={[{name: "Status page", link: "https://status.jerrydev.net"}]}
            />

            <div id="NotFound" className="notfound">
                <AnimatePresence>
                    {fadeOut && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.50, ease: "easeInOut"}}
                            className="nf__fade-overlay"
                        >
                            <p className="nf__fade-overlay-text">You feel a strange shift in reality as the world around you transforms...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <h1 className="nf__nf-text ctext">
                    Error 404 <br /> <br />
                    Whoops! It seems you've stumbled into the digital wilderness. <br />
                    The only way out is to press the mystical button below that says "Take me home". <br />
                    Rumor has it, it's the secret passage to a realm of bug-free adventures and endless wonders. <br />
                    Good luck, brave explorer!
                </h1>
                <p className="nf__redirect-text cext" onClick={handleRedirect}>&gt;&gt;&gt;&nbsp; Take me home &nbsp;&lt;&lt;&lt;</p>
            </div>
        </>
    );
};

export default NotFound;
