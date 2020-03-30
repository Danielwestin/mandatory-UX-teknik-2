import React from 'react';

export default function QuizAnswer({ answer, name, checked, setChoice }) {
	return (
		<li>
			<label htmlFor={answer}>
				<input
					id={answer}
					type="radio"
					name={name}
					checked={checked || false}
					onChange={() => setChoice(answer)}
				/>
				{answer}
			</label>
		</li>
	);
}
