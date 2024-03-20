import React from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";
import SectionTitle from "../../../components/SectionTitle";


const About = () => {
    useGSAP(() => {
        gsap.from(".about__text", {
            yPercent: 250,
            ease: "power1.out",
            duration: 0.80,
            stagger: 0.10
        });
    }, []);

    return (
        <>
            {/*<p className="p-text about__note">
                📌 Hello, World! 🚧
            </p>*/}
            <div style={{marginTop: "2rem"}} />
            <SectionTitle raw="About Me">
                About <span>Me</span>
            </SectionTitle>

            <div
                className="p-text about__text-container"
            >
                <div className="abou__-text-line"><p className="about__text">
                    👋 Hey there, I'm Jerry - a coding enthusiast residing in 🍁Canada!
                </p></div>
                <br />
                <div className="about__text-line"><p className="about__text">
                    💡 Coding is more than just a hobby for me; it's a passion I pursue daily. I enjoy finding new challenges and learning as much as I can.
                </p></div>
                <br />
                <div className="about__text-line"><p className="about__text">
                    🔍 Besides coding, I'm interested in areas like AI, machine learning, computer vision, networking, game engines.
                </p></div>
                <br />
                <div className="about__text-line"><p className="about__text">
                    🎮 When I'm not immersed in coding, you might find exploring the dungeons of Lethal Company, competing in Valorant, or exploring the blocky world of Minecraft.
                </p></div>
            </div>
        </>
    );
};

export default AppWrap(About, "about");
