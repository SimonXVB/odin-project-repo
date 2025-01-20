import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Update() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const[newid, setId] = useState("");
    const nav = useNavigate();
    
    useEffect(() => {
        const get = async () => {
            const res = await fetch(`http://localhost:8080/articles/${id}`);
            const json = await res.json();
            setTitle(json.title);
            setContent(json.content);
            setId(json.id);
        };
        get();
    }, [id]);

    async function update() {
        if(title === "" || content === ""){
            return alert("Enter something");
        }

        await fetch(`http://localhost:8080/updateArticle`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                "title": title,
                "content": content,
                "id": newid,
                "published": false
            })
        });
        nav("/");
    };

    return (
        <>
        <div>Update</div>
        <input value={title} onChange={e => setTitle(e.target.value)}/>
        <input value={content} onChange={e => setContent(e.target.value)}/>
        <button onClick={update}>Update Post</button>
        </>
    )
};