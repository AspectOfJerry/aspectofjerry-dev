import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import "./Elements.scss";

const Elements = (themeType) => {
    useEffect(() => {
        document.title = "• Periodic Table";
    }, []);

    const [periodicTableData, setPeriodicTableData] = useState([]);
    const [currentElement, setCurrentElement] = useState({
        name: "Periodic Table!",
        symbol: "⚛️",
        number: "Z",
        mass: "0",
        type: "n/a",
        group: "1-18",
        period: "1-7",
        block: "spdf",
        protons: 0,
        neutrons: 0,
        electrons: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.jerrydev.net/elements");
                // const response = await fetch("http://localhost:3001/elements");
                const data = await response.json();
                setPeriodicTableData(data.data.elements);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <motion.div
                className="e__table-container"
            >
                {periodicTableData.map((period, rowIndex) => (
                    <div className="e__row" key={rowIndex}>
                        {period.map((element, colIndex) => (
                            <motion.button
                                className={"e__type-" + (element !== null ? ((themeType.themeType === "light" ? "" : "dark-") + element.type.replaceAll(" ", "-") + " e__element") : "empty")}
                                key={colIndex}
                                onClick={() => element && setCurrentElement(element)}
                            >
                                <p
                                    className="ctext"
                                >
                                    {element ? element.symbol : "n/a"}
                                </p>
                            </motion.button>
                        ))}
                    </div>
                ))}
            </motion.div>
            {currentElement && (
                <>
                    <div className="e__desc-container">
                        <h2>{currentElement.name} ({currentElement.symbol})</h2>
                        <div className="e__desc-props-container">
                            <div>
                                <p className="ctext"><span>Atomic Number:</span> {currentElement.number}</p>
                                <p className="ctext"><span>Mass:</span> {currentElement.mass}&thinsp;u</p>
                                <span className={"e__type-" + (themeType.themeType === "light" ? "" : "dark-") + currentElement.type.replaceAll(" ", "-")}>
                                    <p className="ctext" style={{textTransform: "capitalize"}}><span>Type:</span> {currentElement.type}</p>
                                </span>
                            </div>

                            <div>
                                <p className="ctext"><span>Group:</span> {currentElement.group}</p>
                                <p className="ctext"><span>Period:</span> {currentElement.period}</p>
                                <p className="ctext"><span>Block:</span> {currentElement.block}</p>
                            </div>

                            <div>
                                <p className="ctext" style={{color: "#d60024"}}><span>Protons:</span> {currentElement.protons}</p>
                                <p className="ctext" style={{color: "#0060f0"}}><span>Neutrons:</span> {currentElement.neutrons}</p>
                                <p className="ctext" style={{color: "#945700"}}><span>Electrons:</span> {currentElement.electrons}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <p className="p-text">
                <br /><br />
                🚧 more stuff coming soon 🚧<br />
                ⚠️ nucleon counts have not been verified yet.<br />
                ⚠️ yes, it is currently completely broken on mobile.<br />
            </p>
        </>
    );
};

export default Elements;
