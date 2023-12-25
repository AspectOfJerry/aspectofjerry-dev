import React, {useState, useEffect} from "react";
import "./Countdown.scss";
import Confetti from "react-confetti";

const ChristmasCountdown = () => {
    const [countdown, setCountdown] = useState("Loading...");
    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const christmasDay = new Date(new Date().getFullYear(), 11, 25);
            const now = new Date();
            const distance = christmasDay - now;

            if (distance <= 0) {
                setCelebrate(true);
                setCountdown("🎉 Merry Christmas! 🎁");
                clearInterval(timer);
            } else {
                setCelebrate(false);
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown("T- " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="c__container">
            <h2 className="ctext">🎄Christmas Countdown🎄</h2>
            <p className="ctext">{countdown}</p>
            {celebrate && <Confetti numberOfPieces={300} wind={0.01} />}
        </div>
    );
};

export default ChristmasCountdown;
