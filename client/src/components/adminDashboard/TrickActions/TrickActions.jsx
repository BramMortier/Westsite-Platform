import "./trickActions.scss";
import { Button } from "@components";

const TrickActions = () => {
    return (
        <section className="trick-actions">
            <div className="trick-actions__title">
                <h3>
                    Tricks (<span className="trick-actions__total-amount">118</span>)
                </h3>
            </div>
            <div className="trick-actions__btns">
                <Button type="primary">
                    Trick Toevoegen
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                </Button>
            </div>
        </section>
    );
};

export default TrickActions;
