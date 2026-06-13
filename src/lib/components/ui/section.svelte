<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		size?: 'sm' | 'md' | 'lg' | 'xl';
	}

	let { class: className = '', size = 'lg', children }: Props = $props();

	const spacing = {
		sm: 'py-16',
		md: 'py-24',
		lg: 'py-32',
		xl: 'py-40'
	};
</script>

<section class={`${spacing[size]} ${className}`}>
	{@render children?.()}
</section>
