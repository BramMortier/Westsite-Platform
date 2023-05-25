import { useContext } from "react";
import UserContext from "@context/UserContextProvider";

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) console.log("useUserContext must be used within a suitable provider");

    return context;
};
