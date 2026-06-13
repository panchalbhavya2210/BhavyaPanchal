<script lang="ts">
	import Lenis from 'lenis';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import { site, pageTitle, absoluteUrl, allSchemas } from '$lib/seo';
	import { page } from '$app/stores';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();

	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const lenis = new Lenis({
			autoRaf: true
		});
	});

	const title = pageTitle('Portfolio');
	const description = site.description;
	const keywords = site.keywords.join(', ');
	const ogImage = absoluteUrl(site.image);
	const canonical = absoluteUrl($page.url.pathname);
	const schemas = allSchemas();
	const schemaTags = schemas
		.map((s) => '<script type="application/ld+json">' + JSON.stringify(s) + '</' + 'script>')
		.join('\n');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={site.author} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />

	<link rel="canonical" href={canonical} />
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:site_name" content={site.name} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonical} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={site.name} />
	<meta name="twitter:creator" content={site.twitter} />
	<meta name="twitter:site" content={site.twitter} />

	<!-- JSON-LD Structured Data -->
	{@html schemaTags}
</svelte:head>

<Header />
{@render children()}
<Footer />
