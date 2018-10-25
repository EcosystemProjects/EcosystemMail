import React from 'react';
import './dist/css/roller.css';

export default () => {
	return (
		<div className="lds-roller">
			<div className="blue"></div>
			<div className="blue"></div>
			<div className="yellow"></div>
			<div className="yellow"></div>
			<div className="red"></div>
			<div className="red"></div>
			<div className="green"></div>
			<div className="green"></div>
		</div>
	);
}