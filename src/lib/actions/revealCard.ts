import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function revealCard(node: HTMLElement, index = 0) {
	gsap.set(node, { y: 60, opacity: 0, scale: 0.94 });

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 'top 92%',
			once: true
		}
	});

	tl.to(node, {
		y: 0,
		scale: 1,
		opacity: 1,
		duration: 0.85,
		delay: index * 0.12,
		ease: 'power3.out'
	});

	return {
		destroy() {
			tl.kill();
			ScrollTrigger.getAll().forEach((st) => {
				if (st.vars.trigger === node) st.kill();
			});
		}
	};
}
