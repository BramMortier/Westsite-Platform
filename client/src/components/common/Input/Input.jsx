import React from "react";
import { ErrorMessages } from "@components";
import "./input.scss";

const Input = ({ type, id, name, placeholder, value, onChange, errorMessages, children, darkmode }) => {
    return (
        <React.Fragment>
            <div className={`input ${darkmode ? "input--darkmode" : ""}`}>
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
