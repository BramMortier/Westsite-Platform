import React, { createContext, useReducer, useEffect } from "react";
import axios from "@config/axios";

export const FileContext = createContext();

const fileReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILES":
            return {
                files: action.data,
            };
        case "DELETE_FILE":
            return {
                files: state.files.filter((file) => file.filename !== action.data.filename),
            };
        default:
            return state;
    }
};

export const FileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(fileReducer, { files: [] });

    const setFiles = (files) => {
        dispatch({ type: "SET_FILES", data: files });
    };

    const createFiles = async (files) => {
        try {
            const response = await axios.post("/files/uploadFile", files, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            fetchFiles();
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const deleteFile = async (file) => {
        try {
            const response = await axios.delete(`/files/${file.filename}`);
            dispatch({ type: "DELETE_FILE", data: file });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const fetchFiles = async () => {
        try {
            const response = await axios.get("/files");
            setFiles(response.data.files);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return <FileContext.Provider value={{ ...state, dispatch, setFiles, createFiles, deleteFile }}>{children}</FileContext.Provider>;
};

export default FileContext;
