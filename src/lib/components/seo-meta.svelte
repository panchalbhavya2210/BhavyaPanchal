<script lang="ts">
	import type { PageMeta } from '$lib/seo';
	import { absoluteUrl, site } from '$lib/seo';

	let { meta }: { meta: PageMeta } = $props();

	const canonical = $derived(meta.path ? absoluteUrl(meta.path) : site.url);
	const image = $derived(absoluteUrl(meta.image ?? site.image));
	const description = $derived(meta.description || site.description);
	const keywords = $derived(meta.keywords ?? site.keywords.join(', '));
	const type = $derived(meta.type ?? 'website');
	const siteName = $derived(`${site.name}${site.titleSeparator}${site.tagline}`);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:site_name" content={siteName} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={canonical} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={meta.title} />
	<meta name="twitter:creator" content={site.twitter} />
	<meta name="twitter:site" content={site.twitter} />

	{#if meta.publishedTime}
		<meta property="article:published_time" content={meta.publishedTime} />
	{/if}
	{#if meta.modifiedTime}
		<meta property="article:modified_time" content={meta.modifiedTime} />
	{/if}
</svelte:head>
