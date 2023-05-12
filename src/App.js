import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Gobal
import {Divider} from "./pages/components/index.js";

// pages/Home (main)
import {Navbar, ReturnToTop} from "./pages/Home/components/index.js";
import {About, Socials, Footer, Header, Projects, Skills} from "./pages/Home/container/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

import "./App.scss";


const themes = {
    default: {
        name: "Default",
        className: "app_default",
    },
    dark: {
        name: "Dark",
        className: "app_dark"
    },
    green: {
        name: "Green",
        className: "app_green"
    },
    pink: {
        name: "Pink",
        className: "app_pink"
    },
    debug: {
        name: "Debug",
        className: "app_debug"
    },
    debug_full: {
        name: "DebugFull",
        className: "app_debug_full"
    }
};

const App = () => {
    const [theme, setTheme] = useState(themes.default);

    const toggleTheme = (themeList) => {
        const currentIndex = themeList.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeList.length;
        setTheme(themeList[nextIndex]);
        document.documentElement.className = themeList[nextIndex].className;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className={themes.default.className}>
                        <Navbar toggleTheme={toggleTheme} themes={themes} theme={theme} />
                        <ReturnToTop />
                        <Header />
                        <Divider />
                        <About />
                        <Divider />
                        <Skills />
                        <Divider />
                        <Socials />
                        <Divider />
                        <Projects />
                        {/* <Divider /> */}
                        <Footer />
                    </div>
                } />

                <Route path="/ping" element={
                    <p>pong</p>
                } />

                <Route path="*" element={
                    <div className="app">
                        <NotFound />
                    </div>
                } />
            </Routes>
        </BrowserRouter >
    );
};

export default App;
