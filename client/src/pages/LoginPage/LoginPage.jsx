import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPage.scss";
import axios from "axios";

const LoginPage = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        });
    };

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", loginFormData);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-page">
            <form className="login-page__form" onSubmit={login}>
                <h2>Login</h2>
                <div className="login-page__form-row">
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" placeholder="email" onChange={onChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" placeholder="password" onChange={onChange} />
                </div>
                <p>
                    I dont have an account <Link to="/register">Register</Link>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
