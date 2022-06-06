import React from 'react';
import { Header } from '../shared/Header/Header';
import { Footer } from '../shared/Footer/Footer';
import './ActionArea.scss';

export const ActionArea = () => {
	return (
		<div className="action-area">
			<Header />
			<Footer />
		</div>
	);
};
