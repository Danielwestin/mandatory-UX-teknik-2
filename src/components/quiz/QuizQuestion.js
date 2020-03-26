import React from 'react';
import QuizAnswer from './QuizAnswer';

export default function QuizQuestion({ question }) {
	return (
		<div className="question">
			<h3>{question.question}</h3>
			<ul>
				{question.answers.map((answer) => (
					<QuizAnswer answer={answer} name={question.question} />
				))}
			</ul>
		</div>
	);
}
