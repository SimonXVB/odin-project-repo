import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const get = async () => {
        const res = await fetch("http://localhost:8080/user", {credentials: "include"});
        const json = await res.json();
        if(json.username) {
            setUser(json);
            setLoggedIn(true); 
            setLoading(false);
        } else {
            setLoggedIn(false);
            setLoading(false);
        };
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn, get, loading}}>
            {children}
        </UserContext.Provider>
    )
};