import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import { useSelector } from "react-redux";

export const PlayArea = () => {
    const cardId = useSelector((state) => state.cardReducer.cardId);
    const cardSelected = useSelector((state) => state.cardReducer.selected);

    const [cardChoosen, setCardChoosen] = useState([]);

    useEffect(() => {
        if (cardId === "") {
            return;
        } else if (!cardChoosen.some((card) => card.cardId === cardId)) {
            setCardChoosen((cardChoosen) => [
                ...cardChoosen,
                {
                    cardId: cardId,
                    selected: cardSelected,
                },
            ]);
        } else {
            setCardChoosen(
                cardChoosen.filter((card) => card.cardId !== cardId)
            );
        }
    }, [cardSelected]);

    return (
        <>
            <div>
                Attacking
                {cardChoosen.map((card) => (
                    <div className="cardDisplay" key={card.cardId}>
                        {card.cardId}
                    </div>
                ))}
            </div>
            <div>Defending</div>
        </>
    );
};
