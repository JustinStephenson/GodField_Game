import React from "react";
import "./Footer.scss";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const Footer = () => {
    const [newMessage, setNewMessage] = useState("");
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8888");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.current.emit("sendMessage", newMessage);

        setNewMessage("");
    };

    return (
        <div className="footer">
            <div className="footer__name">Name</div>
            <div className="footer__chatBox">
                <textarea
                    className="footer__chatBoxInput"
                    onChange={(e) => {
                        setNewMessage(e.target.value);
                    }}
                    value={newMessage}
                ></textarea>
                <button className="footer__submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <div className="footer__volume">Volume</div>
        </div>
    );
};
