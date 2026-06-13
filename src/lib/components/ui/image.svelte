<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	interface Props {
		src: string;
		alt?: string;
		class?: string;

		// behavior
		parallax?: boolean;
		parallaxSpeed?: number;

		// styles
		objectFit?: 'cover' | 'contain' | 'fill';
		loading?: 'lazy' | 'eager';

		// animation
		reveal?: boolean;
	}

	let {
		src,
		alt = '',
		class: className = '',
		parallax = false,
		parallaxSpeed = 0.15,
		objectFit = 'cover',
		loading = 'lazy',
		reveal = true
	}: Props = $props();

	let container: HTMLDivElement;
	let image: HTMLImageElement;

	onMount(() => {
		if (!image) return;

		let scrollTriggers: Array<{ kill: () => void }> = [];

		if (reveal) {
			gsap.set(image, {
				scale: 1.08,
				opacity: 0
			});

			gsap.to(image, {
				scale: 1,
				opacity: 1,
				duration: 1.2,
				ease: 'power3.out'
			});
		}

		if (parallax) {
			import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
				gsap.registerPlugin(ScrollTrigger);

				gsap.to(image, {
					yPercent: parallaxSpeed * -100,
					ease: 'none',
					scrollTrigger: {
						trigger: container,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true
					}
				});

				scrollTriggers = ScrollTrigger.getAll() as Array<{ kill: () => void }>;
			});
		}

		return () => {
			scrollTriggers.forEach((t) => t.kill());
		};
	});
</script>

<div bind:this={container} class={`relative overflow-hidden ${className}`}>
	<img bind:this={image} {src} {alt} {loading} class={`w-full h-full object-${objectFit}`} />
</div>
