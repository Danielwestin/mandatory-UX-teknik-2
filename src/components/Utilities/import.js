import axios from 'axios';

export function fetch() {
	return axios
		.get(
			'https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple'
		)
		.then((response) => {
			return format(response.data.results);
		});
}

function format(questions) {
	return questions.map((question) => ({
		...question,
		answers: shuffle(
			question.incorrect_answers.concat(question.correct_answer)
		)
	}));
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
