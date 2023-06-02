import "./trickCardV2.scss";

const TrickCardV2 = ({ trick }) => {
    return (
        <div className="trick-card-v2">
            <div className="trick-card-v2__thumbnail">
                <img src={`http://localhost:3000/api/files/${trick.thumbnail}`} alt="trick thumbnail" />
            </div>
            <h3 className="trick-card-v2__name">{trick.name}</h3>
            <ul className="trick-card-v2__attributes">
                <li className="trick-card-v2__attribute">
                    <p className="trick-card-v2__tag">{trick.difficulty}</p>
                </li>
                <li className="trick-card-v2__attribute">
                    <p className="trick-card-v2__tag">{trick.type}</p>
                </li>
                <li className="trick-card-v2__attribute">
                    <p className="trick-card-v2__tag">{trick.variant}</p>
                </li>
            </ul>
            <p className="trick-card-v2__description">{trick.description.substring(0, 200)}</p>
        </div>
    );
};

export default TrickCardV2;
