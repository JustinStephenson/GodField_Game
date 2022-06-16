import React, { useState, useEffect, useRef } from "react";
import "./PlayerListShow.scss";
import { useSelector, useDispatch } from "react-redux";
import { playerSelected, playerUnselected } from "../../../../actions";
import { io } from "socket.io-client";

export const PlayerListShow = ({ userId }) => {
    const playerSelection = useSelector(
        (state) => state.playerReducer.selected
    );

    const playerSelectionUserId = useSelector(
        (state) => state.playerReducer.userId
    );

    const dispatch = useDispatch();
    const socket = useRef();

    const [selected, setSelected] = useState(playerSelection);

    useEffect(() => {
        socket.current = io("ws://localhost:8888");
    }, []);

    const clickPlayer = () => {
        if (selected) {
            setSelected(!selected);
            dispatch(playerUnselected(userId));
        } else {
            setSelected(!selected);
            dispatch(playerSelected(userId));
        }
    };

    useEffect(() => {
        socket.current.emit("playerSelection", { selection: selected, userId });
        socket.current.on("getPlayerSelection", (data) => {
            //console.log(data.selection, data.userId);
        });
    }, [selected]);

    return (
        <div className="playerAreaList" onClick={clickPlayer}>
            <div className="playerAreaList__name">{userId}</div>
            <div className="playerAreaList__stats">Stats</div>
        </div>
    );
};
