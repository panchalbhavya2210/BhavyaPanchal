<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	import posthog from 'posthog-js';
	import type gsap from 'gsap';
	import Lenis from 'lenis';
	import './layout.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { site, allSchemas } from '$lib/seo';

	let { children } = $props();

	let mainEl = $state<HTMLElement>();
	let curtainEl = $state<HTMLDivElement>();
	let phraseEl = $state<HTMLDivElement>();
	let lenis = $state<Lenis>();
	let gsapMod = $state<typeof gsap>();
	let transitioning = $state(false);
	let currentPhrase = $state('');

	const phrases = [
		'Good design is as little design as possible.',
		'Details make the difference.',
		'Code is poetry in motion.',
		'Less, but better.',
		'Every pixel tells a story.',
		'Build for the user, not the spec.',
		'Clean code, clear mind.',
		'The web is what you make of it.',
		'Form follows function.',
		'Ship fast, ship often.',
		'Design is thinking made visual.',
		'Perfection is achieved when there is nothing left to take away.',
		'Make it work, make it right, make it fast.',
		'Great interfaces speak without words.',
		'Craft over convenience.',
		'Speed is a feature.',
		'Constraints breed creativity.',
		'Simple is hard.',
		'Accessibility is not an afterthought.',
		'First impressions are interfaces.'
	];

	function pickPhrase() {
		const next = phrases[Math.floor(Math.random() * phrases.length)];
		currentPhrase = next === currentPhrase ? phrases[(phrases.indexOf(next) + 1) % phrases.length] : next;
	}

	onMount(async () => {
		lenis = new Lenis({ autoRaf: true });
		gsapMod = (await import('gsap')).default;
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsapMod.registerPlugin(ScrollTrigger);
		lenis.on('scroll', ScrollTrigger.update);
		gsapMod.ticker.add((time) => lenis!.raf(time * 1000));
		gsapMod.ticker.lagSmoothing(0);
	});

	const schemas = allSchemas();

	beforeNavigate(({ cancel, to }) => {
		if (!to || transitioning) return;
		if (to.url.pathname + to.url.search + to.url.hash === window.location.pathname + window.location.search + window.location.hash) return;
		cancel();

		transitioning = true;
		lenis?.stop();
		pickPhrase();

		if (!gsapMod || !curtainEl || !phraseEl) {
			goto(to.url);
			transitioning = false;
			lenis?.start();
			return;
		}

		const tl = gsapMod.timeline();

		// Phase 1: curtain down + page recedes
		tl.set(curtainEl, { scaleY: 0, transformOrigin: 'top' })
			.set(phraseEl, { opacity: 0, y: 20 })
			.to(curtainEl, {
				scaleY: 1,
				duration: 0.5,
				ease: 'expo.inOut'
			})
			.to(
				mainEl!,
				{
					scale: 0.97,
					opacity: 0.3,
					filter: 'blur(6px)',
					duration: 0.4,
					ease: 'power3.in'
				},
				0
			)
			// Phase 2: phrase fades in on the curtain
			.to(phraseEl, {
				opacity: 1,
				y: 0,
				duration: 0.35,
				ease: 'power2.out'
			})
			// Phase 3: hold briefly, then navigate
			.to(phraseEl, {
				opacity: 1,
				duration: 0.3
			})
			.call(() => goto(to.url));
	});

	afterNavigate(() => {
		posthog.capture('$pageview');
		window.scrollTo(0, 0);
		lenis?.start();

		if (!gsapMod || !curtainEl || !phraseEl || !mainEl) {
			transitioning = false;
			return;
		}

		gsapMod.set(mainEl, { scale: 1, opacity: 1, filter: 'none' });

		// Phase 4: phrase fades out, then curtain up
		gsapMod
			.timeline({
				onComplete: () => {
					transitioning = false;
				}
			})
			.to(phraseEl, {
				opacity: 0,
				y: -12,
				duration: 0.25,
				ease: 'power2.in'
			})
			.to(curtainEl, {
				scaleY: 0,
				transformOrigin: 'bottom',
				duration: 0.55,
				ease: 'expo.inOut'
			}, '-=0.1');
	});
</script>

<svelte:head>
	<meta name="author" content={site.author} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
</svelte:head>

<JsonLd {schemas} />

<div
	bind:this={curtainEl}
	class="fixed inset-0 z-[9999] bg-primary pointer-events-none flex items-center justify-center overflow-hidden"
	style="transform:scaleY(0);transform-origin:top;"
>
	<div
		bind:this={phraseEl}
		class="max-w-md px-8 text-center font-heading text-2xl md:text-3xl font-medium leading-snug text-primary-foreground opacity-0"
	>
		{currentPhrase}
	</div>
</div>

<Header />
<main bind:this={mainEl}>
	{@render children()}
</main>
<Footer />
