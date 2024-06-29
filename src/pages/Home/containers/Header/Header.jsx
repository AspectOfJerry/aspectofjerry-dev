import React, {useEffect, useMemo, useState} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import "./Header.scss";

const texts = {
    0: [
        // General
        "🚀 Code is my canvas; elegance is my masterpiece.",
        "🚀 Coding my way through the digital universe!",
        "🚀 Coding with a dash of innovation!",
        "🚀 Coding with a sprinkle of creativity!",
        "🚀 Coding with a touch of elegance!",
        "🚀 Coding with a touch of magic!",
        "🚀 Coding with a touch of passion!",
        "🚀 Coding with a touch of style!",
        "🌟 Crafting code and chasing dreams.",
        "💡 Ctrl + Alt + Defeat is not in my vocabulary.",
        "🌙 Debugger by day, dreamer by night. What's your superpower?",
        "🔮 Embracing a world of brackets, semicolons, and creative chaos.",
        "🔓 Hacking the boundaries of reality with lines of code.",
        "👋 Hello, World!",
        "☕ I don't sweat, I debug in style.",
        "✨ Let's build something magic together!",
        "🚀 Launching into the universe of code, propelled by creativity.",
        "🌟 Navigating the digital matrix with a keyboard as my compass.",
        "🌟 Welcome to my digital domain!",
        "🌟 Welcome to my digital realm!",
        "🌟 Welcome to my digital world!",
        "🔥 Writing code that sets keyboards on fire."
    ],
    // January-specific
    1: [
        "🎉 Happy New Year! 🎊",
        "🎆 A new year, a new beginning!",
        "🌟 New year, new code!",
        "🎉 Cheers to new beginnings!",
        "🎆 New year, new dreams!",
        "🌟 New year, new goals!",
        "🎉 New year, new opportunities!"
    ],
    // February-specific
    2: [
        "💘 Coding with a heart of gold!",
        "💘 Coding with a sprinkle of love!",
        "💖 Coding with all my love!",
        "💖 Love is in the code!"
    ],
    // March-specific
    3: [
        "🍀 Coding is my lucky charm!",
        "🌈 Coding with a dash of luck!",
        "🌈 Coding with a pinch of luck!",
        "🍀 Coding with a pot of gold!",
        "🍀 Luck of the coder!",
        "🌈 Rainbow of code!"
    ],
    // April-specific
    4: [
        "🤡 April fools! 🎈",
        "🃏 Gotcha! 🎉",
        "🤪 Prankster at work!",
        "🎈 Fool me once, shame on you!",
        "🌸 April showers bring May flowers!",
        "🌷 Spring has sprung!",
        "🌼 Flowers where you are planted!",
        "🌸 April showers bring code flowers!",
        "🌷 Spring has sprung, and so have I!",
        "🌼 Coding and blooming!"
    ],
    // May-specific
    5: [
        "🌺 Blooming with code!",
        "🌼 Blooming with creativity!",
        "🌺 Blossoming with code!",
        "🌸 Coding with a bouquet of ideas!",
        "🌸 Coding with a spring in my step!",
        "🌸 Coding with a touch of nature!",
        "🌺 Coding with a touch of spring!",
        "🌺 Coding with a touch of sunshine!",
        "🌷 Springing into code!"
    ],
    // June-specific
    6: [
        "🌊 Catching waves of inspiration!",
        "🌞 Chasing sunsets and debugging sunrises!",
        "🌊 Making a splash in the world of coding!",
        "🌊 Riding the waves of creativity!",
        "🌞 Soaking up the sun and coding up a storm!",
        "🌞 Summer vibes only!"
    ],
    // July-specific
    7: [
        "🍦 Chilling with code and ice cream!",
        "🍦 Coding with a cherry on top!",
        "🍦 Coding with a scoop of fun!",
        "🍦 Coding with a sprinkle of summer!",
        "🍦 Coding with an extra scoop of creativity!",
        "🍦 Coding with sprinkles on top!"
    ],
    // August-specific
    8: [
        "🌴 Coding under the shade of palm trees!",
        "🌴 Coding with a splash of summer!",
        "🌴 Coding with a tropical twist!",
        "🌴 Coding with an island breeze!",
        "🌴 Coding with the sun on my screen!",
        "🌴 Summer coding vibes!"
    ],
    // September-specific
    9: [
        "📚 Back to school, back to code!",
        "📚 Coding my way through the school year!",
        "🍂 Coding with a touch of fall!",
        "🍁 Fall-ing into code!",
        "📚 School's in session, and so is coding!"
    ],
    // October-specific
    10: [
        "🦇 Bats about to fly!",
        "🎃 Creepin' it real!",
        "🍂 Coding with a harvest of ideas!",
        "🍂 Coding with a touch of fall!",
        "🍁 Fall-ing into code!",
        "👻 Ghostly greetings!",
        "🍂 Harvesting lines of code!",
        "🍂 Leafing through lines of code!",
        "🎃 Pumpkin spice and everything nice!",
        "👻 Spooky season is here!",
        "🎃 Trick or treat! 🍭",
        "🎃 Witchful thinking!"
    ],
    // November-specific
    11: [
        "🍂 Autumn leaves and lines of code!",
        "🍁 Giving thanks for code!",
        "🦃 Gobbling up code like a turkey!",
        "🍁 Harvesting lines of code!",
        "🍂 Leafing through lines of code!",
        "🍁 November to remember!"
    ],
    // December-specific
    12: [
        "🎁 Happy holidays! 🎄",
        "❄️ Let it snow, let it snow, let it snow!",
        "🎅 Ho ho ho!",
        "🎄 Have yourself a merry little Christmas!",
        "🦌 Rudolph the red-nosed reindeer!",
        "🌟 Starlight, star bright!",
        "🎁 All I want for Christmas is you!"
    ],
};

