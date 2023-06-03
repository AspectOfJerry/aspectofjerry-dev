import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Global
import {Divider} from "./pages/components/index.js";

// pages/Home (main)
import {Navbar, ReturnToTop} from "./pages/Home/components/index.js";
import {About, Socials, Footer, Home, Projects, Skills} from "./pages/Home/container/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

import {media} from "./constants";

import "./App.scss";


const themes = [
    {
        name: "Default",
        className: "app_default"
    },
    {
        name: "Dark",
        className: "app_dark"
    },
    {
        name: "Green",
        className: "app_green",
        bgMedia: media.theme_green_bg,
        bgMediaType: "webm"
    },
    {
        name: "Pink",
        className: "app_pink",
        bgMedia: media.theme_pink_bg,
        bgMediaType: "image"
    }
    // {
    //     name: "Debug",
    //     className: "app_debug"
    // },
    // {
    //     name: "DebugFull",
    //     className: "app_debug_full"
    // }
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
                            <Navbar toggleTheme={toggleTheme} themes={themes} theme={theme} />
                            <ReturnToTop />
                            <Home theme={theme} />
                            {/* <Header /> */}
                            <About />
                            <Divider />
                            <Skills theme={theme} />
                            <Divider />
                            <Socials theme={theme} />
                            <Divider />
                            <Projects />
                            <Footer />
                        </div>
                    }
                />

                <Route path="/ping" element={<p>pong</p>} />

                <Route
                    path="*"
                    element={
                        <div className="app">
                            <NotFound />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
