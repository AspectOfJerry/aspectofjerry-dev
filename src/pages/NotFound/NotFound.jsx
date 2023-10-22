import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./NotFound.scss";
import {Navbar} from "../components/index.js";

const NotFound = ({toggleTheme, themes, theme}) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // change title when component mounts
        document.title = "jerrydev • 404";

        // reset the title when component unmounts
        return () => {
            document.title = "jerrydev • Jerry";
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
                            className="fade-overlay"
                        >
                            <p className="notfound__fade-overlay__text">You feel a strange shift in reality as the world around you transforms...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <h1 className="title-text">This is probably not what you are looking for!</h1>
                <p className="notfound__redirect-text text" onClick={handleRedirect}>&gt;&gt;&gt;&nbsp; Take me
                    home &nbsp;&lt;&lt;&lt;</p>
            </div>
        </>
    );
};

export default NotFound;
