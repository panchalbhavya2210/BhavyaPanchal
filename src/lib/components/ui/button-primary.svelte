<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import Typography from './typography.svelte';

	interface Props {
		children?: Snippet;
		icon?: Component;
		href?: string;
		class?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary';
		onclick?: (event: MouseEvent) => void;
		target?: '_blank' | '_self' | '_parent' | '_top';
		rel?: string;
	}

	let {
		children,
		icon: Icon,
		href,
		class: className = '',
		disabled = false,
		type = 'button',
		variant = 'primary',
		onclick,
		target,
		rel
	}: Props = $props();

	const variants = {
		primary: {
			button: 'bg-primary text-white',
			text: 'text-white',
			overlay: 'bg-black'
		},
		secondary: {
			button: 'bg-black text-white',
			text: 'text-white',
			overlay: 'bg-primary'
		}
	};
</script>

{#if href}
	<a
		{href}
		{target}
		{rel}
		class={`group relative inline-flex h-14 items-center overflow-hidden transition-all duration-300 hover:shadow-lg ${variants[variant].button} ${className}`}
	>
		<Typography
			variant="bodyLg"
			class={`font-heading relative z-10 flex items-center px-4 transition-colors duration-300 ${variants[variant].text}`}
		>
			{@render children?.()}
		</Typography>

		{#if Icon}
			<span
				class={`absolute right-2 z-0 h-10 w-10 rounded-0 transition-all duration-500 ease-in-out group-hover:scale-[1200%] group-hover:rounded-[100px] ${variants[variant].overlay}`}
			></span>

			<span class="relative z-10 flex h-14 w-14 items-center justify-center overflow-hidden">
				<div
					class="absolute transition-all duration-500 ease-out
					group-hover:translate-x-8
					group-hover:-translate-y-8"
				>
					<Icon class="size-5" />
				</div>

				<div
					class="absolute -translate-x-10 translate-y-10
					transition-all duration-500 ease-out
					group-hover:translate-x-0
					group-hover:translate-y-0"
				>
					<Icon class="size-5" />
				</div>
			</span>
		{/if}
	</a>
{:else}
	<button
		{type}
		{disabled}
		{onclick}
		class={`group relative inline-flex h-14 cursor-pointer items-center overflow-hidden transition-all duration-300 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 ${variants[variant].button} ${className}`}
	>
		<Typography
			variant="bodyLg"
			class={`font-heading relative z-10 flex items-center px-4 transition-colors duration-300 ${variants[variant].text}`}
		>
			{@render children?.()}
		</Typography>

		{#if Icon}
			<span
				class={`absolute right-2 z-0 h-10 w-10 rounded-0 transition-all duration-500 ease-in-out group-hover:scale-[1000%] group-hover:rounded-[100px] ${variants[variant].overlay}`}
			></span>

			<span class="relative z-10 flex h-14 w-14 items-center justify-center overflow-hidden">
				<div
					class="absolute transition-all duration-500 ease-out
					group-hover:translate-x-8
					group-hover:-translate-y-8"
				>
					<Icon class="size-5" />
				</div>

				<div
					class="absolute -translate-x-10 translate-y-10
					transition-all duration-500 ease-out
					group-hover:translate-x-0
					group-hover:translate-y-0"
				>
					<Icon class="size-5" />
				</div>
			</span>
		{/if}
	</button>
{/if}
