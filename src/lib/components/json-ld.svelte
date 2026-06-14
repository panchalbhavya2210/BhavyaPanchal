<script lang="ts">
	/**
	 * Escape `</` sequences so JSON doesn't prematurely close the script tag.
	 */
	function safeJsonLd(data: unknown): string {
		return JSON.stringify(data).replace(/<\//g, '<\\/');
	}

	/**
	 * Renders one or more schema.org objects as a safe JSON-LD script tag.
	 * Pass a single schema object or spread multiple; multiple are wrapped in @graph.
	 */
	let { schemas }: { schemas: Record<string, unknown>[] } = $props();

	const json = $derived(
		safeJsonLd(
			schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas }
		)
	);
</script>

<svelte:head>
	<script type="application/ld+json">
		{json}
	</script>
</svelte:head>
