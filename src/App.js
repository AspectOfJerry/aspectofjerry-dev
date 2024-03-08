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


const theme_group = {
    localStorageKey: "color-mode",
    themes: [
        {
            name: "Default",
            className: "app_default",
            theme: "light"
        },
        {
            name: "Deep Space",
            className: "app_deep-space",
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
        }
    ]
};

const J_theme_group = {
    localStorageKey: "jenna-color-mode",
    themes: [
        {
            name: "Pink",
            className: "jenna_default",
            theme: "light"
        },
        {
            name: "Dark",
            className: "jenna_dark",
            theme: "dark"
        }
    ]
};

const getInitialColorMode = (themeGroup) => {
    const persisted_theme = window.localStorage.getItem(themeGroup.localStorageKey);
    const has_persisted_theme = typeof persisted_theme === "string";

    // Check if the device is a mobile device based on the screen width
    const isMobile = window.innerWidth <= 768;

    const is_dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // automatically set light/dark theme based on system
    const system_theme = is_dark_mode
        ? themeGroup.themes.find((theme) => theme.className === themeGroup.themes[1]) // index 1 is dark mode
        : themeGroup.themes.find((theme) => theme.className === themeGroup.themes[0]); // index 0 is default (light) mode

    if (has_persisted_theme) {
        const persistedTheme = themeGroup.themes.find(
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
        return themeGroup.themes.find((theme) => theme.className === themeGroup.themes[0]); // index 0 is default (light) mode
    }
};

const App = () => {
    const [theme, setTheme] = useState(() => getInitialColorMode(theme_group));
    const [showAnimation, setShowAnimation] = useState(false); // temporarily disabled

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAnimation(false);
        }, 5000); // Show the animation for 5 seconds

        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = (themeGroup) => {
        const currentIndex = themeGroup.themes.findIndex(
            (item) => item.className === theme.className
        );
        const nextIndex = (currentIndex + 1) % themeGroup.themes.length;
        const nextTheme = themeGroup.themes[nextIndex];

        window.localStorage.setItem(themeGroup.localStorageKey, nextTheme.className);

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
            window.localStorage.setItem("color-mode", "app_default");
        }
    }, []);

    /* JENNA */
    const [jennaTheme, setJennaTheme] = useState(() => getInitialColorMode(J_theme_group));

    useEffect(() => {
        document.documentElement.className = jennaTheme.className;
    }, [jennaTheme]);

    useEffect(() => {
        const persisted_theme = window.localStorage.getItem("jenna-color-mode");
        const has_persisted_theme = typeof persisted_theme === "string";

        if (!has_persisted_theme) {
            window.localStorage.setItem("jenna-color-mode", "jenna_default");
        }
    }, []);

    return (
        <BrowserRouter> <Routes>
            <Route
                path="/"
                element={
                    showAnimation ?
                        <OpeningAnimation onAnimationEnd={() => setShowAnimation(false)} /> : <>
                            <title>jerrydev • Jerry</title>

                            <Navbar toggleTheme={() => toggleTheme(theme_group)} themes={theme_group.themes} theme={theme}
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
                        toggleTheme={() => toggleTheme(theme_group)}
                        themes={theme_group.themes}
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
                        toggleTheme={() => toggleTheme(theme_group)}
                        themes={theme_group.themes}
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
                        toggleTheme={() => toggleTheme(theme_group)}
                        themes={theme_group.themes}
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
                        toggleTheme={() => toggleTheme(theme_group)}
                        themes={theme_group.themes}
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
                            toggleTheme={() => toggleTheme(theme_group)}
                            themes={theme_group.themes}
                            theme={theme}
                            links={[{name: "Take me home", link: "/"}]}
                            extLinks={[{name: "Status page", link: "https://status.jerrydev.net"}]}
                            lockShrink={false}
                        />
                        <NotFound />
                    </>
                }
            />


            {/*JENNA*/}
            <Route path="/jenna" element={
                <>
                    <Navbar
                        toggleTheme={() => toggleTheme(J_theme_group)}
                        themes={J_theme_group.themes}
                        theme={jennaTheme}
                        links={[{name: "Take me home", link: "/"}]}
                        extLinks={[]}
                        lockShrink={false}
                        icon={media.Jenna.jenna_pfp}
                    />
                </>
            } />
        </Routes> </BrowserRouter>
    );
};

export default App;
