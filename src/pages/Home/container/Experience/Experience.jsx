import React from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";
import "./Experience.scss";
import SectionTitle from "../../../components/SectionTitle";


// https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/first-brand-guidelines-2020.pdf
// https://info.firstinspires.org/hubfs/2023%20Season/2023%20season%20assets/frc-chargedup-assets/firstenergize-frc-chargedup-styleguide.pdf
// https://info.firstinspires.org/hubfs/2022%20Season%20Assets/free-season-assets/ft%20-%20freight%20frenzy/firstforward-ftc-freightfrenzy-styleguide.pdf

const experience = [
    {
        year: "2017-2019",
        experiences: [
            {}
        ]
    },
    {
        year: "2022",
        experiences: [
            {
                title: "FIRST® Tech Challenge",
                description: "I participated in FREIGHT FRENZY with Team 20117 | 2021-2022",
                iconUrl: media.ftc_icon_vert,
                url: "https://www.firstinspires.org/robotics/ftc"
            }
            // {title: "Freight Frenzy", description: "FREIGHT FRENZY presented by Raytheon Technologies | 2021-2022", iconUrl: media.freight_frenzy_vert}
        ]
    },
    {
        year: "2023",
        experiences: [
            {
                title: "Team 3990",
                description: "Joined Team 3990, \"Tech for Kids\", competing in the FIRST Robotics Competition.",
                iconUrl: media.t4k_logo_reduced,
                url: "https://www.team3990.com/en/"
            },
            {
                title: "FIRST® Robotics Competition",
                description: "FIRST inspires future tech leaders, founded by Dean Kamen in 1989.",
                iconUrl: media.frc_icon_vert,
                url: "https://www.firstinspires.org/robotics/frc"
            },
            {
                title: "Charged Up",
                description: "CHARGED UP presented by Haas | FRC 2022-2023",
                iconUrl: media.charged_up_horz
            },
            {
                title: "2023 FIRST® Championship",
                description: "FIRST ENERGIZE season championship at Houston, Texas, April 19-22 | FRC 2023.",
                iconUrl: media.first_cmp_2023
            }
        ]
    },
    {
        year: "2024",
        experiences: [
            {
                title: "Crescendo",
                description: "CRESCENDO presented by Haas | FRC 2023-2024",
                iconUrl: media.crescendo_horz
            },
        ]
    }
];

const Experience = () => {
    return (
        <>
            <SectionTitle raw="Experience">
                <span>Exp</span>erience
            </SectionTitle>

            <div className="app__exp-years">
                <p className="p-text">🚧 work in progress 🚧</p>
                {experience.map((year) => {
                    return (
                        <motion.div
                            className="app__exp-year"
                            key={year.year}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="app__exp-year-text"><span>\\</span> {year.year}</h2>

                            <div className="app__exp-year-experiences">
                                {/*{year.experiences.map((experience) => {*/}
                                {/*})}*/}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
};

export default AppWrap(Experience, "experience");
