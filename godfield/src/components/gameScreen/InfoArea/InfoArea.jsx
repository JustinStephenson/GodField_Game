import React from "react";
import "./InfoArea.scss";
import { useSelector } from "react-redux";

export const InfoArea = () => {
    const onlinePlayer = useSelector((state) => state.playerReducer.online);

    return (
        <div className="infoarea">
            <div className="infoarea__playerList">
                {onlinePlayer?.map((p) => (
                    <div className="infoarea__player" key={p.userId}>
                        {p.userId}
                    </div>
                ))}
            </div>
        </div>
    );
};
