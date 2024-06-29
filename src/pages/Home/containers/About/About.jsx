import React from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const About = () => {
    useGSAP(() => {
        gsap.from(".about__text", {
            scrollTrigger: ".about__text",
            yPercent: 200,
            ease: "power1.out",
            duration: 0.80,
            stagger: 0.10
        });
    }, []);

    return (
        <div className="about">
            <div style={{marginTop: "2rem"}} />
            <SectionTitle text="About Me">
                About <span>Me</span>
            </SectionTitle>

            <div className="text about__text-container">
                <div className="text-line"><p className="about__text">
                    💡 Coding is more than just a hobby for me; it's a passion I pursue daily. I enjoy finding new challenges and learning as much as I can.
                </p></div>
                <div className="text-line"><p className="about__text">
                    🔍 Besides coding, I'm interested in areas like AI, machine learning, computer vision, networking, game engines.
                </p></div>
                <div className="text-line"><p className="about__text">
                    🎮 When I'm not immersed in coding, you might find exploring the dungeons of Lethal Company, competing in Valorant, or exploring the blocky world of Minecraft.
                </p></div>
            </div>
        </div>
    );
};

export default AppWrap(About, "about");
