import React, { useEffect } from "react";
import { gsap } from "gsap";
import './SectionTitle.scss';

const SectionTitle = ({text}) => {
    const id = text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const windowId = `section-title-window-${id}`;
    const overlayId = `section-title-overlay-${id}`;

    useEffect(() => {
        gsap.to(`#${windowId}`, {
            backgroundImage: "linear-gradient(45deg, #000 100%, #eee 200%, #000 300%)",
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: `#${windowId}`,
                start: "top 75%",
                end: "top 25%",
                scrub: true
            }
        });
    }, [windowId, overlayId]);

    return (
        <div className="section-title-window" id={windowId}>
            <div className="section-title-text">
                {text}
            </div>
            <div className="section-title-overlay" id={overlayId}></div>
        </div>
    );
};

export default SectionTitle;