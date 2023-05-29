import React from "react";
import "./errorMessages.scss";

const ErrorMessages = ({ messages }) => {
    return (
        <React.Fragment>
            {messages && (
                <div className="error-messages__list">
                    {messages.map((message, index) => (
                        <div key={index} className="error-messages__error">
                            <img src="/icons/exclamation-circle2.svg" alt="exclamation icon" />
                            <p className="error-messages__error-message">{message}</p>
                        </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default ErrorMessages;
