import { dev } from '$app/environment';

export const site = {
	name: 'Bhavya Panchal — Frontend Developer',
	tagline: 'Design, Code & Craft',
	url: dev ? 'http://localhost:5173' : 'https://bhavyapanchal.in',
	titleSeparator: ' — ',
	description:
		'Portfolio of Bhavya Panchal, a frontend developer & UI engineer from Ahmedabad, India. Crafting fast, accessible, and scalable digital experiences with SvelteKit, TypeScript, GSAP, and modern web technologies.',
	keywords: [
		'Bhavya Panchal',
		'frontend developer',
		'UI engineer',
		'web developer portfolio',
		'SvelteKit developer',
		'TypeScript',
		'GSAP',
		'Tailwind CSS',
		'Next.js',
		'Sanity CMS',
		'design systems',
		'performance optimization',
		'accessibility',
		'Ahmedabad',
		'India',
		'SolePoint Solutions',
		'motion design',
		'UI interactions'
	],
	author: 'Bhavya Panchal',
	locale: 'en_IN',
	twitter: '@bhavyapanchal',
	image: '/og-image.webp',
	foundingDate: '2022',
	email: 'hello@bhavyapanchal.com'
} as const;

export function pageTitle(title: string) {
	return `${title}${site.titleSeparator}${site.name}`;
}

export function absoluteUrl(path: string) {
	return `${site.url}${path}`;
}

export type SitemapEntry = {
	path: string;
	lastmod?: string;
	changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	priority?: number;
	title: string;
};

export const sitemapEntries: SitemapEntry[] = [
	{
		path: '/',
		changefreq: 'weekly',
		priority: 1.0,
		title: 'Bhavya Panchal — Frontend Developer Portfolio',
		lastmod: '2026-06-13'
	},
	{
		path: '/#about',
		changefreq: 'monthly',
		priority: 0.8,
		title: 'About — Bhavya Panchal',
		lastmod: '2026-06-13'
	},
	{
		path: '/#projects',
		changefreq: 'monthly',
		priority: 0.9,
		title: 'Projects — Bhavya Panchal',
		lastmod: '2026-06-13'
	},
	{
		path: '/#stack',
		changefreq: 'monthly',
		priority: 0.7,
		title: 'Tech Stack — Bhavya Panchal',
		lastmod: '2026-06-13'
	},
	{
		path: '/#contact',
		changefreq: 'monthly',
		priority: 0.8,
		title: 'Contact — Bhavya Panchal',
		lastmod: '2026-06-13'
	}
];

export const navigationSections = [
	{ name: 'About', url: '/#about' },
	{ name: 'Projects', url: '/#projects' },
	{ name: 'Stack', url: '/#stack' },
	{ name: 'Contact', url: '/#contact' }
] as const;

export function webSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: site.name,
		alternateName: 'Bhavya Panchal Portfolio',
		description: site.description,
		url: site.url,
		image: absoluteUrl(site.image),
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${site.url}/?q={search_term_string}`
			},
			'query-input': 'required name=search_term_string'
		},
		inLanguage: 'en-IN',
		copyrightYear: '2026',
		dateCreated: '2022',
		author: {
			'@type': 'Person',
			name: site.author,
			url: site.url
		}
	};
}

export function personSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${site.url}/#person`,
		name: 'Bhavya Panchal',
		alternateName: 'Bhavya',
		description:
			'Frontend developer and UI engineer specializing in fast, accessible, and scalable digital experiences.',
		url: site.url,
		image: absoluteUrl(site.image),
		jobTitle: 'Frontend Developer & UI Engineer',
		worksFor: {
			'@type': 'Organization',
			name: 'SolePoint Solutions',
			url: 'https://solepointsolutions.com'
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
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Gujarat Technological University'
		},
		sameAs: [
			'https://github.com/bhavyapanchal',
			'https://linkedin.com/in/bhavyapanchal',
			'https://twitter.com/bhavyapanchal'
		]
	};
}

export function siteNavigationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		'@id': `${site.url}/#site-navigation`,
		name: 'Site Navigation',
		numberOfItems: navigationSections.length,
		itemListElement: navigationSections.map((item, index) => ({
			'@type': 'SiteNavigationElement',
			position: index + 1,
			name: item.name,
			url: absoluteUrl(item.url)
		}))
	};
}

export function breadcrumbSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'@id': `${site.url}/#breadcrumb`,
		numberOfItems: 1,
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: site.name,
				item: site.url
			}
		]
	};
}

export function portfolioSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': `${site.url}/#portfolio`,
		name: 'Bhavya Panchal — Portfolio',
		description: site.description,
		url: site.url,
		about: {
			'@type': 'Person',
			name: site.author,
			jobTitle: 'Frontend Developer & UI Engineer'
		},
		hasPart: navigationSections.map((section) => ({
			'@type': 'WebPage',
			name: section.name,
			url: absoluteUrl(section.url),
			isPartOf: {
				'@type': 'WebSite',
				'@id': `${site.url}/#website`
			}
		})),
		mainEntity: {
			'@id': `${site.url}/#person`
		}
	};
}

export function allSchemas() {
	return [
		webSiteSchema(),
		personSchema(),
		siteNavigationSchema(),
		breadcrumbSchema(),
		portfolioSchema()
	];
}
