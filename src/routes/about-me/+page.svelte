<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Exp from '$lib/components/exp.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema } from '$lib/seo';

	const meta = {
		title: 'About — Bhavya Panchal | Frontend Developer & UI Engineer, Ahmedabad',
		description:
			'Learn about Bhavya Panchal — a frontend developer and UI engineer based in Ahmedabad, India. Expertise in React, SvelteKit, TypeScript, design systems, performance optimization, and modern web technologies. Currently working at SolePoint Solutions.',
		keywords:
			'about Bhavya Panchal, frontend developer Ahmedabad, UI engineer India, web developer bio, SvelteKit developer, TypeScript developer, React developer, hire frontend developer Gujarat, SolePoint Solutions',
		path: '/about-me',
		type: 'profile'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'ProfilePage',
			mainEntity: {
				'@type': 'Person',
				name: 'Bhavya Panchal',
				jobTitle: 'Frontend Developer & UI Engineer',
				worksFor: {
					'@type': 'Organization',
					name: 'SolePoint Solutions'
				},
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Ahmedabad',
					addressRegion: 'Gujarat',
					addressCountry: 'IN'
				},
				knowsAbout: [
					'Frontend Development',
					'UI Engineering',
					'Design Systems',
					'Performance Optimization',
					'Web Accessibility',
					'Motion Design',
					'SvelteKit',
					'TypeScript',
					'Next.js',
					'Tailwind CSS',
					'GSAP',
					'Sanity CMS',
					'Firebase',
					'Supabase'
				]
			}
		},
		breadcrumbSchema([{ name: 'About', path: '/about-me' }])
	]}
/>

<div class="pt-28!">
	<About />
</div>

<div id="journey"><Exp /></div>
