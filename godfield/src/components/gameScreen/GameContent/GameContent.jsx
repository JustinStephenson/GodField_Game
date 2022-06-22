import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayArea } from "../PlayArea/PlayArea";
import { PlayerList } from "../PlayerList/PlayerList";
import { CardList } from "../CardList/CardList";
import { InfoArea } from "../InfoArea/InfoArea";

import "./GameContent.scss";
import { socket } from "../../Socket/socket";

import { addPlayer, removePlayer, addCurrentUser } from "../../../actions";

export const GameContent = () => {
    const [people, setPeople] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const userNum = Math.floor(Math.random() * 100000);

        socket.emit("addUser", userNum);
        dispatch(addCurrentUser(userNum));

        socket.on("getUsers", (data) => {
            setPeople(data);
            dispatch(addPlayer(data));
        });

        socket.on("userDisconnect", (data) => {
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
