import React from "react";
import "./Footer.scss";
import { useState } from "react";
import { socket } from "../../Socket/socket";

export const Footer = () => {
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit("sendMessage", newMessage);

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
