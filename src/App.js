import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {About, Contact, Footer, Header, Projects, Skills} from "./container/index.js";
import {Navbar, NotFound} from "./components/index.js";

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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
