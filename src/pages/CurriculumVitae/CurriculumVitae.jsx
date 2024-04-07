import React, {useEffect} from "react";
import "./CurriculumVitae.scss";

const CurriculumVitae = () => {
    useEffect(() => {
        document.title = "Jerry • Curriculum vitæ";
    }, []);

    return (
        <div className="cv__body">
            <h1 className="cv__heading">Jerry Fu</h1>
            <h2 className="cv__subheading">Software Developer Intern</h2>

            <h3 className="cv__section-title">Contact Information</h3>
            <ul className="cv__list">
                <li className="cv__list-item">Email: jerryfu_mc@outlook.com</li>
                <li className="cv__list-item">Phone: (438) 225-8853</li>
                <li className="cv__list-item">LinkedIn: linkedin.com/in/jerryfu-dev</li>
                <li className="cv__list-item">Personal website: jerrydev.net</li>
            </ul>

            <h3 className="cv__section-title">Education</h3>
            <p className="cv__paragraph">Your education history</p>

            <h3 className="cv__section-title">Work Experience</h3>
            <p className="cv__paragraph">Your work experience</p>

            <h3 className="cv__section-title">Skills</h3>
            <p className="cv__paragraph">Your skills</p>
        </div>
    );
};

export default CurriculumVitae;
