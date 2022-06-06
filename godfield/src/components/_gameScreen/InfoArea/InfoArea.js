import React, { useEffect, useState } from 'react';
import './InfoArea.scss';

export const InfoArea = () => {
	let [people, setPeople] = useState(Array(6).fill(null));

	useEffect(() => {
		// TODO: fill players, with actual players from props?
		// Testing purposes
		let array = [];
		for (let i = 0; i < 6; i++) {
			array.push('Person');
		}
		setPeople(array);
	}, []);

	const displayPeople = () => {
		let i = 0;
		return people.map((person) => {
			return (
				<button className="btn-people" key={i}>
					{`${person} ${++i}`}
				</button>
			);
		});
	};

	return <React.Fragment>{displayPeople()}</React.Fragment>;
};
