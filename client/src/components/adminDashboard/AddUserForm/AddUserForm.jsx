import { useState, useRef } from "react";
import { Input, Button, DropdownMenu, ErrorMessages } from "@components";
import { cableParks } from "../../../config/dropdownMenus";
import validateForm from "@config/validation/validateForm";
import { userFormValidationSchema } from "@config/validation/formSchemas";
import { useUserContext } from "@hooks/useUserContext";
import { useAuthContext } from "@hooks/useAuthContext";
import "./addUserForm.scss";

const AddUserForm = ({ setCreateUserMenuOpen }) => {
    const { createUser } = useUserContext();
    const { register } = useAuthContext();

    const topRef = useRef();

    const userFormInitialState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneNumber: "",
        birthYear: "",
        homeCable: "",
        address: "",
        trainer: true,
    };

    const [userFormData, setUserFormData] = useState(userFormInitialState);
    const [userFormErrors, setUserFormErrors] = useState({});
    const [userFormMessage, setUserFormMessage] = useState(null);

    // TODO make the dropdown menu update the state with the name prop instead of writing a seperate handleHomeCableChange function

    const handleHomeCableChange = (selectedOption) => {
        setUserFormData({ ...userFormData, homeCable: selectedOption });
    };

    const handleToggleChange = (value) => {
        setUserFormData({ ...userFormData, trainer: value });
    };

    const handleUserFormChange = (e) => {
        const { name, value } = e.target;

        setUserFormData({
            ...userFormData,
            [name]: value,
            password: `Welcome2WestSite${userFormData.firstname}`,
        });
    };

    const handleUserFormSubmit = async (e) => {
        e.preventDefault();

        setUserFormErrors({});
        setUserFormMessage(null);
        topRef.current.scrollIntoView({ behavior: "smooth" });

        const result = await validateForm(userFormValidationSchema, userFormData);

        if (result === true) {
            const response = await register(userFormData);
            setUserFormMessage({ type: response.status, content: response.message });
            setUserFormData(userFormInitialState);
            if (response.status === "OK") {
                setTimeout(() => {
                    setCreateUserMenuOpen(false);
                    createUser(userFormData);
                    setUserFormMessage(null);
                }, 1000);
            }
        } else {
            setUserFormErrors(result);
        }
    };

    // TODO make a reusable components for general form messages

    return (
        <form ref={topRef} className="add-user-form" noValidate onSubmit={handleUserFormSubmit}>
            {userFormMessage && (
                <div
                    className={`add-user-form__general-message ${
                        userFormMessage.type === "OK" ? "add-user-form__general-message--ok" : "add-user-form__general-message--error"
                    }`}
                >
                    {userFormMessage.content}
                </div>
            )}
            <fieldset>
                <legend>Persoonlijke Informatie</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group">
                        <label htmlFor="addUserFirstname">Voornaam</label>
                        <Input
                            type="text"
                            id="addUserFirstname"
                            placeholder="Voornaam"
                            name="firstname"
                            value={userFormData.firstname}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.firstname}
                        />
                    </div>
                    <div className="add-user-form__group">
                        <label htmlFor="addUserLastname">Achternaam</label>
                        <Input
                            type="text"
                            id="addUserLastname"
                            placeholder="Achternaam"
                            name="lastname"
                            value={userFormData.lastname}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.lastname}
                        />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--half-width">
                        <label htmlFor="addUserBirthYear">Geboortejaar</label>
                        <Input
                            type="text"
                            id="addUserBirthYear"
                            placeholder="Geboortejaar"
                            name="birthYear"
                            value={userFormData.birthYear}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.birthYear}
                        />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--full-width">
                        <label htmlFor="addUserAddress">Woonplaats</label>
                        <Input
                            type="text"
                            id="addUserAddress"
                            placeholder="Voorbeeld: Oudenaarde, België"
                            name="address"
                            value={userFormData.address}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.address}
                        />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--full-width">
                        <label htmlFor="addUserAddress">Home Cablepark</label>
                        <DropdownMenu
                            options={cableParks}
                            defaultOption="Select a cablepark"
                            type="stretched"
                            onOptionChange={handleHomeCableChange}
                        />
                        {userFormErrors.homeCable && <ErrorMessages messages={userFormErrors.homeCable} />}
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Contact Informatie</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--full-width">
                        <label htmlFor="addUserEmail">E-mail adres</label>
                        <Input
                            type="text"
                            id="addUserEmail"
                            placeholder="E-mail adres"
                            name="email"
                            value={userFormData.email}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.email}
                        />
                    </div>
                </div>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--full-width">
                        <label htmlFor="addUserPhoneNumber">Telefoonnummer</label>
                        <Input
                            type="text"
                            id="addUserPhoneNumber"
                            placeholder="Voorbeeld: +32 483 78 22 33"
                            name="phoneNumber"
                            value={userFormData.phoneNumber}
                            onChange={handleUserFormChange}
                            errorMessages={userFormErrors.phoneNumber}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Trainer/Lid</legend>
                <div className="add-user-form__row">
                    <div className="add-user-form__group add-user-form__group--full-width">
                        <div className="add-user-form__toggle">
                            <button
                                type="button"
                                onClick={() => handleToggleChange(true)}
                                className={`add-user-form__toggle-btn ${userFormData.trainer === true ? "add-user-form__toggle-btn--active" : ""}`}
                            >
                                Trainer
                            </button>
                            <button
                                type="button"
                                onClick={() => handleToggleChange(false)}
                                className={`add-user-form__toggle-btn ${userFormData.trainer === false ? "add-user-form__toggle-btn--active" : ""}`}
                            >
                                Lid
                            </button>
                        </div>
                        {userFormErrors.trainer && <ErrorMessages messages={userFormErrors.trainer} />}
                    </div>
                </div>
            </fieldset>
            <div className="add-user-form__submit">
                <Button submit={true} type="primary">
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                    Toevoegen
                </Button>
            </div>
        </form>
    );
};

export default AddUserForm;
