import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CardList.scss";
import { socket } from "../../Socket/socket";
import { cardSelectedRedux, cardUnselectedRedux } from "../../../actions";

export const CardList = () => {
    const [cardList, setCardList] = useState([]);

    const currentUser = useSelector((state) => state.playerReducer.currentUser);
    const cardStatus = useSelector((state) => state.cardReducer.cardStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.emit("getInitialCards", {
            currentUser: currentUser,
            numCards: 16,
            min: 1,
            max: 10,
        });

        socket.on("initialCards", (data) => {
            setCardList(data.cardList);
        });
    }, [currentUser]);

    const cardSelection = (cardId) => {
        if (!cardStatus.some((c) => c.cardId === cardId && c.selected)) {
            dispatch(cardSelectedRedux(cardId));
        } else {
            dispatch(cardUnselectedRedux(cardId));
        }
    };

    return (
        <div className="cardArea">
            {cardList.map((c) => (
                <div
                    className={
                        cardStatus.some(
                            (card) => card.cardId === c.cardId && card.selected
                        )
                            ? "cardArea__cardChoosen"
                            : "cardArea__card"
                    }
                    onClick={() => cardSelection(c.cardId)}
                    key={c.cardId}
                >
                    {c.cardId}
                </div>
            ))}
        </div>
    );
};
