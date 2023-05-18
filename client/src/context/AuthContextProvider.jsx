import { createContext, useEffect, useReducer } from "react";
import axios from "../config/axios";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.data.user,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
    }
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const fetchUserInfo = async () => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const response = await axios.get("/users/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(response.data);

                axios.defaults.headers.common["Authorization"] = token;

                dispatch({
                    type: "LOGIN",
                    data: {
                        user: response.data.user,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    };

    useEffect(() => {
        const verifyUser = async () => {
            if (!state.user) {
                await fetchUserInfo();
            }
        };
        verifyUser();
    }, []);

    const register = async (registerData) => {
        try {
            const response = await axios.post("/auth/register", registerData);
            return response.data;
        } catch (error) {
            if (!error.response) {
                return { message: "No Server Response" };
            } else if (error.response.status === 409) {
                return error.response.data;
            } else if (error.response.status === 400) {
                return error.response.data;
            } else {
                return error.response.data;
            }
        }
    };

    const login = async (loginData) => {
        try {
            const response = await axios.post("/auth/login", loginData);
            localStorage.setItem("token", response.data.token);
            console.log(response.data);
            await fetchUserInfo();
        } catch (error) {
            if (!error.response) {
                console.log("No Server Response");
            } else if (error.response.status === 400) {
                console.log(error.response.data);
            } else if (error.response.status === 401) {
                console.log(error.response.data);
            } else {
                console.log(error.response.data);
            }
        }
    };

    const logout = async () => {
        try {
            localStorage.removeItem("token");
            dispatch({
                type: "LOGOUT",
            });
        } catch (error) {
            console.log(error.response);
        }
    };

    return <AuthContext.Provider value={{ state, dispatch, register, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
