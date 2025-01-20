import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setLoggedIn, get } = useContext(UserContext);

    async function onclick(e) {
        e.preventDefault();
        
        const req = await fetch("http://localhost:8080/login", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        if(req.status === 200) {
            get();
            setLoggedIn(true);
        }

        if(req.status === 400) {
            alert("Alerta");
        }
    };

    return (
        <div>
            <form onSubmit={onclick}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={e => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Login</button>
            </form>
            <br />
        </div>
    );
};