import React from "react";
import { ErrorMessages } from "@components";
import { marked } from "marked";
import "./textarea.scss";

const Textarea = ({ id, name, placeholder, value, onChange, errorMessages }) => {
    // const convertToHTML = (e) => {
    //     const html = marked.parse(e.target.value);
    //     onChange(html);
    // };

    // TODO add markdown to textarea component

    return (
        <React.Fragment>
            <textarea autoComplete="off" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
            <ErrorMessages messages={errorMessages} />
        </React.Fragment>
    );
};

export default Textarea;
