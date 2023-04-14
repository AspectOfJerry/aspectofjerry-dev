import React, {useEffect} from "react";

import "./NotFound.scss";


const NotFound = () => {
    useEffect(() => {
        document.title = "AspectOfJerry • 404"
    }, []);

    return (
        <div id="NotFound" className="app__notfound">
            {/* <Helmet>
                <title>AspectOfJerry • 404</title>
            </Helmet> */}
            <h1>Welcome to the stunning 404 page! This is probably not what you are looking for.</h1>
            <a href="https://aspectofjerry.dev">Take me home</a>
        </div>
    );
};

export default NotFound;
