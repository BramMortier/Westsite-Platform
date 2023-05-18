import { useState } from "react";
import { Link } from "react-router-dom";
import { registerFormValidationSchema } from "../../config/validation/formSchemas";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./registerPage.scss";

const RegisterPage = () => {
    const { register } = useAuthContext();

    const registerFormInitalState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    };

    const [registerFormData, setRegisterFormData] = useState(registerFormInitalState);
    const [registerFormErrors, setRegisterFormErrors] = useState({});

    const handleRegisterFormChange = async (e) => {
        const { name, value } = e.target;

        const updatedRegisterFormData = {
            ...registerFormData,
            [name]: value,
        };

        setRegisterFormData(updatedRegisterFormData);

        const validationResult = registerFormValidationSchema.validate(updatedRegisterFormData, { abortEarly: false });

        const filteredErrs = validationResult.error.details
            .map((entry) => {
                if (entry.context.key === name) {
                    return entry.message;
                }
                return null;
            })
            .filter((error) => error !== null);

        setRegisterFormErrors({
            ...registerFormErrors,
            [name]: filteredErrs,
        });
    };

    console.log(registerFormErrors);

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        await register(registerFormData);
        setRegisterFormData(registerFormInitalState);
    };

    return (
        <div className="register-page">
            <form className="register-page__form" onSubmit={handleRegisterFormSubmit}>
                <h2>Register</h2>
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
                    I have an account <Link to="/login">Login</Link>
                </p>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
