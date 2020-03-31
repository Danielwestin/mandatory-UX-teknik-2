import React from 'react';

export default function QuizAnswer({
	answer,
	name,
	checked,
	setChoice,
	disabled
}) {
	return (
		<li>
			<label htmlFor={answer}>
				<input
					id={answer}
					type="radio"
					name={name}
					checked={checked || false}
					onChange={() => setChoice(answer)}
					disabled={disabled}
				/>
				{answer}
			</label>
		</li>
	);
}
