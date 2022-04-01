import React, { useState } from "react";

const RollDice = () => {
	const [diceNumber, setDiceNumber] = useState(0);

	const RandomizeInt = (max) => {
		return Math.ceil(Math.random() * max);
	};

	const Roll = () => {
		setDiceNumber(RandomizeInt(6));
	};

	return (
		<div>
			{diceNumber}
			<button onClick={() => Roll()}>Roll</button>
		</div>
	);
};

export default RollDice;
