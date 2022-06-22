import React, { useState, useEffect, useRef } from "react";
import "./PlayArea.scss";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../Socket/socket";
import { cardUnselectAll } from "../../../actions";

export const PlayArea = () => {
    const cardStatus = useSelector((state) => state.cardReducer.cardStatus);
    const currentUser = useSelector((state) => state.playerReducer.currentUser);
    const onlinePlayer = useSelector((state) => state.playerReducer.online);

    const [cardChoosen, setCardChoosen] = useState([]);
    const [attackCard, setAttackCard] = useState([]);

    const [attacker, setAttacker] = useState("");
    const [defender, setDefender] = useState("");

    const [attackClick, setAttackClick] = useState(false);
    const [defendClick, setDefendClick] = useState(false);

    const [attackRound, setAttackRound] = useState(false);
    const [defendRound, setDefendRound] = useState(false);

    // Choose Player to attack
    const playerSelection = useSelector(
        (state) => state.playerReducer.selection
    );

    const dispatch = useDispatch();

    useEffect(() => {
        socket.emit("attackerChooseCard", {
            userId: currentUser,
            cards: cardStatus,
        });

        socket.on("cardChooseByAttacker", (data) => {
            if (data.userId === currentUser) {
                setAttacker(data.userId);
            } else {
                setAttackCard(data.cards);
                setAttacker(data.userId);
                if (!attackRound) {
                    setAttackRound(true);
                }
            }
        });

        dispatch(cardUnselectAll());
    }, [attackClick]);

    useEffect(() => {
        socket.emit("defenderChooseCard", {
            userId: currentUser,
            cards: cardChoosen,
        });

        socket.on("cardChooseByDefender", (data) => {
            if (data.userId === currentUser) {
                setDefender(data.userId);
            } else {
                setCardChoosen(data.cards);
                setDefender(data.userId);
            }
        });

        setDefendClick(false);
    }, [defendClick]);

    const sendAttackCards = () => {
        setAttackClick(true);
        setAttackRound(true);
    };

    const sendDefendCards = () => {
        setDefendClick(true);
        setDefendRound(true);
    };

    const showAttack = () => {
        if (attackRound) {
            return (
                <div className="attackAreaAfter">
                    {attacker}
                    {attackCard.map((card) => (
                        <div className="cardDisplay" key={card.cardId}>
                            {card.cardId}
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="attackAreaBefore" onClick={sendAttackCards}>
                    {attacker}

                    {cardStatus.map((card) => (
                        <div className="cardDisplay" key={card.cardId}>
                            {card.cardId}
                        </div>
                    ))}
                </div>
            );
        }
    };

    const showDefend = () => {
        if (!attackRound && !defendRound) {
            return (
                <div>
                    {playerSelection[0]?.userId}
                    Defending
                </div>
            );
        } else if (attackRound && !defendRound) {
            return (
                <>
                    <div>
                        {playerSelection[0]?.userId}
                        Defending
                    </div>
                </>
            );
        }
    };

    // console.log(cardStatus);

    // TODO
    // MAKE SURE THAT THE DEFEND CARD CHOOSER CAN POPULATE THROUGH SOCKET
    // OH, PROBABLY, USE REDUX TO TELL THE CARD AREA THAT IF THEY ARE SENDING TO
    // ATTACK OR DEFEND BASED ON THE CLICK ON THE ATTACK AREA
    // SO IF THE ATTACKER ATTACK, ONE VAR CHANGES, SO NOW, THE CARDS ARE GOING FOR
    // DEFENDER

    return (
        <>
            {showAttack()}
            {showDefend()}
        </>
    );
};
