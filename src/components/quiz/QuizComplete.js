import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { throwCompleteCard } from '../Utilities/animation';

export default function QuizComplete({ score, questions }) {
	const quizCompleteRef = useRef(null);
	return (
		<section className="QuizComplete" ref={quizCompleteRef}>
			<h1>Congratulations!</h1>
			<p>
				You answered {score}/{questions.length} questions correct!
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
