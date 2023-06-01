import { useContext } from "react";
import { NewspostContext } from "@context/NewspostContextProvider";

export const useNewspostContext = () => {
    const context = useContext(NewspostContext);
    if (!context) console.log("useNewspostContext must be used within a suitable provider");

    return context;
};
