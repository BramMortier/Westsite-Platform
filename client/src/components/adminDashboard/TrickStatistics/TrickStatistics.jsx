import React, { useState } from "react";
import "./trickStatistics.scss";

const TrickStatistics = () => {
    const [trickStatisticsMenuOpen, setTrickStatisticsMenuOpen] = useState(false);

    return (
        <section className={`trick-statistics ${trickStatisticsMenuOpen ? "trick-statistics--active" : ""}`}>
            <div className="trick-statistics__menu-label" onClick={() => setTrickStatisticsMenuOpen(!trickStatisticsMenuOpen)}>
                <h4>Statistieken</h4>
                <img src="/icons/chevron-down-dark.svg" alt="chevron icon" />
            </div>
        </section>
    );
};

export default TrickStatistics;
