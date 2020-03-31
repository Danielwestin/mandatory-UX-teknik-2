import gsap from 'gsap';

export function showQuestion(node, index, func) {
	console.log(node);

	if (!node.children.length || index >= node.children.length - 1) return;

	const children = Array.from(node.children);
	console.log(children);

	const current = children[index];
	const next = children[index + 1];
	// console.log(current, next, node);

	gsap
		.timeline()
		.to(current, {
			duration: 0.4,
			autoAlpha: 0
		})
		.from(next, {
			duration: 0.4,
			autoAlpha: 0
		})
		.to(node, {
			delay: -0.5,
			duration: 0.4,
			x: -500 * (index + 1),
			onComplete: func
		});
}

export function slideIn(node) {
	gsap.to(node, {
		duration: 0.5,
		x: 0,
		ease: 'power4.out'
	});
}
export function slideOut(node, onComplete) {
	gsap.to(node, {
		duration: 0.1,
		x: '-100%',
		ease: 'power1.out',
		onComplete
	});
}

export function throwCompleteCard(node) {
	gsap.to(node, {
		duration: 0.2,
		x: '-100%'
	});
}
