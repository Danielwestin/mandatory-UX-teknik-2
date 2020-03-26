import React, { useEffect, useState } from 'react';

import { fetch } from '../Utilities/import';
import QuizQuestion from './QuizQuestion';

export default function Quiz() {
	const [ triviaResponse, setTriviaResponse ] = useState([]);
	let questionIndex = 0;

	useEffect(() => {
		fetch().then(setTriviaResponse);
	}, []);

	return (
		<main className="quizScreen">
			<h1>MAIN</h1>

			<div className="question">
				{triviaResponse.map((question) => (
					<QuizQuestion key={question.question} question={question} />
				))}
			</div>

			<div className="answers">
				<ul />
			</div>
		</main>
	);
}