const Header = () => {
    useEffect(() => {
        document.title = "Jerry • jerrydev";
    }, []);

    const currentMonth = new Date().getMonth() + 1; // get the current month (1-12)

    const combinedTexts = useMemo(() => {
        return [...texts["0"], ...texts[currentMonth]]; // combine general and month-specific texts
    }, [currentMonth]); // dependencies of useMemo

    const [headerText, setHeaderText] = useState("");
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * combinedTexts.length));
    // const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const typeText = () => {
            setIsBlinking(false);
            if (!isDeleting) {
                setHeaderText((prevText) => prevText + combinedTexts[textIndex][charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            } else {
                setHeaderText((prevText) => prevText.slice(0, -1));
                setCharIndex((prevIndex) => prevIndex - 1);
            }
        };

        if (!isDeleting && charIndex < combinedTexts[textIndex].length) {
            const timeout = setTimeout(typeText, 46); // typing character delay
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex > 0) {
            const timeout = setTimeout(typeText, 16); // deleting character delay
            return () => clearTimeout(timeout);
        } else {
            setIsBlinking(true);
            if (isDeleting) {
                const timeout = setTimeout(() => {
                    setTextIndex(Math.floor(Math.random() * combinedTexts.length));
                    setIsDeleting(!isDeleting);
                    setCharIndex(0);
                }, 150); // delay between texts after untyping
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(!isDeleting);
                }, 2750); // delay between texts after typing
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, combinedTexts, isDeleting, textIndex]);


    const tl = gsap.timeline();

    useGSAP(() => {
        tl.to(".header__line", {
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
        tl.from(".header__about", {
            yPercent: 100,
            y: 50,
            ease: "power2.out",
            duration: 1,
            stagger: 0.15
        }, 1.20);
    });

    useGSAP(() => {
        tl.from(".header__typing-text", {
            opacity: 0,
            ease: "power1.out",
            duration: 1
        });
    });

    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="text-line">
                        <h1 className="header__hero-text">Hello</h1>
                    </div>

                    <div className="header__line" />

                    <div className="text-line">
                        <h2 className="header__text-small">I'm Jerry 👋</h2>
                    </div>
                </div>
                <div
                    className="p-text header__about-container"
                >
                    <div className="text-line"><p className="header__about">
                        Hey there, I'm Jerry - a coding enthusiast residing in 🍁Canada🦫!
                    </p></div>
                    <div className="text-line"><p className="header__about">
                        ---website under rework---
                        AI, machine learning, computer vision, networking, game engines.
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
