import React, { createContext, useReducer, useEffect } from "react";
import axios from "@config/axios";

export const NewspostContext = createContext();

const newspostReducer = (state, action) => {
    switch (action.type) {
        case "SET_NEWSPOSTS":
            return {
                newsposts: action.data,
            };
    }
};

export const NewspostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(newspostReducer, { newsposts: [] });

    const setNewsposts = (newsposts) => {
        return dispatch({ type: "SET_NEWSPOSTS", data: newsposts });
    };

    const fetchNewsposts = async () => {
        try {
            const response = await axios.get("/newsposts");
            setNewsposts(response.data.newsposts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNewsposts();
    }, []);

    return <NewspostContext.Provider value={{ ...state, dispatch, setNewsposts }}>{children}</NewspostContext.Provider>;
};
