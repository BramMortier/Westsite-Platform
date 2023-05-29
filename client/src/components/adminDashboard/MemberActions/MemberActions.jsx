import { Button } from "@components";
import { useUserContext } from "@hooks/useUserContext";
import "./memberActions.scss";

const MemberActions = ({ setCreateUserMenuOpen }) => {
    const { users } = useUserContext();

    return (
        <section className="member-actions">
            <div className="member-actions__title">
                <h3>
                    Leden (<span className="member-actions__total-amount">{users.length}</span>)
                </h3>
            </div>
            <div className="member-actions__btns">
                <Button type="primary" onClick={() => setCreateUserMenuOpen(true)}>
                    Lid Toevoegen
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                </Button>
            </div>
        </section>
    );
};

export default MemberActions;
