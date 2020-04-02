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
	trappedQuestion: 0,
	gameOver: false,
	loading: true
};

export function reducer(state, action) {
	switch (action.type) {
		case 'questions':
			return {
				...state,
				questions: action.payload,
				loading: true
			};
		case 'score':
			if (state.gameOver) return state;
			if (state.questionIndex === state.questions.length - 1) {
				storeScore(
					state.score + action.payload,
					state.questions.length
				);
				return {
					...state,
					score: state.score + action.payload,
					questionIndex: state.questionIndex + 1,
					gameOver: true
				};
			}
			return {
				...state,
				score: state.score + action.payload,
				questionIndex: state.questionIndex + 1
			};

		case 'trappedQuestionIndex':
			return { ...state, trappedQuestion: state.questionIndex };

		default:
			throw new Error('bruh');
	}
}

function storeScore(score, questions) {
	let storedStats = window.localStorage.getItem('stats');

	if (!storedStats) {
		const stats = {
			gamesPlayed: 1,
			average: score / questions * 100,
			correct: score,
			incorrect: questions - score
		};

		window.localStorage.setItem('stats', JSON.stringify(stats));
		return;
	}

	let { gamesPlayed, average, correct, incorrect } = JSON.parse(storedStats);

	correct = score + correct;
	gamesPlayed = gamesPlayed + 1;
	incorrect = questions - score + incorrect;
	average = correct / (correct + incorrect) * 100;

	const stats = {
		gamesPlayed,
		correct,
		incorrect,
		average
	};

	window.localStorage.setItem('stats', JSON.stringify(stats));
}
