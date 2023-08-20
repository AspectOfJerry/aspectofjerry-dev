import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Global
import {Divider} from "./pages/components/index.js";

// pages/Home (main)
import {AppNavbar, AppReturnToTop} from "./pages/Home/components/index.js";
import {AppAbout, AppSocials, AppFooter, AppHome, AppHeader, AppProjects, AppSkills} from "./pages/Home/container/index.js";

// pages/NotFound (404)
import {NotFoundNavbar} from "./pages/NotFound/components/index.js";
import {NotFound} from "./pages/NotFound/index.js";

import {media} from "./constants";

import "./App.scss";


const themes = [
    {
        name: "Default",
        className: "app_default",
        theme: "light"
    },
    {
        name: "Dark",
        className: "app_dark",
        theme: "dark"
    },
    {
        name: "Deep Space",
        className: "app_deep-space",
        theme: "dark"
    },
    {
        name: "Pink",
        className: "app_pink",
        theme: "light",
        bgMedia: media.theme_pink_bg,
        bgMediaType: "image"
    },
    {
        name: "Green",
        className: "app_green",
        theme: "light",
        bgMedia: media.theme_green_bg,
        bgMediaType: "webm"
    },
    {
        name: "Dark Red",
        className: "app_dark-red",
        theme: "dark"
    },
];

const getInitialColorMode = () => {
    const persisted_theme = window.localStorage.getItem("color-mode");
    const has_persisted_theme = typeof persisted_theme === "string";

    const is_dark_more = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(has_persisted_theme && !is_dark_more) {
        const persistedTheme = themes.find(
            (theme) => theme.className === persisted_theme
        );
        if(persistedTheme) {
            return persistedTheme;
        }
    }

    const system_theme = is_dark_more
        ? themes.find((theme) => theme.className === "app_dark")
        : themes.find((theme) => theme.className === "app_default");

    return system_theme || themes.find((theme) => theme.className === "app_dark");
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

        if(!has_persisted_theme) {
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
                            <AppNavbar toggleTheme={toggleTheme} themes={themes} theme={theme} />
                            <AppReturnToTop />
                            <AppHome theme={theme} />
                            {/* <AppHeader /> */}
                            <AppAbout />
                            {/* <Divider /> */}
                            <AppSkills theme={theme} />
                            {/* <Divider /> */}
                            <AppSocials theme={theme} />
                            {/* <Divider /> */}
                            <AppProjects />
                            <AppFooter />
                        </div>
                    }
                />

                <Route path="/ping" element={<p>pong</p>} />

                <Route
                    path="*"
                    element={
                        <div className="app">
                            {/* <NotFoundNavbar toggleTheme={toggleTheme} themes={themes} theme={theme} /> */}
                            <NotFound toggleTheme={toggleTheme} themes={themes} theme={theme} />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
