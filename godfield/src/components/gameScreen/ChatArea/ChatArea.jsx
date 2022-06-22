import React from "react";
import { useEffect, useState } from "react";
import { socket } from "../../Socket/socket";

export const ChatArea = () => {
    const [receivedMessage, setReceivedMessage] = useState("");

    useEffect(() => {
        socket.on("getMessage", (data) => {
            setReceivedMessage(data.message);
        });
    }, []);

    return <div>{receivedMessage}</div>;
};
