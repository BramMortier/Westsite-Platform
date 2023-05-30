import "./trickCard.scss";

const TrickCard = () => {
    return (
        <div className="trick-card">
            <div className="trick-card__thumbnail"></div>
            <h3 className="trick-card__name">Heelside frontside 360</h3>
            <ul className="trick-card__attributes">
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">basic</p>
                </li>
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">kicker</p>
                </li>
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">spin</p>
                </li>
            </ul>
            <p className="trick-card__description">
                Deze trick is de basis van enorm veel tricks in wakeboarden. Het is de eerste trick waarbij je je hendel zult moeten doorgeven. Daarom
                is het belangrijk dat je zeer comfortabel bent met het nemen van de kicker.
            </p>
        </div>
    );
};

export default TrickCard;
