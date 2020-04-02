import axios from 'axios';

export function fetch() {
	return axios
		.get(
			'https://opentdb.com/api.php?amount=10&category=28&difficulty=medium&type=multiple'
		)
		.then((response) => {
			return format(response.data.results);
		});
}

function format(questions) {
	return questions.map((question) => ({
		...question,
		question: formatString(question.question),
		correct_answer: formatString(question.correct_answer),
		answers: shuffle(
			question.incorrect_answers.concat(question.correct_answer)
		)
	}));
}

function shuffle(a) {
	a = a.map((b) => formatString(b));
	let j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

export const entities = {
	'&#039;': "'",
	'&quot;': '"',
	'&ldquo;': '“',
	'&rdquo;': '”',
	'&ntilde;': 'ñ',
	'&eacute;': 'é',
	'&amp;': '&',
	'&uuml;': 'ü'
};
function formatString(string) {
	return string.replace(/&#?\w+;/g, (match) => entities[match]);
}
