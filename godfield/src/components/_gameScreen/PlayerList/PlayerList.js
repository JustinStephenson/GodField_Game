import React, { useEffect, useState } from 'react';
import './PlayerList.scss';

export const PlayerList = () => {
	let [players, setPlayers] = useState(Array(6).fill(null));

	useEffect(() => {
		// TODO: fill players, with actual players from props?
		// Testing purposes
		let array = [];
		for (let i = 0; i < 6; i++) {
			array.push('Player');
		}
		setPlayers(array);
	}, []);

	const displayPlayers = () => {
		let i = 0;
		return players.map((player) => {
			return (
				<button className="btn-players" key={i}>
					<div className="btn-players__details">
						<div className="player-name">{`${player} ${++i}`}</div>
						<div className="player-stats">Stats</div>
					</div>
				</button>
			);
		});
	};

	return <React.Fragment>{displayPlayers()}</React.Fragment>;
};
