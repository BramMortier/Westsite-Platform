import React, { createContext, useReducer, useEffect } from "react";
import axios from "@config/axios";

export const UserContext = createContext();

export const setUsers = (users) => {
    return { type: "SET_USERS", data: users };
};

export const createUser = (userData) => {
    return { type: "CREATE_USER", data: userData };
};

export const deleteUser = (userId) => {
    return { type: "DELETE_USER", data: userId };
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                users: action.data,
            };
        case "CREATE_USER":
            return {
                users: [action.data, ...state.users],
            };
        case "DELETE_USER":
            return {
                users: state.users.filter((user) => user._id !== action.data),
            };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { users: [] });

    const getUserById = (userId) => {
        return state.users.find((user) => user._id === userId);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("/users");
            dispatch(setUsers(response.data.users));
        };
        fetchUsers();
    }, []);

    return <UserContext.Provider value={{ ...state, dispatch, getUserById }}>{children}</UserContext.Provider>;
};

export default UserContext;
