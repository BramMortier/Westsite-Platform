import React from "react";
import "./trainingCard.scss";

const TrainingCard = () => {
    return (
        <div className="training-card">
            <div className="training-card__thumbnail">
                <img src="/images/cableparks/lakeside-paradise.png" alt="location thumbnail" />
                <p>8:00 - 12:30</p>
            </div>
            <div className="training-card__info">
                <p>17 mei</p>
                <span className="training-card__info-divider"></span>
                <p>Terhills Cablepark</p>
            </div>
        </div>
    );
};

export default TrainingCard;
