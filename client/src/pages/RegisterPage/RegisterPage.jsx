import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./registerPage.scss";

const RegisterPage = () => {
    const { register } = useAuthContext();

    const [registerFormData, setRegisterFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = async (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(registerFormData);
    };

    return (
        <div className="login-page">
            <form className="login-page__form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="login-page__form-row">
                    <label htmlFor="registerFirstname">firstname</label>
                    <input type="text" id="registerFirstname" name="firstname" placeholder="firstname" onChange={handleChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="registerLastname">lastname</label>
                    <input type="text" id="registerLastname" name="lastname" placeholder="lastname" onChange={handleChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="registerEmail">email</label>
                    <input type="text" id="registerEmail" name="email" placeholder="email" onChange={handleChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="registerPassword">password</label>
                    <input type="password" id="registerPassword" name="password" placeholder="password" onChange={handleChange} />
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
