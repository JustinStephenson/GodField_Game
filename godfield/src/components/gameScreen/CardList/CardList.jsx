import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CardList.scss";
import { io } from "socket.io-client";
import { cardSelectedRedux, cardUnselectedRedux } from "../../../actions";

export const CardList = () => {
    const [cardList, setCardList] = useState([]);

    const socket = useRef();

    const cardId = useSelector((state) => state.cardReducer.cardId);
    const cardSelected = useSelector((state) => state.cardReducer.selected);
    const dispatch = useDispatch();

    const [cardSelect, setCardSelect] = useState(cardSelected);

    useEffect(() => {
        socket.current = io("ws://localhost:8888");

        socket.current.emit("getInitialCards", {
            numCards: 16,
            min: 1,
            max: 10,
        });

        socket.current.on("initialCards", (data) => {
            setCardList(data.cardList);
        });
    }, []);

    const cardSelection = (cardId) => {
        if (cardSelect) {
            setCardSelect(!cardSelect);
            dispatch(cardUnselectedRedux(cardId));
        } else {
            setCardSelect(!cardSelect);
            dispatch(cardSelectedRedux(cardId));
        }
    };

    return (
        <div className="cardArea">
            {cardList.map((c) => (
                <div
                    className="cardArea__card"
                    onClick={() => cardSelection(c.cardId)}
                    key={c.cardId}
                >
                    {c.cardId}
                </div>
            ))}
        </div>
    );
};
