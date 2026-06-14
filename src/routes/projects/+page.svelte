<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { absoluteUrl, breadcrumbSchema } from '$lib/seo';
	import { featuredProject, projects } from '$lib/data/projects';

	const meta = {
		title: 'Projects — Bhavya Panchal',
		description:
			'Explore selected projects by Bhavya Panchal — corporate websites, e-commerce platforms, analytics dashboards, and custom web applications built with modern technologies.',
		keywords:
			'Bhavya Panchal projects, frontend portfolio, web development projects, SvelteKit projects, React projects, UI engineering showcase',
		path: '/projects',
		type: 'website'
	} as const;

	const allProjects = [featuredProject, ...projects];
	const creativeWorks = allProjects.map((project, index) => ({
		'@type': 'CreativeWork' as const,
		name: project.title,
		description: project.description,
		image: absoluteUrl(project.image),
		url: project.href || absoluteUrl('/projects'),
		position: index + 1,
		about: project.category,
		keywords: project.stack.join(', '),
		creator: {
			'@type': 'Person' as const,
			name: 'Bhavya Panchal'
		}
	}));
</script>

<SeoMeta {meta} />
<JsonLd schemas={[...creativeWorks, breadcrumbSchema([{ name: 'Projects', path: '/projects' }])]} />

<div class="pt-28!">
	<Projects />
</div>
