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
	console.log(state.questionIndex, state.trappedQuestion);

	return (
		<main className="Quiz">
			<div className="Quiz__wrapper">
				<section className="Quiz__section" ref={quizQuestionRef}>
					{state.questions.map((question, index) => (
						<QuizQuestion
							active={
								state.questionIndex === index ? true : false
							}
							setScore={(score) => {
								dispatch(setScore(score));
							}}
							key={question.question}
							question={question}
						/>
					))}
				</section>
			</div>
		</main>
	);
}
