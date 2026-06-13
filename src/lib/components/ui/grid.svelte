<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		cols?: 1 | 2 | 3 | 4;
	}

	let { class: className = '', cols = 2, children }: Props = $props();

	const layouts = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 lg:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-2 lg:grid-cols-4'
	};
</script>

<div class={`grid gap-8 lg:gap-12 ${layouts[cols]} ${className}`}>
	{@render children?.()}
</div>
