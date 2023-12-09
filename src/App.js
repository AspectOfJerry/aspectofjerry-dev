import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Global
import {Navbar} from "./pages/components/index.js";

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

import "./App.scss";


const themes = [
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
        name: "Pink",
        className: "app_pink",
        theme: "light"
    },
    {
        name: "Nether",
        className: "app_nether",
        theme: "nether"
    },
];

const getInitialColorMode = () => {
    const persisted_theme = window.localStorage.getItem("color-mode");
    const has_persisted_theme = typeof persisted_theme === "string";

    // Check if the device is a mobile device based on the screen width
    const isMobile = window.innerWidth <= 768;

    const is_dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // automatically set light/dark theme based on system
    const system_theme = is_dark_mode
        ? themes.find((theme) => theme.className === "app_deep-space")
        : themes.find((theme) => theme.className === "app_default");

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
        return themes.find((theme) => theme.className === "app_default");
    }
};

const App = () => {
    const [theme, setTheme] = useState(() => getInitialColorMode());

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
            window.localStorage.setItem("color-mode", "app_default");
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className={theme.className}>
                            <title>jerrydev • Jerry</title>

                            <Navbar toggleTheme={toggleTheme} themes={themes} theme={theme}
                                    links={[
                                        // {name: "Header", link: "#home"},
                                        {name: "About", link: "#about"},
                                        {name: "Skills", link: "#skills"},
                                        {name: "Experience", link: "#experience"},
                                        {name: "Socials", link: "#socials"},
                                        {name: "Projects", link: "#projects"}]}
                                    extLinks={[
                                        {name: "Skyblock mod", link: "https://bap.jerrydev.net"}
                                        // {name: "Status page", link: "https://status.jerrydev.net"}
                                    ]}
                            />
                            <AppReturnToTop />
                            <AppHome theme={theme} />
                            <AppAbout />
                            <AppSkills theme={theme} />
                            <AppExperience />
                            <AppSocials theme={theme} />
                            <AppProjects />
                            <AppFooter />
                        </div>
                    }
                />

                <Route path="/ping" element={<p>pong</p>} />

                <Route
                    path="*"
                    element={
                        <div className={theme.className}>
                            <title>jerrydev • 404</title>
                            <NotFound toggleTheme={toggleTheme} themes={themes} theme={theme} />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
