import React from "react";

import "./Footer.scss";


const sites = [
    {title: "Hypixel Skyblock mod (forge-1.8.9)", url: "https://bap.jerrydev.net"},
    {title: "Discord bot (decommissioned)", url: "https://bot.jerrydev.net"},
    {title: "Countdown", url: "/countdown"},
    {title: "404", url: "/404"}
];

const texts = [
    {title: "", url: ""}
];

const Footer = () => {
    return (
        <>
            <div className="footer__shadow"></div>

            <div className="footer">
                <div className="footer__sites">
                    <h4 className="bold-text">Links</h4>
                    {sites.map((site) => {
                        return (
                            <a className="p-text" href={site.url} key={site.title}>{site.title}</a>
                        )
                    })}
                </div>
            </div>
            <div className="copyright" style={{backgroundColor: "var(--footer-color)", paddingTop: "0"}}>
                <p>Copyright © 2022 Jerry</p>
            </div>
        </>
    );
};

// do not wrap the footer
export default Footer;
