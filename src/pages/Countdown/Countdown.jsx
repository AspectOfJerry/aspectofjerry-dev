import React, {useState, useEffect} from "react";
import "./Countdown.scss";
import Confetti from "react-confetti";

const ChristmasCountdown = () => {
    const [countdown, setCountdown] = useState("Loading...");
    const [year, setYear] = useState("2️⃣0️⃣2️⃣3️⃣");
    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const target = new Date(new Date().getFullYear() + 1, 0, 1);
            const now = new Date();
            const delta = target - now;

            if (delta <= 0) {
                setCelebrate(true);
                setYear("2️⃣0️⃣2️⃣4️⃣");
                setCountdown("🎉 Happy New Year! 🎉");
                clearInterval(timer);
            } else {
                setCelebrate(false);
                setYear("2️⃣0️⃣2️⃣3️⃣");
                const days = Math.floor(delta / (1000 * 60 * 60 * 24));
                const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((delta % (1000 * 60)) / 1000);

                setCountdown("T- " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="c__container">
            <h2 className="ctext">✨New year countdown!📅</h2>
            <p className="ctext">{countdown}</p>
            <p className="ctext">{year}</p>
            {celebrate && <Confetti numberOfPieces={250} />}
        </div>
    );
};

export default ChristmasCountdown;
