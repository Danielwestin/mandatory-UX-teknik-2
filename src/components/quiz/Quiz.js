import React, { useEffect, useReducer, useRef } from 'react';
import {
	initialState,
	reducer,
	setQuestion,
	setScore,
	setTrappedQuestionIndex
} from './reducer';
import { fetch } from '../Utilities/import';
import QuizQuestion from './QuizQuestion';
import { showQuestion } from '../Utilities/animation';
import QuizComplete from './QuizComplete';
import Loading from '../loading/Loading';

export default function Quiz() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const quizQuestionRef = useRef(null);

	useEffect(() => {
		fetch().then((questions) => dispatch(setQuestion(questions)));
	}, []);

	useEffect(
		() => {
			showQuestion(quizQuestionRef.current, state.questionIndex - 1, () =>
				dispatch(setTrappedQuestionIndex())
			);
		},
		[ state.questionIndex ]
	);

	return (
		<main className="Quiz">
			{state.loading ? (
				<Loading />
			) : (
				<div className="Quiz__wrapper">
					<section className="Quiz__section" ref={quizQuestionRef}>
						{state.questions.map((question, index) => (
							<QuizQuestion
								disabled={
									state.questionIndex === index ? false : true
								}
								setScore={(score) => {
									dispatch(setScore(score));
								}}
								key={question.question}
								question={question}
							/>
						))}
						{state.gameOver && (
							<QuizComplete
								score={state.score}
								questions={state.questions}
							/>
						)}
					</section>
				</div>
			)}
		</main>
	);
}
