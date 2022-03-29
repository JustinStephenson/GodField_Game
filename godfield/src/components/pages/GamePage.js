import React from "react";
import Card from "./game_widgets/Card";
import Interactive_Area from "./game_widgets/Interactive_Area";
import Player from "./game_widgets/Player";

const GamePage = () => {
	return (
		<div>
			<Card />
			<Interactive_Area />
			<Player />
		</div>
	);
};

export default GamePage;
