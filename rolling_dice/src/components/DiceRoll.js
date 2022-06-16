import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import "../css/App.css";

const App = () => {
    const [state, setState] = useState({ diceNumber: 0, name: "" });
    const [roll, setRoll] = useState([]);

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect("http://localhost:4000");

        socketRef.current.on("dice", ({ name, diceNumber }) => {
            setRoll([...roll, { name, diceNumber }]);
        });

        return () => socketRef.current.disconnect();
    }, [roll]);

    const RandomizeInt = (max) => {
        return Math.ceil(Math.random() * max);
    };

    const Roll = (e) => {
        setState({ ...state, [e.target.name]: RandomizeInt(6) });
    };

    const onTextChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onMessageSubmit = (e) => {
        const { name, diceNumber } = state;
        socketRef.current.emit("dice", { name, diceNumber });
        e.preventDefault();
        setState({ name, diceNumber });
    };

    const renderResult = () => {
        return roll.map(({ name, diceNumber }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{diceNumber}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div className="card">
            <form onSubmit={onMessageSubmit}>
                <h1>Dice Rolling</h1>
                <div className="name-field">
                    <TextField
                        name="name"
                        onChange={(e) => onTextChange(e)}
                        value={state.name}
                        label="Name"
                    />
                </div>
                <div>{state.diceNumber}</div>
                <button onClick={(e) => Roll(e)} name="diceNumber">
                    Roll the dice
                </button>
            </form>
            <div className="render-chat">
                <h1>Dice Result</h1>
                {renderResult()}
            </div>
        </div>
    );
};

export default App;
