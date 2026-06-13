<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div class={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}>
	{@render children?.()}
</div>
