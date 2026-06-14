<script lang="ts">
	/**
	 * Renders one or more schema.org objects as a JSON-LD script tag.
	 * Uses {@html} with JSON.stringify — safe because all schema data is hardcoded
	 * (no user input) and JSON.stringify guarantees structurally valid output.
	 *
	 * Pass a single schema object or array; multiple are wrapped in @graph.
	 */
	let { schemas }: { schemas: Record<string, unknown>[] } = $props();

	const data = $derived(
		schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas }
	);
</script>

<svelte:head>
	{@html '<script type="application/ld+json">' + JSON.stringify(data) + '</script>'}
</svelte:head>
