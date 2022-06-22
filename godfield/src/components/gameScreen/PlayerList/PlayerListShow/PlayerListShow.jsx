import React, { useState, useEffect } from "react";
import "./PlayerListShow.scss";
import { useSelector, useDispatch } from "react-redux";
import { playerSelected, playerUnselected } from "../../../../actions";
import { socket } from "../../../Socket/socket";

export const PlayerListShow = ({ userId }) => {
    const playerSelection = useSelector(
        (state) => state.playerReducer.selection
    );

    const currentUser = useSelector((state) => state.playerReducer.currentUser);

    const dispatch = useDispatch();

    const clickPlayer = (id) => {
        if (playerSelection[0]?.userId === id && playerSelection[0]?.selected) {
            dispatch(playerUnselected(id));
        } else {
            dispatch(playerSelected(id));
        }
    };

    useEffect(() => {
        socket.emit("playerSelection", {
            selection: playerSelection.selected,
            userId,
        });
        socket.on("getPlayerSelection", (data) => {
            if (data.selection) {
                dispatch(playerSelected(data.userId));
            } else {
                dispatch(playerUnselected(data.userId));
            }
        });
    }, []);

    return (
        <div
            className={
                playerSelection[0]?.userId === userId &&
                playerSelection[0]?.selected
                    ? "playerAreaList choose"
                    : "playerAreaList"
            }
            onClick={() => clickPlayer(userId)}
        >
            <div
                className={
                    currentUser === userId
                        ? "playerAreaList__currentUser"
                        : "playerAreaList__name"
                }
            >
                {userId}
            </div>
            <div className="playerAreaList__stats">Stats</div>
        </div>
    );
};
