import "./trickCard.scss";

const TrickCard = ({ trick }) => {
    return (
        <div className="trick-card">
            <div className="trick-card__thumbnail">
                <img src={`http://localhost:3000/api/files/${trick.thumbnail}`} alt="trick thumbnail" />
            </div>
            <h3 className="trick-card__name">{trick.name}</h3>
            <ul className="trick-card__attributes">
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">{trick.difficulty}</p>
                </li>
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">{trick.type}</p>
                </li>
                <li className="trick-card__attribute">
                    <p className="trick-card__tag">{trick.variant}</p>
                </li>
            </ul>
            <p className="trick-card__description">{trick.description.substring(0, 200)}</p>
        </div>
    );
};

export default TrickCard;
