import React, {useState, useEffect} from "react";
import "./Bday.scss";
import Confetti from "react-confetti";

const Bday = () => {
    useEffect(() => {
        document.title = "🎂 " + countdown + " • jerrydev"
    });

    const [countdown, setCountdown] = useState("Loading...");
    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            let now = new Date();
            let bday = new Date(now.getFullYear(), 3, 3); // April 3rd

            // If the current date is after the birthday, set bday to next year's birthday
            if (now > bday) {
                bday = new Date(now.getFullYear() + 1, 3, 3);
            }

            const distance = bday - now;

            if (distance <= 0) {
                setCelebrate(true);
                setCountdown("🥳 Happy birthday! 🎉");
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
            <h2 className="ctext">🎂 Birthday countdown ⌛</h2>
            <p className="ctext">{countdown}</p>
            {celebrate && <Confetti numberOfPieces={300} wind={0.01} />}
        </div>
    );
};

export default Bday;
