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
