import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context";

export default function LoggedIn() {
    const {user, setUser, setLoggedIn} = useContext(UserContext);

    async function logout() {
        await fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include"
        });
        setUser({});
        setLoggedIn(false);
    };

    return (
        <div>
            <p><strong>User: </strong>{user.username}</p>
            <Link to={"/dashboard"} style={{display: "block"}}>Dashboard</Link>
            <br />
            <button onClick={logout}>Log Out</button>
            <br />
            <br />
        </div>
    )
};