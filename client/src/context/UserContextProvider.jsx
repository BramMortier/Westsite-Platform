import React, { createContext, useReducer, useEffect } from "react";
import axios from "@config/axios";

export const UserContext = createContext();

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

    const setUsers = (users) => {
        dispatch({ type: "SET_USERS", data: users });
    };

    const createUser = (userData) => {
        dispatch({ type: "CREATE_USER", data: userData });
    };

    const deleteUser = (userId) => {
        dispatch({ type: "DELETE_USER", data: userId });
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("/users");
            setUsers(response.data.users);
        };
        fetchUsers();
    }, []);

    return <UserContext.Provider value={{ ...state, dispatch, getUserById, createUser, deleteUser }}>{children}</UserContext.Provider>;
};

export default UserContext;
