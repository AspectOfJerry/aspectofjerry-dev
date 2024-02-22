import React from 'react';
import './UrlShortener.scss';

const UrlShortener = () => {
    return (
        <div className="urls__url-shortener">
            <h1 className="title-text urls__title-text">🔗URL Shortener</h1>
            <input type="text" className="urls__input-field" placeholder="Enter URL here..." />
        </div>
    );
};

export default UrlShortener;
