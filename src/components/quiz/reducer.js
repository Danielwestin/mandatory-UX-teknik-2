export const setQuestion = (questions) => ({
	type: 'questions',
	payload: questions
});

export const setScore = (score) => ({
	type: 'score',
	payload: score
});

export const setquestionIndex = (index) => ({
	type: 'questionIndex',
	payload: index
});

export const setTrappedQuestionIndex = () => ({
	type: 'trappedQuestionIndex'
});

export const initialState = {
	questions: [],
	score: 0,
	questionIndex: 0,
	trappedQuestion: 0
};

export function reducer(state, action) {
	switch (action.type) {
		case 'questions':
			return { ...state, questions: action.payload };
		case 'score':
			return {
				...state,
				score: state.score + action.payload,
				questionIndex: state.questionIndex + 1
			};
		case 'trappedQuestionIndex':
			console.log('hello');

			return { ...state, trappedQuestion: state.questionIndex };

		default:
			throw new Error('bruh');
	}
}
