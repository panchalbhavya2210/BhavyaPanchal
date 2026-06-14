<script lang="ts">
	import Exp from '$lib/components/exp.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema } from '$lib/seo';

	const meta = {
		title: 'Journey — Bhavya Panchal',
		description:
			'Explore the career journey of Bhavya Panchal — from early beginnings in web development to building scalable applications at SolePoint Solutions.',
		keywords:
			'Bhavya Panchal career, frontend developer experience, web developer journey, UI engineer career timeline, SolePoint Solutions',
		path: '/journey',
		type: 'website'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'ItemList',
			name: 'Career Journey',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Web Developer at SolePoint Solutions (2026 — Present)',
					description: 'Building scalable web applications with modern frontend technologies.'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Frontend Developer at eQuest Solutions (2024 — 2025)',
					description: 'Building scalable web applications with modern frontend technologies.'
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: 'Web Developer — Early Career (2022 — 2023)',
					description:
						'Built foundational skills in frontend development, responsive design, and modern JavaScript frameworks.'
				}
			]
		},
		breadcrumbSchema([{ name: 'Journey', path: '/journey' }])
	]}
/>

<div class="pt-28!">
	<Exp />
</div>
