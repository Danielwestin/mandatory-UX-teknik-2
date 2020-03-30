import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
	return (
		<React.Fragment>
			<main className="Main">
				<div className="Main__link">
					<h1>Start</h1>
					<Link to="/quiz">
						<button className="Main__button">Start Quiz</button>
					</Link>
				</div>
			</main>
		</React.Fragment>
	);
}
