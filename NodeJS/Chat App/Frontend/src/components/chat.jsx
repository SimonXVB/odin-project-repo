import { useContext, useState } from "react";
import { MainContext } from "../routes";

export function Chat() {
    const { openChat: { id, Messages }, setShowChat, showChat, findChat, user } = useContext(MainContext);

    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    async function postMessage(e, chatId) {
        e.preventDefault();

        if(message === "") {
            return;
        };

        const res = await fetch("http://localhost:8080/message", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                "chatID": chatId,
                "message": message
            })
        });

        if(res.status === 201) {
            findChat(id);
            setMessage("");
        };
    };

    async function deleteMessage(messageId) {

        const res = await fetch(`http://localhost:8080/message/${messageId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            method: "DELETE"
        });

        if(res.status === 204) {
            findChat(id);
        };
    };

    async function deleteChat(id) {
        const res = await fetch(`http://localhost:8080/chat/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            method: "DELETE"
        });

        if(res.status === 204) {
            window.location.reload();
        };
    };

    return (
        <>
        {showChat && Messages &&
            <div className="flex flex-col flex-grow">

                <div>
                    <button onClick={() => setShowChat(false)} className="p-2 hover:bg-gray-300 font-black">Close Chat</button>
                    <button onClick={() => findChat(id)} className="p-2 hover:bg-gray-300 font-black">Refresh Chat</button>
                    <button onClick={() => setOpen(true)} className="p-2 hover:bg-gray-300 font-black">Delete Chat</button>
                </div>

                <div className="flex flex-col-reverse flex-grow h-1 overflow-y-scroll">
                    {Messages.map((message) => (
                        <div key={message.id} className="border-2 border-black m-2 p-2">
                            {user.username === message.user.username &&
                            <>
                                <div className="border-b-2 border-black flex mb-3">
                                    <div className="font-black text-blue-400">{message.user.username}</div>
                                    <button onClick={() => deleteMessage(message.id)} className="hover:bg-gray-300 font-black ml-auto mr-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                    </button>
                                </div>
                                <div className="break-words">{message.message}</div>
                            </>
                            }

                            {user.username !== message.user.username &&
                            <>
                                <div className="font-black border-b-2 border-black flex mb-3">{message.user.username}</div>
                                <div className="break-words">{message.message}</div>
                            </>
                            }
                        </div>
                    ))}
                </div>

                <form className="flex" onSubmit={(e) => postMessage(e, id)}>
                    <input onChange={e => setMessage(e.target.value)} value={message} placeholder={`Chat Nr. ${id}`} className="flex-grow border-2 border-black p-2 focus:outline-none focus:bg-gray-300"/>
                    <button type="submit" className="border-2 border-black p-3 hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                    </button>
                </form>
                
            </div>
        }

            <dialog open={open} onClose={() => setOpen(false)} className="top-0 bottom-0 left-0 right-0 border-2 border-black p-5 text-3xl ">
                <p>Delete Chat?</p>
                <button onClick={() => {setOpen(false); deleteChat(id)}} className="p-2 hover:bg-gray-300 font-black">Yes</button>
                <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-300 font-black">No</button>
            </dialog>
        </>
    )
};