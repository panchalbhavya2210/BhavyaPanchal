import { browser } from '$app/environment';
import type gsapType from 'gsap';
import type { ScrollTrigger as STType } from 'gsap/ScrollTrigger';

let gsap: typeof gsapType | null = null;
let ScrollTrigger: typeof STType | null = null;
let loading: Promise<void> | null = null;

export async function loadGsap() {
	if (!browser) return null;
	if (gsap && ScrollTrigger) return { gsap, ScrollTrigger };
	if (loading) {
		await loading;
		return { gsap: gsap!, ScrollTrigger: ScrollTrigger! };
	}

	loading = (async () => {
		const [gsapMod, stMod] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
		gsap = gsapMod.default;
		ScrollTrigger = stMod.ScrollTrigger;
		gsap.registerPlugin(ScrollTrigger);
	})();

	await loading;
	return { gsap: gsap!, ScrollTrigger: ScrollTrigger! };
}
