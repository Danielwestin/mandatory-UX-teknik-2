import React from 'react';

export default function QuizAnswer({ answer, name }) {
	return (
		<li>
			<input type="radio" name={name} />
			{answer}
		</li>
	);
}
