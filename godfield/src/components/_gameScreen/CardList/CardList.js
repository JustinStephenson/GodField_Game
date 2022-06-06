import React, { useEffect, useState } from 'react';
import './CardList.scss';

export const CardList = () => {
	let [cards, setCards] = useState(Array(18).fill(null));

	useEffect(() => {
		// TODO: fill cards, with actual cards from props?
		// Testing purposes
		let array = [];
		for (let i = 0; i < 18; i++) {
			array.push('Card');
		}
		setCards(array);
	}, []);

	const displayCards = () => {
		let i = 0;
		return cards.map((card) => {
			return <button className="btn-cards" key={i}>{`${card} ${++i}`}</button>;
		});
	};

	return <React.Fragment>{displayCards()}</React.Fragment>;
};
