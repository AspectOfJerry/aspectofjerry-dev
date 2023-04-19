import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Gobal
import {Divider} from "./pages/Global/index.js";

// pages/Home (main)
import {Navbar, ReturnToTop} from "./pages/Home/components/index.js";
import {About, Socials, Footer, Header, Projects, Skills} from "./pages/Home/container/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

// pages/Cake (cake)
import {CNavbar} from "./pages/Cake/components/index.js";
import {CAbout, CSocials, CFooter, CHeader, CProjects, CSkills} from "./pages/Cake/container/index.js";

import "./App.scss";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="app">
                        <Navbar />
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

                <Route path="/cake" element={
                    <div className="app">
                        <CNavbar />
                        <CHeader />
                        <Divider />
                        <CAbout />
                        <Divider />
                        <CSkills />
                        <Divider />
                        <CSocials />
                        <Divider />
                        <CProjects />
                        <Divider />
                        <CFooter />
                    </div>
                } />

                <Route path="*" element={
                    <div className="app">
                        <NotFound />
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
