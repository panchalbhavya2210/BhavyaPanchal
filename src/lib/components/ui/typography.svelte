<script lang="ts">
	import { revealText } from '$lib/actions/revealText';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { Snippet } from 'svelte';

	const typographyVariants = cva('', {
		variants: {
			variant: {
				h1: 'font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight',
				h2: 'font-heading text-5xl md:text-7xl font-bold tracking-tight',
				h3: 'font-heading text-4xl md:text-5xl font-semibold tracking-tight',
				h4: 'font-heading text-3xl md:text-4xl font-semibold tracking-tight',

				lead: 'text-xl md:text-2xl text-muted-foreground',

				bodyLg: 'text-lg leading-8',
				body: 'text-base leading-7',
				bodySm: 'text-sm leading-6',

				caption: 'text-xs uppercase tracking-[0.15em] text-muted-foreground',

				label: 'text-sm font-medium',

				display: 'font-heading text-7xl md:text-8xl lg:text-[11rem] font-bold  leading-none'
			},

			color: {
				default: 'text-foreground',
				muted: 'text-muted-foreground',
				primary: 'text-primary',
				accent: 'text-accent'
			}
		},

		defaultVariants: {
			variant: 'body',
			color: 'default'
		}
	});

	type Props = VariantProps<typeof typographyVariants> & {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		animate?: boolean;
		children?: Snippet;
	};

	let {
		as = 'p',
		variant = 'body',
		color = 'default',
		animate = false,
		class: className = '',
		children
	}: Props = $props();
</script>

<svelte:element
	this={as}
	use:revealText={animate}
	class={typographyVariants({
		variant,
		color,
		className
	})}
>
	{@render children?.()}
</svelte:element>
