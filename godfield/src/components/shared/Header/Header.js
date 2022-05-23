import React from 'react';
import './Header.css';

export const Header = () => {
	return (
		<div className="header">
			<div className="header__left-side">
				<div className="header__left-side-btn">
					<button className="btn-primary">&#8592;</button>
				</div>
				<span className="header__left-side-text">Room</span>
			</div>

			<div className="header__text-area">
				<span className="header__text">Game</span>
			</div>

			<div className="header__right-btn">
				<button className="btn-primary">Bible</button>
			</div>
		</div>
	);
};
