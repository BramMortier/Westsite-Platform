import "./addUserForm.scss";
import { useState } from "react";
import { Input, Button } from "@components";
import { useUserContext } from "@hooks/useUserContext";

const AddUserForm = () => {
    const { dispatch } = useUserContext();

    const userFormInitialState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneNumber: "",
        birthYear: "",
        homeCable: "",
        address: "",
        trainer: "",
    };

    // TODO make the inputs the right type: number, text, hidden
    // TODO complete the input label, name, id, onChange etc

    const [userFormData, setUserFormData] = useState(userFormInitialState);

    const handleUserFormChange = (e) => {
        const { name, value } = e.target;

        setUserFormData({
            ...userFormData,
            [name]: value,
        });
    };

    const handleUserFormSubmit = async (e) => {
        e.preventDefault();

        // handle the form submit
    };

    return (
        <form className="add-user-form" noValidate onSubmit={handleUserFormSubmit}>
            <fieldset>
                <legend>Persoonlijke Informatie</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="">Voornaam</label>
                        <Input name="firstname" />
                    </div>
                    <div className="add-user-form__group">
                        <label htmlFor="">Achternaam</label>
                        <Input name="lastname" />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="">Geboortejaar</label>
                        <Input name="birthYear" />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="">Woonplaats</label>
                        <Input name="address" />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Contact Informatie</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="">E-mail adres</label>
                        <Input name="email" />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="">Telefoonnummer</label>
                        <Input name="phoneNumber" />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Trainer/Lid</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <div className="add-user-form__toggle">
                            <button className="add-user-form__toggle-btn add-user-form__toggle-btn--active">Trainer</button>
                            <button className="add-user-form__toggle-btn">Lid</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            <Button type="primary">
                <img src="/icons/plus-dark.svg" alt="plus icon" />
                Toevoegen
            </Button>
        </form>
    );
};

export default AddUserForm;
