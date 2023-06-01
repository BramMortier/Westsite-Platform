import { useContext } from "react";
import { TrickContext } from "@context/TrickContextProvider";

export const useTrickContext = () => {
    const context = useContext(TrickContext);
    if (!context) console.log("useTrickContext must be used within a suitable provider");

    return context;
};
