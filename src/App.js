import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Global
import {Navbar} from "./pages/components/index.js";
import OpeningAnimation from "./pages/components/OpeningAnimation"

// pages/Header (main)
import {AppReturnToTop} from "./pages/Home/components/index.js";
import {
    AppHeader,
    AppAbout,
    AppSkills,
    AppExperience,
    AppSocials,
    AppProjects,
    AppFooter,
} from "./pages/Home/containers/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

// pages/Elements
import {Elements} from "./pages/Elements/index.js";

import "./App.scss";

// pages/Countdown
import {Countdown} from "./pages/Countdown/index.js";

import {Unix} from "./pages/Unix";

import {UrlShortener} from "./pages/UrlShortener/index.js";
import {Bday} from "./pages/Bday";
import Confetti from "react-confetti";


const theme_group = {
    localStorageKey: "color-mode",
    themes: [
        {
            name: "Default",
            className: "theme_default",
            mode: "light"
        },
        {
            name: "Deep Space",
            className: "theme_deep-space",
            mode: "dark"
        },
        {
            name: "Pink",
            className: "theme_pink",
            mode: "light"
        },
        {
            name: "Lavender",
            className: "theme_lavender",
            mode: "light"
        },
        {
            name: "Burgundy",
            className: "theme_burgundy",
            mode: "dark"
        }
    ]
};

const App = () => {
    const [isReady, setIsReady] = useState(false);
    const getInitialColorMode = (themeGroup) => {
        const persisted_theme = window.localStorage.getItem(themeGroup.localStorageKey);
        const has_persisted_theme = typeof persisted_theme === "string";

        // Check if the device is a mobile device based on the screen width
        const isMobile = window.innerWidth <= 768;

        const is_dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // automatically set light/dark theme based on system
        const system_theme = is_dark_mode
            ? themeGroup.themes[1] // index 1 is dark mode
            : themeGroup.themes[0]; // index 0 is default (light) mode

        if (has_persisted_theme) {
            const persistedTheme = themeGroup.themes.find((theme) => theme.className === persisted_theme);
            if (persistedTheme) {
                setIsReady(true);
                return persistedTheme;
            }
        }

        // Only automatically set the dark mode for mobile devices
        if (isMobile) {
            setIsReady(true);
            return system_theme;
        } else {
            setIsReady(true);
            return themeGroup.themes[0]; // index 0 is default (light) mode
        }
    };

    const [theme, setTheme] = useState(() => getInitialColorMode(theme_group));

    useEffect(() => {
        document.documentElement.className = theme.className;
    }, [theme]);

    // opening animation timer
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsReady(true);
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
        document.documentElement.className = nextTheme.className; // update theme
    };

    useEffect(() => {
        const persisted_theme = window.localStorage.getItem(theme_group.localStorageKey);
        const has_persisted_theme = typeof persisted_theme === "string";

        if (!has_persisted_theme) {
            window.localStorage.setItem(theme_group.localStorageKey, "theme_default");
        }
    }, []);

    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            let now = new Date();
            let bday = new Date(now.getFullYear(), 3, 3); // April 3rd
            let endCelebration = new Date(bday.getTime() + 24 * 60 * 60 * 1000); // 1 day after the birthday

            // If the current date is after the birthday, set bday to next year's birthday
            if (now > endCelebration) {
                bday = new Date(now.getFullYear() + 1, 3, 3);
            }

            const distance = bday - now;

            if (distance <= 0 && now < endCelebration) {
                setCelebrate(true);
            } else {
                setCelebrate(false);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        isReady ? (
            <BrowserRouter> <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {celebrate && <Confetti numberOfPieces={250} wind={0.01} />}
                            <Navbar
                                toggleTheme={() => toggleTheme(theme_group)} themes={theme_group.themes} theme={theme}
                                links={[
                                    {name: "About", link: "#about"},
                                    {name: "Skills", link: "#skills"},
                                    {name: "Experience", link: "#experience"},
                                    {name: "Socials", link: "#socials"},
                                    {name: "Projects", link: "#projects"}
                                ]}
                                extLinks={[
                                    // {name: "Countdown 🎉", link: "/countdown"},
                                    {name: "URLShort (WIP)", link: "/urls"},
                                    {name: "PeriodicTable (WIP)", link: "/elements"},
                                    ...(celebrate ? [{name: "Birthday 🥳", link: "/bday"}] : [])
                                ]}
                                forceShrink={false}
                            />
                            <AppReturnToTop />
                            <AppHeader />
                            <AppAbout />
                            <AppSkills themeMode={theme.mode} />
                            <AppExperience />
                            <AppSocials themeMode={theme.mode} />
                            <AppProjects themeMode={theme.mode} />
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
                            forceShrink={true}
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
                                {name: "🔗 Unix time", link: "https://en.wikipedia.org/wiki/Unix_time"}
                            ]}
                            forceShrink={true}
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
                            forceShrink={true}
                        />
                        <Elements themeType={theme.mode} />
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
                            forceShrink={true}
                        />
                        <UrlShortener />
                    </>
                }
                />

                <Route path="/bday" element={
                    <>
                        <Navbar
                            toggleTheme={() => toggleTheme(theme_group)}
                            themes={theme_group.themes}
                            theme={theme}
                            links={[]}
                            extLinks={[]}
                            forceShrink={true}
                        />
                        <Bday themeType={theme.theme} />
                    </>
                } />

                <Route path="/ping" element={"pong"} />

                <Route
                    path="*"
                    element={
                        <>
                            <Navbar
                                toggleTheme={() => toggleTheme(theme_group)}
                                themes={theme_group.themes}
                                theme={theme}
                                links={[{name: "Take me home", link: "/"}]}
                                extLinks={[]}
                                forceShrink={false}
                            />
                            <NotFound />
                        </>
                    }
                />
            </Routes> </BrowserRouter>
        ) : (<OpeningAnimation onAnimationEnd={() => setIsReady(true)} />)
    );
};

export default App;
