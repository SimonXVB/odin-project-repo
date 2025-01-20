import { useEffect, useState, useContext } from "react";
import { MainContext } from "../routes";

export function Nav() {
    const { user, findChat } = useContext(MainContext);

    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);

    async function getChats() {
        const res = await fetch("http://localhost:8080/chat", {credentials: "include"});
        const json = await res.json();
        
        if(res.status === 200) {
            setChats(json);
        };
    };

    async function getUsers() {
        const res = await fetch("http://localhost:8080/user");
        const json = await res.json();

        if(res.status === 200) {
            setUsers(json);
        };
    };

    async function createChat(username) {
        const req = await fetch("http://localhost:8080/chat", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                "user2": username,
            })
        }); 

        if(req.status === 201) {
            window.location.reload();
        };
    };

    async function logout() {
        await fetch("http://localhost:8080/logout", {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            method: "POST"
        }); 

        window.location.reload();
    };

    useEffect(() => {
        getChats();
        getUsers();
    }, []);

    return (
        <>
            <nav className="border-b-4 border-black flex p-3 font-semibold">
                <div className="flex">

                    <select className="cursor-pointer mr-2 border-b-2 border-black">
                        <option>New Chat</option>
                        <optgroup label="With:">
                        {users.map((el) => {
                            if(user.username !== el.username) {
                                return (
                                    <option key={el.id} onClick={() => createChat(el.username)}>
                                    {el.username}
                                    </ option>
                                );
                            };
                        })}
                        </optgroup>
                    </select>

                    <select className="cursor-pointer border-b-2 border-black">
                        <option>Chats</option>
                        {chats.map((chat) => (
                            <option key={chat.id} onClick={() => findChat(chat.id)}>Nr. {chat.id}</option>
                        ))}
                    </select>

                </div>
                <div className="flex justify-end w-full">
                    <p>{user.username}</p>
                    <button onClick={logout} className="border-b-2 border-black ml-2">Log Out</button> 
                </div>
            </nav>
        </>
    )
};