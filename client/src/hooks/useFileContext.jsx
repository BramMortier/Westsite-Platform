import { useContext } from "react";
import FileContext from "@context/FileContextProvider";

export const useFileContext = () => {
    const context = useContext(FileContext);
    if (!context) console.log("useFileContext must be used within a suitable provider");

    return context;
};
