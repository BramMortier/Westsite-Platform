import { Button } from "@components";
import "./memberActions.scss";

const MemberActions = () => {
    return (
        <section className="member-actions">
            <div className="member-actions__title">
                <h3>
                    Leden (<span className="member-actions__total-amount">56</span>)
                </h3>
            </div>
            <div className="member-actions__btns">
                <Button type="primary">
                    Lid Toevoegen
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                </Button>
            </div>
        </section>
    );
};

export default MemberActions;
