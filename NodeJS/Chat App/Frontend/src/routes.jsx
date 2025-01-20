/*eslint no-unused-vars: "off"*/
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect, createContext } from "react";
import { Home } from "./components/home";
import { Login } from "./components/login";

export const MainContext = createContext();

export function Router() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [openChat, setOpenChat] = useState({});
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    async function getUser() {
        const res = await fetch("http://localhost:8080/current", {credentials: "include"});
        const user = await res.json();
        
        if(user.username) {
            setUser(user);
            setLoggedIn(true);
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    async function findChat(id) {
        const res = await fetch(`http://localhost:8080/chat/${id}`);
        const json = await res.json();
    
        if(res.status === 200) {
            setOpenChat(json);
            setShowChat(true);
        };
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <MainContext.Provider value={{user, openChat, setOpenChat, showChat, setShowChat, findChat}}>
            <BrowserRouter>
                <Routes>
                    {!loading && <Route path="/" element={!loggedIn ? <Login /> : <Home />}/>}
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    )
};