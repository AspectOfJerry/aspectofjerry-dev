import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import "./Header.scss";

const texts = [
    // "🎁 Happy holidays! 🎄",
    "🌟 Crafting code and chasing dreams.",
    "💡 Ctrl + Alt + Defeat is not in my vocabulary.",
    "✨ Let's build something magic together!",
    "🖋 Committed to pixels and a passionate relationship with my IDE.",
    "🌈 Transforming errors into applause-worthy features.",
    "🔮 Embracing a world of brackets, semicolons, and creative chaos.",
    "🦄 Breaking bugs, stereotypes, and coding norms.",
    "🚀 Building bridges between ideas and the realm of possibilities.",
    "☕ I don't sweat, I debug in style.",
    "🌙 Debugger by day, dreamer by night. What's your superpower?",
    "🛠️ Breaking things to uncover better ways of building them.",
    "🎯 Making the complex simple, one line at a time.",
    "🔥 Writing code that sets keyboards on fire.",
    "🔓 Hacking the boundaries of reality with lines of code.",
    "🚀 Code is my canvas; elegance is my masterpiece.",
    "🚀 Launching into the universe of code, propelled by creativity.",
    "🌟 Navigating the digital matrix with a keyboard as my compass.",
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
            const timeout = setTimeout(typeText, 40); // typing delay
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex > 0) {
            const timeout = setTimeout(typeText, 16); // untyping delay
            return () => clearTimeout(timeout);
        } else {
            setIsBlinking(true);
            if (isDeleting) {
                const timeout = setTimeout(() => {
                    setTextIndex(Math.floor(Math.random() * texts.length)); // generate a random index
                    setIsDeleting(!isDeleting);
                    setCharIndex(0);
                }, 150); // delay between texts after untyping
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(!isDeleting);
                }, 2500); // delay between texts after typing
                return () => clearTimeout(timeout);
            }
        }
    }, [textIndex, charIndex, isDeleting]);


    const tl = gsap.timeline({
        // repeat: -1,
        // yoyo: true,
    });

    useGSAP(() => {
        tl.to(".header__text-line", {
            width: "125%",
            opacity: 1,
            ease: "power1.out",
            duration: 1.20
        });
    });

    useGSAP(() => {
        tl.from([".header__hero-text"], {
            yPercent: 100,
            ease: "power1.out",
            duration: 1.10
        }, 0.40);
    });

    useGSAP(() => {
        tl.from([".header__text-small"], {
            yPercent: -100,
            ease: "power1.out",
            duration: 0.9
        }, 0.80);
    });

    useGSAP(() => {
        tl.from(".header__text", {
            yPercent: 100,
            y: 50,
            ease: "power2.out",
            duration: 1,
            stagger: 0.15
        }, 1.20);
    });


    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="text-line">
                        <h1 className="header__hero-text"> Hello</h1>
                    </div>

                    <div className="header__text-line" />

                    <div className="text-line">
                        <h2 className="header__text-small">I'm Jerry 👋</h2>
                    </div>
                </div>
                <div
                    className="p-text header__text-container"
                >
                    <div className="text-line"><p className="header__text">
                        Hey there, I'm Jerry - a coding enthusiast residing in 🍁Canada🦫!
                    </p></div>
                    <div className="text-line"><p className="header__text">
                        Buckle up, because you're about to uncover more about me! 🚀
                    </p></div>
                </div>

                <p className="header__typing-text ctext">
                    {headerText}&thinsp;<span id="caret" className={isBlinking ? "blink" : ""}>|</span>
                </p>
            </div>
            <div className="header__shadow"></div>
        </>
    );
};


export default Header;
