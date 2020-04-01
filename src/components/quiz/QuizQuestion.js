import React, { useState } from 'react';
import QuizAnswer from './QuizAnswer';

export default function QuizQuestion({ question, setScore, disabled }) {
	const [ choice, setChoice ] = useState(null);

	function submit() {
		let score;
		if (choice !== question.correct_answer || !choice) {
			score = 0;
		} else {
			score = 1;
		}
		setScore(score);
	}

	return (
		<section className="QuizQuestion">
			<h3>{question.question}</h3>

			<form onSubmit={(e) => e.preventDefault()}>
				<ul>
					{question.answers.map((answer) => (
						<QuizAnswer
							setChoice={setChoice}
							checked={choice === answer && true}
							key={answer}
							answer={answer}
							name={question.question}
							disabled={disabled}
						/>
					))}
				</ul>
				<button
					className="QuizQuestion__button"
					type="submit"
					onClick={() => submit()}
					disabled={disabled}
				>
					Next
				</button>
			</form>
		</section>
	);
}
