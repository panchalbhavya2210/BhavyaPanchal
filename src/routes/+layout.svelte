<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import './layout.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { site, allSchemas } from '$lib/seo';

	let { children } = $props();

	onMount(() => {
		new Lenis({ autoRaf: true });
	});

	const schemas = allSchemas();
</script>

<svelte:head>
	<meta name="author" content={site.author} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
</svelte:head>

<JsonLd {schemas} />

<Header />
<main>
	{@render children()}
</main>
<Footer />
