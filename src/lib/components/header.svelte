<script lang="ts">
	import { onMount } from 'svelte';
	import { loadGsap } from '$lib/gsap';
	import type gsap from 'gsap';

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about-me' },
		{ label: 'Services', href: '/services' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact', href: '/contact' }
	];

	let open = $state(false);

	let menuRef: HTMLDivElement;
	let dividerRef = $state<HTMLDivElement>();

	let topLine: HTMLSpanElement;
	let middleLine: HTMLSpanElement;
	let bottomLine: HTMLSpanElement;

	let tl: gsap.core.Timeline;

	function directionalHover(node: HTMLAnchorElement) {
		const overlay = node.querySelector<HTMLDivElement>('.link-overlay')!;
		let rafId: number | null = null;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let hovering = false;

		function getDirection(e: MouseEvent) {
			const rect = node.getBoundingClientRect();
			return e.clientY - rect.top < rect.height / 2 ? 'top' : 'bottom';
		}

		function onEnter(e: MouseEvent) {
			hovering = true;
			if (rafId !== null) cancelAnimationFrame(rafId);
			const origin = getDirection(e);
			overlay.style.transformOrigin = origin;
			overlay.style.transition = 'none';
			overlay.style.transform = 'scaleY(0)';
			rafId = requestAnimationFrame(() => {
				rafId = null;
				overlay.style.transition = 'transform 500ms cubic-bezier(.22,1,.36,1)';
				overlay.style.transform = 'scaleY(1)';
			});
		}

		function onLeave(e: MouseEvent) {
			hovering = false;
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
			const origin = getDirection(e);
			overlay.style.transformOrigin = origin;
			overlay.style.transition = 'transform 500ms cubic-bezier(.22,1,.36,1)';
			overlay.style.transform = 'scaleY(0)';
		}

		node.addEventListener('mouseenter', onEnter);
		node.addEventListener('mouseleave', onLeave);

		return {
			destroy() {
				if (rafId !== null) cancelAnimationFrame(rafId);
				node.removeEventListener('mouseenter', onEnter);
				node.removeEventListener('mouseleave', onLeave);
			}
		};
	}

	function openMenu() {
		open = true;

		requestAnimationFrame(() => {
			tl.play(0);
		});
	}

	function closeMenu() {
		tl.reverse();

		tl.eventCallback('onReverseComplete', () => {
			open = false;
		});
	}

	function toggleMenu() {
		if (open) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	function handleOutsideClick(event: MouseEvent) {
		if (!open) return;

		if (!menuRef.contains(event.target as Node)) {
			closeMenu();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleOutsideClick);

		(async () => {
			const result = await loadGsap();
			if (!result) return;
			const gsap = result.gsap;

			tl = gsap.timeline({
				paused: true
			});

			tl.to(
				menuRef,
				{
					width: 380,
					height: 460,
					duration: 0.8,
					ease: 'expo.inOut'
				},
				0
			)

				.to(
					topLine,
					{
						top: '50%',
						yPercent: -50,
						rotate: 45,
						duration: 0.4,
						ease: 'power3.out'
					},
					0
				)

				.to(
					middleLine,
					{
						opacity: 0,
						duration: 0.2
					},
					0
				)

				.to(
					bottomLine,
					{
						top: '50%',
						yPercent: -50,
						rotate: -45,
						duration: 0.4,
						ease: 'power3.out'
					},
					0
				)

				.to(
					dividerRef!,
					{
						scaleX: 1,
						duration: 0.5,
						ease: 'power3.out'
					},
					0.2
				)

				.fromTo(
					'.menu-item',
					{
						y: 40,
						opacity: 0
					},
					{
						y: 0,
						opacity: 1,
						stagger: 0.07,
						duration: 0.8,
						ease: 'power4.out'
					},
					0.15
				);
		})();

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<header class="fixed top-4 right-4 z-50">
	<div
		bind:this={menuRef}
		class="overflow-hidden bg-linear-to-b from-white/92 to-white/85 ring-1 ring-black/6 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
		style="width:240px;height:60px;"
	>
		<div class="flex h-15 items-center justify-between px-6">
			<div class="flex items-center gap-2.5">
				<a
					href="/"
					class="font-heading text-sm font-semibold tracking-[0.25em] text-black/80 hover:text-black transition-colors"
					aria-label="Bhavya Panchal — Home"
				>
					BHAVYA
				</a>
			</div>

			<button
				class="group/ham relative -mr-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/4"
				onclick={toggleMenu}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
			>
				<span
					bind:this={topLine}
					class="absolute left-1/2 top-2.5 h-0.5 w-4.5 -translate-x-1/2 rounded-full bg-black/70 transition-colors duration-300 group-hover/ham:bg-black"
				></span>

				<span
					bind:this={middleLine}
					class="absolute left-1/2 top-1/2 h-0.5 w-4.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 transition-colors duration-300 group-hover/ham:bg-black"
				></span>

				<span
					bind:this={bottomLine}
					class="absolute left-1/2 top-6 h-0.5 w-4.5 -translate-x-1/2 rounded-full bg-black/70 transition-colors duration-300 group-hover/ham:bg-black"
				></span>
			</button>
		</div>

		{#if open}
			<div>
				<div bind:this={dividerRef} class="mx-5 h-px origin-left scale-x-0 bg-black/6"></div>

				<nav class="flex flex-col p-6 pt-6" aria-label="Main navigation">
					{#each links as link (link.label)}
						<a
							href={link.href}
							title="Navigate to {link.label}"
							class="menu-item group relative flex h-18 items-center justify-end overflow-hidden px-6"
							use:directionalHover
							onclick={closeMenu}
						>
							<div
								class="link-overlay absolute inset-0 bg-primary"
								style="transform:scaleY(0);transform-origin:top;transition:transform 500ms cubic-bezier(.22,1,.36,1);"
							></div>

							<span
								class="relative z-10 font-heading text-[42px] font-bold leading-none text-center block tracking-tight transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:text-white"
							>
								{link.label}
							</span>
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</div>
</header>
