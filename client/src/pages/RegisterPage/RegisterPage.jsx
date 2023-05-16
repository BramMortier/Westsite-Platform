import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import "./registerPage.scss";

const RegisterPage = () => {
    const [registerFormData, setRegisterFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const onChange = async (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value,
        });
    };

    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/auth/register", registerFormData);
            console.log(response.data);
        } catch (error) {
            if (!error.response) {
                console.log("No Server Response");
            } else if (error.response.status === 409) {
                console.log(error.response.data);
            } else if (error.response.status === 400) {
                console.log(error.response.data);
            } else {
                console.log(error.response.data);
            }
        }
    };

    return (
        <div className="login-page">
            <form className="login-page__form" onSubmit={register}>
                <h2>Register</h2>
                <div className="login-page__form-row">
                    <label htmlFor="firstname">firstname</label>
                    <input type="text" name="firstname" placeholder="firstname" onChange={onChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="lastname">lastname</label>
                    <input type="text" name="lastname" placeholder="lastname" onChange={onChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" placeholder="email" onChange={onChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" placeholder="password" onChange={onChange} />
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
