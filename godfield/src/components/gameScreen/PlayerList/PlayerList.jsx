import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PlayerList.scss";
import { PlayerListShow } from "./PlayerListShow/PlayerListShow";

export const PlayerList = () => {
    const onlinePlayer = useSelector((state) => state.playerReducer.online);

    return (
        <div className="playerArea">
            {onlinePlayer?.map((p) => (
                <PlayerListShow userId={p.userId} key={p.userId} />
            ))}
        </div>
    );
};
