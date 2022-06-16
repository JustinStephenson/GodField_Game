import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayArea } from "../PlayArea/PlayArea";
import { PlayerList } from "../PlayerList/PlayerList";
import { CardList } from "../CardList/CardList";
import { InfoArea } from "../InfoArea/InfoArea";

import "./GameContent.scss";
import { io } from "socket.io-client";

import { addPlayer, removePlayer } from "../../../actions";

export const GameContent = () => {
    const [people, setPeople] = useState([]);
    const socket = useRef();

    const onlinePlayer = useSelector((state) => state.playerReducer.online);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.current = io("ws://localhost:8888");

        const userNum = Math.floor(Math.random() * 100000);
        socket.current.emit("addUser", userNum);
        socket.current.on("getUsers", (data) => {
            setPeople(data);
            dispatch(addPlayer(data));
        });
        socket.current.on("userDisconnect", (data) => {
            setPeople(data);
            dispatch(removePlayer(data));
        });
    }, []);

    return (
        <div className="content">
            <div className="content__play-area">
                <PlayArea />
            </div>
            <div className="content__player-area">
                <PlayerList />
            </div>
            <div className="content__card-area">
                <CardList />
            </div>
            <div className="content__info-area">
                <InfoArea />
            </div>
        </div>
    );
};
