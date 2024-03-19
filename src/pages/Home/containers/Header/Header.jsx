import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import "./Header.scss";

const texts = [
    // "🎁 Happy holidays! 🎄",
    "🌟 Crafting code and chasing dreams.",
    "💡 Ctrl + Alt + Defeat is not in my vocabulary.",
    "✨ Let's build something magic together!",
    "🐞 Debugger of life's quirks and quantum glitches.",
    "🖋 Committed to pixels and a passionate relationship with my IDE.",
    "🌈 Transforming errors into applause-worthy features.",
    "🔮 Embracing a world of brackets, semicolons, and creative chaos.",
    "🦄 Breaking bugs, stereotypes, and coding norms.",
    "🚀 Building bridges between ideas and the realm of possibilities.",
    "☕ I don't sweat, I debug in style.",
    "🔁 Living in loops, logic, and infinite curiosity.",
    "🌙 Debugger by day, dreamer by night. What's your superpower?",
    "🛠️ Breaking things to uncover better ways of building them.",
    "🎯 Making the complex simple, one line at a time.",
    "🔥 Writing code that sets keyboards on fire.",
    "🔓 Hacking the boundaries of reality with lines of code.",
    "🌀 The loop is where the magic happens—join me on this coding journey.",
    "🚀 Code is my canvas; elegance is my masterpiece.",
    "🚀 Launching into the universe of code, propelled by creativity.",
    "🌟 Navigating the digital matrix with a keyboard as my compass.",
    "💭 If you think programming is boring, it's because you're not doing it right!",
    "👋 Hello, World!",
];

const Header = () => {
    useEffect(() => {
        // change title when component mounts
        document.title = "jerrydev • Jerry";
    }, []);

    const [headerText, setHeaderText] = useState("");
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * texts.length));
    // const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const typeText = () => {
            setIsBlinking(false);
            if (!isDeleting) {
                setHeaderText((prevText) => prevText + texts[textIndex][charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            } else {
                setHeaderText((prevText) => prevText.slice(0, -1));
                setCharIndex((prevIndex) => prevIndex - 1);
            }
        };

        if (!isDeleting && charIndex < texts[textIndex].length) {
            const timeout = setTimeout(typeText, 48); // typing delay
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex > 0) {
            const timeout = setTimeout(typeText, 18); // untyping delay
            return () => clearTimeout(timeout);
        } else {
            setIsBlinking(true);
            if (isDeleting) {
                const timeout = setTimeout(() => {
                    setTextIndex(Math.floor(Math.random() * texts.length)); // generate a random index
                    setIsDeleting(!isDeleting);
                    setCharIndex(0);
                }, 200); // delay between texts after untyping
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(!isDeleting);
                }, 2800); // delay between texts after typing
                return () => clearTimeout(timeout);
            }
        }
    }, [textIndex, charIndex, isDeleting]);


    useGSAP(() => {
        gsap.from([".header__hero-text", ".header__text-small"], {
            yPercent: 100,
            ease: "power1.out",
            duration: 1.25,
            stagger: 0.25,
            delay: 0.25
        });
    });

    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__text-container">
                        <h1
                            className="header__hero-text"
                        >
                            Hello
                        </h1>
                        <h1
                            className="header__text-small"
                        >
                            I'm Jerry
                        </h1>
                    </div>
                    <motion.div
                        className="header__text-line"
                        initial={{width: 0, opacity: 0}}
                        animate={{width: ["0%", "150%"], opacity: ["0%", "100%"]}}
                        transition={{duration: 1}}
                    />
                </div>

                <p className="header__typing-text p-text">
                    {headerText}&thinsp;<span id="caret" className={isBlinking ? "blink" : ""}>|</span>
                </p>
            </div>

            <div className="header__shadow"></div>
        </>
    );
};

export default Header;
