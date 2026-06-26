<script lang="ts">
	import { loadGsap } from '$lib/gsap';
	import type { Snippet } from 'svelte';

	interface Props {
		summary: Snippet;
		content: Snippet;
		class?: string;
	}

	let { summary, content, class: className = '' }: Props = $props();

	let open = $state(false);
	let contentEl = $state<HTMLDivElement>();
	let animating = $state(false);

	async function toggle() {
		if (animating || !contentEl) return;

		const result = await loadGsap();
		if (!result) {
			open = !open;
			return;
		}

		animating = true;
		const { gsap } = result;

		if (!open) {
			open = true;
			const h = contentEl.scrollHeight;
			gsap.fromTo(
				contentEl,
				{ height: 0, opacity: 0 },
				{
					height: h,
					opacity: 1,
					duration: 0.35,
					ease: 'power3.out',
					onComplete: () => {
						gsap.set(contentEl, { height: 'auto' });
						animating = false;
					}
				}
			);
		} else {
			gsap.to(contentEl, {
				height: 0,
				opacity: 0,
				duration: 0.25,
				ease: 'power2.in',
				onComplete: () => {
					open = false;
					animating = false;
				}
			});
		}
	}
</script>

<div class={`border border-border/50 bg-white ${className}`}>
	<button
		onclick={toggle}
		class="cursor-pointer px-6 py-5 font-heading text-base font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between w-full text-left"
		aria-expanded={open}
	>
		{@render summary()}
		<span
			class="text-primary text-lg ml-4 shrink-0 transition-transform duration-300"
			class:rotate-45={open}>+</span
		>
	</button>
	<div
		bind:this={contentEl}
		class="overflow-hidden"
		style="height:0;opacity:0;"
		aria-hidden={!open}
	>
		<div
			class="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4"
		>
			{@render content()}
		</div>
	</div>
</div>
