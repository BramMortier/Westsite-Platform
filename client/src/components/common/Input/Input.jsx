import React from "react";
import { ErrorMessages } from "@components";
import "./input.scss";

// TODO make the input type dynamic aswell :)

const Input = ({ type, id, name, placeholder, value, onChange, errorMessages, children }) => {
    return (
        <React.Fragment>
            <div className="input">
                {children}
                <div className="input__main">
                    <input autoComplete="off" type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
                </div>
            </div>
            <ErrorMessages messages={errorMessages} />
        </React.Fragment>
    );
};

export default Input;
