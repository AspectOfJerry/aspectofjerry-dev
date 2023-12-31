import React, {useState, useEffect} from "react";
import "./Unix.scss";

const Unix = () => {
    const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000));

    useEffect(() => {
        document.title = "• Unix " + timestamp;
    }, [timestamp]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(Math.floor(Date.now() / 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="u__container">
            <h2 className="ctext">🕰️ Unix Timestamp ⌛</h2>
            <p className="ctext">{timestamp}</p>
        </div>
    );
};

export default Unix;
