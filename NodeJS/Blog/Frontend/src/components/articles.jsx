import { useState, useEffect } from "react";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const get = async () => {
            const res = await fetch("http://localhost:8080/articles");
            const json = await res.json();
            setArticles(json);
        };
        get()
    }, []);

    return (
       <div>
            {articles.map((article) => (
                <div key={article.id} style={{border: "2px solid black"}}>
                    <h1>Title: {article.title}</h1>
                    <p>Content: {article.content}</p>
                    <p>Author: {article.author.username}</p>
                </div>
            ))}
       </div>
    );
};