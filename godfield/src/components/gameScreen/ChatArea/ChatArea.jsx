import React from "react";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

export const ChatArea = () => {
    const [receivedMessage, setReceivedMessage] = useState("");
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8888");
        socket.current.on("getMessage", (data) => {
            setReceivedMessage(data.message);
        });
    }, []);

    return <div>{receivedMessage}</div>;
};
