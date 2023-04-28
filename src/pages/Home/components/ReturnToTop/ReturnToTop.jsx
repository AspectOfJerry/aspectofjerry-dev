import React, {useEffect} from "react";
import {images} from "../../../../constants/index.js";
import {motion} from "framer-motion";

import "./ReturnToTop.scss";


function topFunction() {
    document.body.scrollIntoView(); // Safari
    document.documentElement.scrollIntoView(); // Chrome, Firefox, IE, Opera
}


const ReturnToTop = () => {
    useEffect(() => {
        const button = document.querySelector(".app__return-to-top")
        button.addEventListener("click", topFunction);

        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            window.onscroll = function () {scrollFunction()};
            if(document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
                button.classList.remove("hidden");
            } else {
                button.classList.add("hidden");
            }
        }
    });

    return (
        <motion.button
            className="app__return-to-top"
            onClick={topFunction()}
            title="Return to top"
            whileHover={{scale: 1.1, rotate: 180}}
            whileTap={{scale: 0.8, rotate: 145, borderRadius: "100%"}}
        >
            <img src={images.arrow_up} alt="Arrow up" />
        </motion.button>
    )
};

export default ReturnToTop;
