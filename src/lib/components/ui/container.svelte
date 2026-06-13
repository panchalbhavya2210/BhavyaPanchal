<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	}

	let { class: className = '', size = 'xl', children }: Props = $props();

	const sizes = {
		sm: 'max-w-4xl',
		md: 'max-w-5xl',
		lg: 'max-w-6xl',
		xl: 'max-w-[1440px]',
		full: 'max-w-[1600px]'
	};
</script>

<div class={`mx-auto w-full px-6 md:px-8 lg:px-4 ${sizes[size]} ${className}`}>
	{@render children?.()}
</div>
