import { SectionLabel, TrainingCardV2, Button } from "@components";
import "./trainingOverview.scss";

const TrainingOverview = () => {
    return (
        <section className="training-overview__wrapper">
            <div className="training-overview">
                <div className="training-overview__label">
                    <SectionLabel name="Geplande Trainingen" />
                </div>
                <ul className="training-overview__list">
                    <TrainingCardV2 />
                    <TrainingCardV2 />
                    <TrainingCardV2 />
                    <TrainingCardV2 />
                </ul>
                <div className="training-overview__action-buttons">
                    <Button type="secondary">
                        Bekijk alle trainingen
                        <img src="/icons/arrow-right-light.svg" alt="arrow icon" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TrainingOverview;
