import { Button } from "@components";
import "./trainingCardV2.scss";

const TrainingCardV2 = () => {
    return (
        <div className="training-card-v2">
            <div className="training-card-v2__info">
                <p>17 mei</p>
                <span className="training-card-v2__info-divider"></span>
                <p>Terhills Cablepark</p>
            </div>
            <div className="training-card-v2__thumbnail">
                <img src="/images/cableparks/lakeside-paradise.png" alt="location thumbnail" />
                <p>8:00 - 12:30</p>
            </div>
            <div className="training-card-v2__action-buttons">
                <Button type="primary">Aanwezigheid</Button>
                <Button type="secondary">Info</Button>
            </div>
            <div className="training-card-v2__attendance-menu"></div>
        </div>
    );
};

export default TrainingCardV2;
