import React from "react";
import {Helmet} from "react-helmet";

import "./NotFound.scss";


const NotFound = () => {
    return (
        <div id="NotFound" className="app__notfound">
            <Helmet>
                <title>AspectOfJerry • 404</title>
            </Helmet>
            <h1>Welcome to the stunning 404 page! This is probably not what you are looking for.</h1>
            <a href="https://aspectofjerry.dev">Take me home</a>
        </div>
    );
};

export default NotFound;
