import { TrainingCard } from "@components";
import "./trainingCalendar.scss";

const TrainingCalendar = () => {
    return (
        <section className="training-calendar">
            <div className="training-calendar__training-sessions">
                <TrainingCard />
                <TrainingCard />
                <TrainingCard />
                <TrainingCard />
                <TrainingCard />
                <TrainingCard />
            </div>
            <div className="training-calendar__period-selection">
                <div className="training-calendar__period-option training-calendar__period-option--active">Week</div>
                <div className="training-calendar__period-option">Maand</div>
                <div className="training-calendar__period-option">Jaar</div>
            </div>
        </section>
    );
};

export default TrainingCalendar;
