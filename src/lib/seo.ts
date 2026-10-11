/**
 * Single source of truth for identity, contact destinations and metadata.
 * Everything here is verified — do not add unconfirmed handles or claims.
 */
export const site = {
	name: 'Bhavya Panchal',
	role: 'Frontend Developer',
	url: 'https://bhavyapanchal.in',
	title: 'Bhavya Panchal — Frontend Developer',
	description:
		'Frontend developer in Ahmedabad, India — I build thoughtful, responsive interfaces and turn Figma and PSD designs into working websites.',
	email: 'panchalbhavya2210@gmail.com',
	github: 'https://github.com/panchalbhavya2210',
	linkedin: 'https://www.linkedin.com/in/bhavyapanchal',
	ogImage: '/og-image.png'
} as const;

export function personSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		url: site.url,
		jobTitle: site.role,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Ahmedabad',
			addressRegion: 'Gujarat',
			addressCountry: 'IN'
		},
		sameAs: [site.github, site.linkedin]
	};
}

export function webSiteSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: site.name,
		url: site.url
	};
}
