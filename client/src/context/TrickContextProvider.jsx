import React, { createContext, useReducer, useEffect } from "react";
import axios from "@config/axios";

export const TrickContext = createContext();

const trickReducer = (state, action) => {
    switch (action.type) {
        case "SET_TRICKS":
            return {
                tricks: action.data,
            };
        case "CREATE_TRICK":
            return {
                tricks: [action.data, ...state.tricks],
            };
        case "DELETE_TRICK":
            return {
                tricks: state.tricks.filter((trick) => trick._id !== action.data._id),
            };
    }
};

export const TrickProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trickReducer, { tricks: [] });

    const setTricks = (tricks) => {
        return dispatch({ type: "SET_TRICKS", data: tricks });
    };

    const createTrick = async (trick) => {
        try {
            const response = await axios.post("/tricks", trick);
            dispatch({ type: "CREATE_TRICK", data: response.data.trick });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTrick = (trick) => {
        return dispatch({ type: "DELETE_TRICK", data: trick });
    };

    const fetchTricks = async () => {
        try {
            const response = await axios.get("/tricks");
            setTricks(response.data.tricks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTricks();
    }, []);

    return <TrickContext.Provider value={{ ...state, dispatch, createTrick, deleteTrick }}>{children}</TrickContext.Provider>;
};
