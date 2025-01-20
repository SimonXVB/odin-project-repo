import { useContext, useEffect } from "react";
import { UserContext } from "./context";
import { Link, Navigate } from "react-router-dom";

export default function Dashboard() {
    const { user, loggedIn, loading, get } = useContext(UserContext);

    useEffect(() => {
        get();
    }, [])

    async function del(id) {
        await fetch(`http://localhost:8080/deleteArticle/${id}`, {
            method: "DELETE",
            credentials: "include"
        });
        window.location.reload();
    };

    return (
        <>
        <p>Dashboard</p>
            {!loading && loggedIn && 
                <>
                <Link to={"/create"}>Create Post</Link>
                <div>
                    {user.Articles.map((article) => (
                        <div key={article.id} style={{border: "2px solid black"}}>
                            <h3>{article.title}</h3>
                            <span>{article.content}</span>
                            <button onClick={() => del(article.id)}>Delete</button>
                            <Link to={`/update/${article.id}`}>Update Post</Link>
                        </div>
                    ))}
                </div>
                </>
            }
            {!loading && !loggedIn && <Navigate to={"/"}/>}
        </>
    )
};