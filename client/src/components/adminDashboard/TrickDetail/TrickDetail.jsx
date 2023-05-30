import React, { useState } from "react";
import "./trickDetail.scss";

const TrickDetail = () => {
    const [trickDetailMenuOpen, setTrickDetailMenuOpen] = useState(false);

    return (
        <section className={`trick-detail ${trickDetailMenuOpen ? "trick-detail--active" : ""}`}>
            <div className="trick-detail__menu-label" onClick={() => setTrickDetailMenuOpen(!trickDetailMenuOpen)}>
                <h4>Geselecteerde trick</h4>
                <img src="/icons/chevron-down-dark.svg" alt="chevron icon" />
            </div>
        </section>
    );
};

export default TrickDetail;
