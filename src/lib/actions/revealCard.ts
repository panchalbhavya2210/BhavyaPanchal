import { browser } from '$app/environment';
import { loadGsap } from '$lib/gsap';

export function revealCard(node: HTMLElement, index = 0) {
	if (!browser) return { destroy() {} };

	let killed = false;
	let cleanup: (() => void) | null = null;
	let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

	(async () => {
		const result = await loadGsap();
		if (!result || killed) return;
		const { gsap, ScrollTrigger } = result;

		gsap.set(node, { y: 60, opacity: 0, scale: 0.94 });

		fallbackTimer = setTimeout(() => {
			if (killed) return;
			node.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			node.style.opacity = '1';
			node.style.transform = 'none';
		}, 4000);

		const st = ScrollTrigger.create({
			trigger: node,
			start: 'top 92%',
			once: true,
			onEnter: () => {
				if (fallbackTimer) clearTimeout(fallbackTimer);
				gsap.to(node, {
					y: 0,
					scale: 1,
					opacity: 1,
					duration: 0.85,
					delay: index * 0.12,
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
