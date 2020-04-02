import gsap from 'gsap';

export function showQuestion(node, index, func) {
	if (!node) return;
	if (!node.children.length || index >= node.children.length - 1) return;

	const children = Array.from(node.children);

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

export function throwCompleteCard(node, onComplete) {
	gsap.to(node, {
		duration: 0.8,
		x: '-110%',

		onComplete
	});
}

export function bringMainButton() {
	const mainLink = document.querySelector('.Main__link');
	gsap.from(mainLink, {
		duration: 0.5,
		y: 150,
		autoAlpha: 0
	});
}

export function loadingAnimation() {
	const balls = document.querySelectorAll('.Loading__ball');
	console.log(balls);

	gsap
		.timeline({ repeat: -1 })
		.to(balls, {
			duration: 0.05,
			ease: 'power1.out',
			scaleY: 0.75,
			stagger: 0.05
		})
		.to(balls, {
			duration: 0.4,
			scaleY: 1.1,
			ease: 'power2.out',
			y: -100,
			stagger: 0.05
		})
		.to(balls, {
			duration: 0.4,
			scaleY: 0.75,
			y: 0,
			ease: 'power2.in',
			stagger: 0.25
		})
		.to(balls, {
			duration: 0.1,
			scaleY: 1
		});
}
