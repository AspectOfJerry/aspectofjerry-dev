import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";

// Global
import {Navbar} from "./pages/components/index.js";
import OpeningAnimation from "./pages/components/OpeningAnimation"

// pages/Header (main)
import {AppReturnToTop} from "./pages/Home/components/index.js";
import {
    AppHome,
    AppAbout,
    AppSkills,
    AppExperience,
    AppSocials,
    AppProjects,
    AppFooter,
} from "./pages/Home/container/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

// pages/Elements
import {Elements} from "./pages/Elements/index.js";

import "./App.scss";

// pages/Countdown
import {Countdown} from "./pages/Countdown/index.js";

import {Unix} from "./pages/Unix";

import {UrlShortener} from "./pages/UrlShortener/index.js";
import {media} from "./constants";
import useFavicon from "./hooks/useFavicon";


const themes = [
    {
        name: "Default",
        className: "app_light",
        theme: "light"
    },
    {
        name: "Deep Space",
        className: "app_dark",
        theme: "dark"
    },
    {
        name: "Cloudy",
        className: "app_cloudy",
        theme: "light"
    },
    {
        name: "Pink",
        className: "app_pink",
        theme: "light"
    },
    {
        name: "Burgundy",
        className: "app_burgundy",
        theme: "dark"
    },
];

const J_themes = [
    {
        name: "Pink",
        className: "app_pink",
        theme: "light"
    },
    {
        name: "Cloudy",
        className: "app_cloudy",
        theme: "light"
    }
]

const getInitialColorMode = (themes) => {
    const persisted_theme = window.localStorage.getItem("color-mode");
    const has_persisted_theme = typeof persisted_theme === "string";

    // Check if the device is a mobile device based on the screen width
    const isMobile = window.innerWidth <= 768;

    const is_dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // automatically set light/dark theme based on system
    const system_theme = is_dark_mode
        ? themes.find((theme) => theme.className === "app_dark")
        : themes.find((theme) => theme.className === "app_light");

    if (has_persisted_theme) {
        const persistedTheme = themes.find(
            (theme) => theme.className === persisted_theme
        );
        if (persistedTheme) {
            return persistedTheme;
        }
    }

    // Only automatically set the dark mode for mobile devices
    if (isMobile) {
        return system_theme;
    } else {
        return themes.find((theme) => theme.className === "app_light");
    }
};

const App = () => {
    const [theme, setTheme] = useState(() => getInitialColorMode());
    const [showAnimation, setShowAnimation] = useState(false); // temporarily disabled

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAnimation(false);
        }, 5000); // Show the animation for 5 seconds

        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = () => {
        const currentIndex = themes.findIndex(
            (item) => item.className === theme.className
        );
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];

        window.localStorage.setItem("color-mode", nextTheme.className);

        setTheme(nextTheme);
        document.documentElement.className = nextTheme.className;
    };

    useEffect(() => {
        document.documentElement.className = theme.className;
    }, [theme]);

    useEffect(() => {
        const persisted_theme = window.localStorage.getItem("color-mode");
        const has_persisted_theme = typeof persisted_theme === "string";

        if (!has_persisted_theme) {
            window.localStorage.setItem("color-mode", "app_light");
        }
    }, []);

    useFavicon(media.favicon);

    return (
        <BrowserRouter> <Routes>
            <Route
                path="/"
                element={
                    showAnimation ?
                        <OpeningAnimation onAnimationEnd={() => setShowAnimation(false)} /> : <>
                            <title>jerrydev • Jerry</title>

                            <Navbar toggleTheme={toggleTheme} themes={themes} theme={theme}
                                    links={[
                                        {name: "About", link: "#about"},
                                        {name: "Skills", link: "#skills"},
                                        {name: "Experience", link: "#experience"},
                                        {name: "Socials", link: "#socials"},
                                        {name: "Projects", link: "#projects"}
                                    ]}
                                    extLinks={[
                                        // {name: "Countdown 🎉", link: "/countdown"},
                                        {name: "URL Shortener (WIP)", link: "/urls"},
                                        {name: "Periodic Table (WIP)", link: "/elements"}
                                    ]}
                                    lockShrink={false}
                            />
                            <AppReturnToTop />
                            <AppHome theme={theme} />
                            <AppAbout />
                            <AppSkills theme={theme} />
                            <AppExperience />
                            <AppSocials theme={theme} />
                            <AppProjects />
                            <AppFooter /> </>
                }
            />

            <Route path="/countdown" element={
                <>
                    <Navbar
                        toggleTheme={toggleTheme}
                        themes={themes}
                        theme={theme}
                        links={[]}
                        extLinks={[{name: "Countdown ⏰", link: "https://jerrydev.net/countdown"}]}
                        lockShrink={true}
                    />
                    <Countdown themeType={theme.theme} />
                </>
            } />

            <Route path="/unix" element={
                <>
                    <Navbar
                        toggleTheme={toggleTheme}
                        themes={themes}
                        theme={theme}
                        links={[]}
                        extLinks={[
                            {name: "🔗 Unix", link: "https://en.wikipedia.org/wiki/Unix"},
                            {name: "🔗 Unix time", link: "https://en.wikipedia.org/wiki/Unix_time"},
                            {name: "🔗 Unix shell", link: "https://en.wikipedia.org/wiki/Unix_shell"},
                            {name: "🔗 Unix filesystem", link: "https://en.wikipedia.org/wiki/Unix_filesystem"},
                        ]}
                        lockShrink={true}
                    />
                    <Unix />
                </>
            } />


            <Route path="/elements" element={
                <>
                    <Navbar
                        toggleTheme={toggleTheme}
                        themes={themes}
                        theme={theme}
                        links={[{name: "🔗 Elements API", link: "https://api.jerrydev.net/elements"}]}
                        extLinks={[
                            {name: "🔗 Periodic table", link: "https://en.wikipedia.org/wiki/Periodic_table"},
                            {name: "🔗 Periods", link: "https://en.wikipedia.org/wiki/Period_(periodic_table)"},
                            {name: "🔗 Groups", link: "https://en.wikipedia.org/wiki/Group_(periodic_table)"},
                            {name: "🔗 Blocks", link: "https://en.wikipedia.org/wiki/Block_(periodic_table)"},
                        ]}
                        lockShrink={true}
                    />
                    <Elements themeType={theme.theme} />
                </>
            } />

            <Route path="/urls" element={
                <>
                    <Navbar
                        toggleTheme={toggleTheme}
                        themes={themes}
                        theme={theme}
                        links={[]}
                        extLinks={[]}
                        lockShrink={true}
                    />
                    <UrlShortener />
                </>
            }
            />

            <Route path="/ping" element={<p>pong</p>} />

            <Route
                path="*"
                element={
                    <>
                        <Navbar
                            toggleTheme={toggleTheme}
                            themes={themes}
                            theme={theme}
                            links={[{name: "Take me home", link: "/"}]}
                            extLinks={[{name: "Status page", link: "https://status.jerrydev.net"}]}
                            lockShrink={false}
                        />
                        <NotFound toggleTheme={toggleTheme} themes={themes} theme={theme} />
                    </>
                }
            />


            {/*JENNA*/}
            <Route path="/jenna" element={
                <>
                    <Navbar
                        toggleTheme={toggleTheme}
                        themes={J_themes}
                        theme={theme}
                        links={[{name: "Take me home", link: "/"}]}
                        extLinks={[]}
                        lockShrink={false}
                        icon={media.Jenna.jenna_pfp}
                    />
                    {useFavicon(media.Jenna.jenna_pfp)}
                </>
            } />
        </Routes> </BrowserRouter>
    );
};

export default App;
