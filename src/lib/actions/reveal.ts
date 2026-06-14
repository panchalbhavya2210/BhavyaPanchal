import { browser } from '$app/environment';

export function reveal(node: HTMLElement, delay = 0) {
	if (!browser) return { destroy() {} };

	let killed = false;
	let cleanup: (() => void) | null = null;

	(async () => {
		const [gsapMod, stMod] = await Promise.all([
			import('gsap'),
			import('gsap/ScrollTrigger')
		]);
		const gsap = gsapMod.default;
		const { ScrollTrigger } = stMod;
		gsap.registerPlugin(ScrollTrigger);

		if (killed) return;

		gsap.set(node, { y: 28, opacity: 0 });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: node,
				start: 'top 94%',
				once: true
			}
		});

		tl.to(node, {
			y: 0,
			opacity: 1,
			duration: 0.65,
			delay,
			ease: 'power3.out'
		});

		cleanup = () => {
			tl.kill();
			ScrollTrigger.getAll().forEach((st) => {
				if (st.vars.trigger === node) st.kill();
			});
		};
	})();

	return {
		destroy() {
			killed = true;
			cleanup?.();
		}
	};
}
