import React from "react";

import "./Footer.scss";


const sites = [
    {title: "Discord bot documentation", url: "https://bot.aspectofjerry.dev"},
    {title: "Status page", url: "https://status.aspectofjerry.dev"}
];

const texts = [
    {title: "", url: ""}
];

const Footer = () => {
    return (
        <>
            <div className="app__footer-divider app__footer-bg">
                <hr className="app__footer-divider-rounded" />
            </div>
            <div className="app__footer">
                <div className="app__footer-sites">
                    <h4 className="bold-text">Other sites</h4>
                    {sites.map((site) => {
                        return (
                            <a className="p-text" href={site.url} key={site.title}>{site.title}</a>
                        )
                    })}
                </div>
            </div>
            <div className="copyright app__footer-bg">
                <p>Copyright © 2022 AspectOfJerry, Jerry</p>
            </div>
        </>
    );
};

// no wrapping footer
export default Footer;
