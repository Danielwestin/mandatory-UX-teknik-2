import React, { useState, useEffect } from 'react';
window.localStorage.removeItem('stats');

const initialState = {
	gamesPlayed: 0,
	average: 0,
	correct: 0,
	incorrect: 0
};

export default function Stats() {
	const [ stats, setStats ] = useState(initialState);

	function getStats() {
		let storedStats = window.localStorage.getItem('stats');

		return JSON.parse(storedStats);
	}

	function resetStats() {
		window.localStorage.removeItem('stats');
		setStats(initialState);
	}

	useEffect(() => {
		const stats = getStats();
		if (stats) {
			setStats(stats);
		}
	}, []);

	return (
		<React.Fragment>
			<main className="Stats">
				<h1>STATS</h1>

				<p>Correct answers: {stats.correct}</p>
				<p>Incorrect answers: {stats.incorrect}</p>
				<p>Your Average: {stats.average}%</p>
				<p>Games Played: {stats.gamesPlayed}</p>
				<button
					className="Stats__button"
					onClick={() => {
						resetStats();
					}}
				>
					Reset Stats
				</button>
			</main>
		</React.Fragment>
	);
}
