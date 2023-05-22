import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "@config/routes";
import { registerFormValidationSchema } from "@config/validation/formSchemas";
import validateForm from "@config/validation/validateForm";
import { useAuthContext } from "@hooks/useAuthContext";
import "./registerPage.scss";

const RegisterPage = () => {
    const { register } = useAuthContext();
    const navigate = useNavigate();

    const registerFormInitalState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    };

    const [registerFormData, setRegisterFormData] = useState(registerFormInitalState);
    const [registerFormErrors, setRegisterFormErrors] = useState({});
    const [registerFormMessage, setRegisterFormMessage] = useState(null);

    // TODO isSubmiting state toevoegen
    // TODO eerste input focus();
    // TODO live validatie (submit konp disable)
    // TODO disable submit knop na submit

    const handleRegisterFormChange = async (e) => {
        const { name, value } = e.target;

        setRegisterFormData({
            ...registerFormData,
            [name]: value,
        });
    };

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();

        setRegisterFormErrors({});
        setRegisterFormMessage(null);

        const result = await validateForm(registerFormValidationSchema, registerFormData);

        if (result === true) {
            const response = await register(registerFormData);
            setRegisterFormMessage({ type: response.status, content: response.message });
            setRegisterFormData(registerFormInitalState);
            if (response.status === "OK") setTimeout(() => navigate("/login"), 750);
        } else {
            setRegisterFormErrors(result);
        }
    };

    return (
        <div className="register-page">
            <form className="register-page__form" noValidate onSubmit={handleRegisterFormSubmit}>
                <h2>Register</h2>
                {registerFormMessage && (
                    <div
                        className={`register-page__form-general-message ${
                            registerFormMessage.type === "OK"
                                ? "register-page__form-general-message--ok"
                                : "register-page__form-general-message--error"
                        }`}
                    >
                        {registerFormMessage.content}
                    </div>
                )}
                <div className="register-page__form-row">
                    <label htmlFor="registerFirstname">firstname</label>
                    <input
                        type="text"
                        id="registerFirstname"
                        name="firstname"
                        placeholder="firstname"
                        value={registerFormData.firstname}
                        onChange={handleRegisterFormChange}
                    />
                    {registerFormErrors.firstname && <p className="register-page__form-error">{registerFormErrors.firstname}</p>}
                </div>
                <div className="register-page__form-row">
                    <label htmlFor="registerLastname">lastname</label>
                    <input
                        type="text"
                        id="registerLastname"
                        name="lastname"
                        placeholder="lastname"
                        value={registerFormData.lastname}
                        onChange={handleRegisterFormChange}
                    />
                    {registerFormErrors.lastname && <p className="register-page__form-error">{registerFormErrors.lastname}</p>}
                </div>
                <div className="register-page__form-row">
                    <label htmlFor="registerEmail">email</label>
                    <input
                        type="text"
                        id="registerEmail"
                        name="email"
                        placeholder="email"
                        value={registerFormData.email}
                        onChange={handleRegisterFormChange}
                    />
                    {registerFormErrors.email && <p className="register-page__form-error">{registerFormErrors.email}</p>}
                </div>
                <div className="register-page__form-row">
                    <label htmlFor="registerPassword">password</label>
                    <input
                        type="password"
                        id="registerPassword"
                        name="password"
                        placeholder="password"
                        value={registerFormData.password}
                        onChange={handleRegisterFormChange}
                    />
                    {registerFormErrors.password && <p className="register-page__form-error">{registerFormErrors.password}</p>}
                </div>
                <p>
                    I have an account <Link to={routes.login}>Login</Link>
                </p>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
