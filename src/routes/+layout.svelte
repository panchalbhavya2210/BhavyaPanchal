<script lang="ts">
	import './layout.css';
	import { site } from '$lib/seo';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="author" content={site.name} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
</svelte:head>

<div class="backdrop" aria-hidden="true"></div>

<main id="main-content">
	{@render children()}
</main>
