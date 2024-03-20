import React from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

import "./ParallaxTrails.scss";


const ParallaxTrails = ({trigger, top, left, width, pin, heightOffset, yMax, stretchSpeed}) => {
    width = (width || "24px");
    heightOffset = (heightOffset || 0);
    pin = (pin || false);

    useGSAP(() => {
        gsap.to(".trail", {
            scrollTrigger: {
                trigger: trigger,
                start: "top top",
                end: "+=100%",
                scrub: 2,
                pin: pin
            },
            ease: "none",
            y: yMax || "-30vh",
            height: stretchSpeed || "20vh",
            opacity: 0
        });
    });

    return (
        <div className="trail" style={{
            top: top,
            left: left,
            width: width,
            height: width + heightOffset,
            borderRadius: (width / 2)
        }} />
    );
    /*
    <div className="parallax-trails">
        <div className="trail" style={{top: getRandInt(), left: getRandInt()}}></div>
    </div>
     */
};

export default ParallaxTrails;