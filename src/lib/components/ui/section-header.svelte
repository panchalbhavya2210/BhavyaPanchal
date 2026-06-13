<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		description?: Snippet;
		class?: string;
		margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
		align?: 'start' | 'row';
	}

	let {
		children,
		description,
		class: className = '',
		margin = 'lg',
		align = 'start'
	}: Props = $props();

	const margins = {
		none: '',
		sm: 'mb-8',
		md: 'mb-12',
		lg: 'mb-16',
		xl: 'mb-20'
	};
</script>

<div
	class={`${align === 'row' ? 'flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6' : ''} ${margins[margin]} ${className}`}
>
	{@render children?.()}
	{#if description}
		<div class={align === 'row' ? 'max-w-sm shrink-0' : ''}>
			{@render description()}
		</div>
	{/if}
</div>
