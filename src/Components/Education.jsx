import React from "react";

const Education = () => {
    return (
        <section className="padding" id="education">
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div className="container">
            <div className="box">
                <a href="https://www.dcc.edu.ph/" target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>Data Center College of the Philippines</h3>
                </a>
                <p className="small">Bachelor of Science in Information Technology</p>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Education;