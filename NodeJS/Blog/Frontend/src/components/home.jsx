import { useContext } from "react";
import { UserContext } from "./context";
import Articles from "./articles";
import Login from "./login";
import LoggedIn from "./loggedIn";

export default function Home() {
    const { loggedIn, loading } = useContext(UserContext);

    return (
        <>
            {!loading && !loggedIn ? <Login /> : <LoggedIn />}
            <Articles />
        </>
    )
};