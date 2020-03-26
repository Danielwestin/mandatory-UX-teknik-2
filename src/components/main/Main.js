import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
	return (
		<React.Fragment>
			<main className="startScreen">
				<h1>Start</h1>

				<button>
					<Link to="/quiz">Start Quiz</Link>
				</button>
			</main>
		</React.Fragment>
	);
}
