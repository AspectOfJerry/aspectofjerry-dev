import React from 'react';

import {About, Contact, Footer, Header, Projects, Skills} from './container/index.js';
import {Navbar} from './components/index.js';

import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Contact />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
