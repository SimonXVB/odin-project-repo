import { UserContext } from "./context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Create() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const nav = useNavigate();

    async function submit() {

        if(title === ""|| content === "") {
            return alert("Enter something");
        }

        await fetch(`http://localhost:8080/createArticle`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "title": title,
                "content": content,
                "userId": user.id,
                "published": false
            })
        });
        nav("/");
    };

    return ( 
        <div>
            <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="Content" onChange={e => setContent(e.target.value)}/>
            <button onClick={submit}>Create Post</button>
        </div>
    )
};