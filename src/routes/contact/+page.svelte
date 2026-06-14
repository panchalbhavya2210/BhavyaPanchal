<script lang="ts">
	import ContactSection from '$lib/components/contact-section.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema } from '$lib/seo';

	const meta = {
		title: 'Contact — Bhavya Panchal',
		description:
			'Get in touch with Bhavya Panchal — frontend developer and UI engineer based in Ahmedabad, India. Available for freelance projects, collaborations, and full-time opportunities.',
		keywords:
			'contact Bhavya Panchal, hire frontend developer, freelance UI engineer, Ahmedabad web developer, SvelteKit developer for hire',
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
