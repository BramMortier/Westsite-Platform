import { Button } from "@components";
import "./trainingActions.scss";

const TrainingActions = () => {
    return (
        <section className="training-actions">
            <div className="training-actions__title">
                <h3>
                    Trainingsmomenten (<span className="training-actions__total-amount">19</span>)
                </h3>
            </div>
            <div className="training-actions__btns">
                <Button type="primary" onClick={() => setCreateTrickMenuOpen(true)}>
                    Training Toevoegen
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                </Button>
            </div>
        </section>
    );
};

export default TrainingActions;
