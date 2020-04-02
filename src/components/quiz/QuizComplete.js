import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { throwCompleteCard } from '../Utilities/animation';

export default function QuizComplete({ score, questions }) {
	const [ redirect, setRedirect ] = useState(false);
	const quizCompleteRef = useRef(null);
	return (
		<React.Fragment>
			{redirect && <Redirect to="/" />}
			<section className="QuizComplete" ref={quizCompleteRef}>
				<h1>Congratulations!</h1>
				<p>
					You answered {score}/{questions.length} questions correct!
				</p>

				<button
					className="QuizComplete__button"
					onClick={() => {
						throwCompleteCard(quizCompleteRef.current, () =>
							setRedirect(true)
						);
					}}
				>
					Close
				</button>
			</section>
		</React.Fragment>
	);
}
