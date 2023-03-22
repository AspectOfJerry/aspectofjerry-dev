import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages/Home
import {About, Contact, Footer, Header, Projects, Skills} from "./pages/Home/container/index.js";
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
                        <About />
                        <Skills />
                        <Contact />
                        <Projects />
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
