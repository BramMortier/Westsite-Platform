import React from "react";
import { ErrorMessages } from "@components";
import "./textarea.scss";

const Textarea = ({ id, name, placeholder, value, onChange, errorMessages }) => {
    return (
        <React.Fragment>
            <textarea autoComplete="off" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
            <ErrorMessages messages={errorMessages} />
        </React.Fragment>
    );
};

export default Textarea;
