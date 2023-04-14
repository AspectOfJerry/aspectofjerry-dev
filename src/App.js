import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Gobal
import {Divider} from "./pages/Global/index.js";

// pages/Home
import {About, Socials, Footer, Header, Projects, Skills} from "./pages/Home/container/index.js";
import {Navbar} from "./pages/Home/components/index.js";

// pages/NotFound
import {NotFound} from "./pages/NotFound/index.js";

import "./App.scss";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="app">
                        <Navbar />
                        <Header />
                        <Divider />
                        <About />
                        <Divider />
                        <Skills />
                        <Divider />
                        <Socials />
                        <Divider />
                        <Projects />
                        <Divider />
                        <Footer />
                    </div>
                } />

                <Route path="*" element={
                    <div className="app">
                        <NotFound />
                    </div>
                } />

                <Route path="/ping" element={
                    <p>pong</p>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
