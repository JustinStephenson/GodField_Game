import React from 'react';
import { PlayArea } from '../PlayArea/PlayArea';
import { PlayerList } from '../PlayerList/PlayerList';
import { CardList } from '../CardList/CardList';
import { InfoArea } from '../InfoArea/InfoArea';
import './GameContent.scss';

export const GameContent = () => {
	return (
		<div className="content">
			<div className="content__play-area">
				<PlayArea />
			</div>
			<div className="content__player-area">
				<PlayerList />
			</div>
			<div className="content__card-area">
				<CardList />
			</div>
			<div className="content__info-area">
				<InfoArea />
			</div>
		</div>
	);
};
