import React, {useEffect, useState, useRef} from "react";
import {media} from "../../../../constants/index.js";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import "./ReturnToTop.scss";

function topFunction() {
    document.body.scrollIntoView(); // Safari
    document.documentElement.scrollIntoView(); // Chrome, Firefox, IE, Opera
}

const ReturnToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    }, []);

    useGSAP(() => {
        if (isVisible) {
            gsap.to(buttonRef.current, {
                yPercent: 0,
                opacity: 0.40, // opacity in ReturnToTop.scss
                duration: 0.35,
            });
        } else {
            gsap.to(buttonRef.current, {
                yPercent: 200,
                opacity: 0,
                duration: 0.35,
            });
        }
    }, [isVisible]);

    return (
        <button
            ref={buttonRef}
            className="return-to-top"
            onClick={topFunction}
            title="Return to top"
            style={{opacity: 0, y: 50}}
        >
            <img src={media.arrow} alt="arrow" />
        </button>
    )
};

export default ReturnToTop;
