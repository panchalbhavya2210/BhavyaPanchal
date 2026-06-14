import { browser } from '$app/environment';

export function reveal(node: HTMLElement, delay = 0) {
	if (!browser) return { destroy() {} };

	let killed = false;
	let cleanup: (() => void) | null = null;
	let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

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

		fallbackTimer = setTimeout(() => {
			if (killed) return;
			node.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			node.style.opacity = '1';
			node.style.transform = 'none';
		}, 4000);

		const st = ScrollTrigger.create({
			trigger: node,
			start: 'top 94%',
			once: true,
			onEnter: () => {
				if (fallbackTimer) clearTimeout(fallbackTimer);
				gsap.to(node, {
					y: 0,
					opacity: 1,
					duration: 0.65,
					delay,
					ease: 'power3.out'
				});
			}
		});

		cleanup = () => {
			if (fallbackTimer) clearTimeout(fallbackTimer);
			st.kill();
		};
	})();

	return {
		destroy() {
			killed = true;
			cleanup?.();
		}
	};
}
