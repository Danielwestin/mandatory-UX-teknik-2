import React, { useState } from 'react';
import QuizAnswer from './QuizAnswer';
import FocusTrap from 'focus-trap-react';

export default function QuizQuestion({ question, setScore, active }) {
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
		<div className="QuizQuestion">
			<h3>{question.question}</h3>
			<FocusTrap active={active}>
				<form onSubmit={(e) => e.preventDefault()}>
					<ul>
						{question.answers.map((answer) => (
							<QuizAnswer
								setChoice={setChoice}
								checked={choice === answer && true}
								key={answer}
								answer={answer}
								name={question.question}
							/>
						))}
					</ul>
					<button type="submit" onClick={() => submit()}>
						Next
					</button>
				</form>
			</FocusTrap>
		</div>
	);
}
