import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
	return (
		<React.Fragment>
			<main className="Main">
				<div className="Main__link">
					<Link to="/quiz">
						<button className="Main__button">Start Quiz</button>
					</Link>
				</div>
			</main>
		</React.Fragment>
	);
}
