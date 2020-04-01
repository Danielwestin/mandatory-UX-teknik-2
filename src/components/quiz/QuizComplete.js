import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { throwCompleteCard } from '../Utilities/animation';

export default function QuizComplete({ score, questions }) {
	const quizCompleteRef = useRef(null);
	return (
		<section className="QuizComplete" ref={quizCompleteRef}>
			<h1>sup</h1>
			<p>
				{score}/{questions.length}
			</p>
			<Link to="/">
				<button
					className="QuizComplete__button"
					onClick={() => {
						throwCompleteCard(quizCompleteRef.current);
					}}
				>
					Close
				</button>
			</Link>
		</section>
	);
}
