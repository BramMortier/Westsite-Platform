import { Button } from "@components";
import "./nieuwsPostActions.scss";

const NieuwsPostActions = () => {
    return (
        <section className="nieuws-post-actions">
            <div className="nieuws-post-actions__title">
                <h3>
                    Nieuwsberichten (<span className="nieuws-post-actions__total-amount">13</span>)
                </h3>
            </div>
            <div className="nieuws-post-actions__btns">
                <Button type="primary">
                    Nieuw bericht opstellen
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                </Button>
            </div>
        </section>
    );
};

export default NieuwsPostActions;
