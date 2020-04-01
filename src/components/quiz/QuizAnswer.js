import React from 'react';

export default function QuizAnswer({
	answer,
	name,
	checked,
	setChoice,
	disabled
}) {
	return (
		<li className="QuizAnswer">
			<label htmlFor={answer}>
				<div className="radioButton" aria-label="Radiobutton">
					<input
						id={answer}
						type="radio"
						name={name}
						checked={checked || false}
						onChange={() => setChoice(answer)}
						disabled={disabled}
					/>
					<div className="radioButton__fake" />
				</div>
				{answer}
			</label>
		</li>
	);
}
