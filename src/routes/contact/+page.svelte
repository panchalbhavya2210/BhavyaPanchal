<script lang="ts">
	import ContactSection from '$lib/components/contact-section.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema } from '$lib/seo';

	const meta = {
		title: 'Contact — Bhavya Panchal | Hire Frontend Developer Ahmedabad',
		description:
			'Get in touch with Bhavya Panchal — frontend developer and UI engineer based in Ahmedabad, India. Available for full-time roles, freelance projects, and collaborations. Expert in React, SvelteKit, and TypeScript.',
		keywords:
			'hire frontend developer Ahmedabad, contact Bhavya Panchal, hire React developer India, freelance UI engineer, Ahmedabad web developer, SvelteKit developer for hire, frontend developer available',
		path: '/contact',
		type: 'website'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'ContactPage',
			mainEntity: {
				'@type': 'Person',
				name: 'Bhavya Panchal',
				email: 'panchalbhavya2210@gmail.com',
				telephone: '+91 90818 65254',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Ahmedabad',
					addressRegion: 'Gujarat',
					addressCountry: 'IN'
				}
			}
		},
		breadcrumbSchema([{ name: 'Contact', path: '/contact' }])
	]}
/>

<ContactSection />
