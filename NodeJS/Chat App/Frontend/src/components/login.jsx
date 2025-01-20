import { useState } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const [empty, setEmpty] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const [created, setCreated] = useState(false);

    async function onLogIn(e) {
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
            window.location.reload();
        } else {
            setTimeout(() => {
                setInvalid(false);
            }, 2000);
            setInvalid(true);
        };
    };

    async function onRegister(e) {
        e.preventDefault();
        
        const req = await fetch("http://localhost:8080/user", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                "username": regUsername,
                "password": regPassword
            })
        });

        if(req.status === 201) {
            setCreated(true);
            setRegUsername("");
            setRegPassword("");
        } else {
            setRegUsername("");
            setRegPassword("");
            setTimeout(() => {
                setEmpty(false);
            }, 2000);
            return setEmpty(true);
        };
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <p className="font-black m-10 text-4xl">GigaChat</p>
            <div className="flex flex-col items-center border-4">
                <div className="p-2 font-black">Log In</div>
                <form onSubmit={onLogIn} className="flex flex-col justify-center">
                    <input onChange={e => setUsername(e.target.value)} placeholder="Username" className="text-center p-2"/>
                    <input onChange={e => setPassword(e.target.value)} placeholder="Password" className="text-center p-2"/>
                    <button type="submit" className="p-2 hover:bg-gray-300 font-semibold">Log In</button>
                </form>
            </div>
            {invalid && <div>Invalid credentials, try again</div>}
            <div className="font-black m-6">OR</div>
            <div className="flex flex-col items-center border-4">
                <div className="p-2 font-black">Create a user</div>
                <form onSubmit={onRegister} className="flex flex-col justify-center">
                    <input onChange={e => setRegUsername(e.target.value)} value={regUsername} placeholder="Username" className="text-center p-2"/>
                    <input onChange={e => setRegPassword(e.target.value)} value={regPassword} placeholder="Password" className="text-center p-2"/>
                    <button type="submit" className="p-2 hover:bg-gray-300 font-semibold">Create User</button>
                </form>
            </div>

            {created && <div>User created, please log in</div>}
            {empty && <div>Please enter a valid username and/or password</div>}
        </div>
    );
};