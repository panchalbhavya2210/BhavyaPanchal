<script>
	import About from '$lib/components/about.svelte';
	import Banner from '$lib/components/banner.svelte';
	import Exp from '$lib/components/exp.svelte';
	import Projects from '$lib/components/projects.svelte';
	import { featuredProject, projects } from '$lib/data/projects';
	import { absoluteUrl } from '$lib/seo';

	const allProjects = [featuredProject, ...projects];

	const projectSchemas = allProjects.map((project, index) => ({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: project.title,
		description: project.description,
		image: absoluteUrl(project.image),
		url: project.href || undefined,
		position: index + 1,
		about: project.category,
		keywords: project.stack.join(', '),
		creator: {
			'@type': 'Person',
			name: 'Bhavya Panchal'
		}
	}));
</script>

<svelte:head>
	{#each projectSchemas as schema}
		{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	{/each}
</svelte:head>

<div id="work"><Banner /></div>
<div id="projects"><Projects /></div>
<div id="about"><About /></div>
<div id="stack"><Exp /></div>
