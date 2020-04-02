import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bringMainButton } from '../Utilities/animation';

export default function Main() {
	useEffect(() => {
		bringMainButton();
	}, []);

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
