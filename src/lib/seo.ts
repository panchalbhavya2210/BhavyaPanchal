import { dev } from '$app/environment';

export const site = {
	name: 'Bhavya Panchal',
	tagline: 'Frontend Developer & UI Engineer',
	url: dev ? 'http://localhost:5173' : 'https://bhavyapanchal.in',
	titleSeparator: ' — ',
	description:
		'Bhavya Panchal is a frontend developer and UI engineer based in Ahmedabad, India. Specializing in React, SvelteKit, TypeScript, and modern web technologies to build fast, accessible, and scalable web applications. Available for full-time roles and freelance projects.',
	keywords: [
		'Bhavya Panchal',
		'frontend developer',
		'frontend developer Ahmedabad',
		'React developer Ahmedabad',
		'UI engineer',
		'web developer Ahmedabad',
		'UI developer Gujarat',
		'frontend developer India',
		'React developer India',
		'hire frontend developer',
		'SvelteKit developer',
		'Next.js developer',
		'TypeScript developer',
		'GSAP',
		'Tailwind CSS',
		'Sanity CMS',
		'design systems',
		'performance optimization',
		'web accessibility',
		'Ahmedabad',
		'Gujarat',
		'India',
		'SolePoint Solutions',
		'motion design',
		'UI interactions',
		'web developer portfolio'
	],
	author: 'Bhavya Panchal',
	locale: 'en_IN',
	twitter: '@panchalbhavya22',
	image: '/og-image.webp',
	foundingDate: '2022',
	email: 'panchalbhavya2210@gmail.com'
} as const;

export function pageTitle(title: string) {
	return `${title}${site.titleSeparator}${site.name}`;
}

export function ogTitle(title: string) {
	return `${title}${site.titleSeparator}${site.name} — ${site.tagline}`;
}

export function absoluteUrl(path: string) {
	return `${site.url}${path}`;
}

export interface PageMeta {
	title: string;
	description: string;
	keywords?: string;
	path?: string;
	image?: string;
	type?: 'website' | 'article' | 'profile';
	publishedTime?: string;
	modifiedTime?: string;
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
		title: 'Bhavya Panchal — Frontend Developer & UI Engineer | Ahmedabad, India',
		lastmod: new Date().toISOString().split('T')[0]
	},
	{
		path: '/about-me',
		changefreq: 'monthly',
		priority: 0.9,
		title: 'About Bhavya Panchal — Frontend Developer & UI Engineer | Ahmedabad',
		lastmod: new Date().toISOString().split('T')[0]
	},
	{
		path: '/projects',
		changefreq: 'weekly',
		priority: 0.9,
		title: 'Projects — Bhavya Panchal | Frontend Developer Portfolio | Ahmedabad',
		lastmod: new Date().toISOString().split('T')[0]
	},
	{
		path: '/journey',
		changefreq: 'monthly',
		priority: 0.8,
		title: 'Career Journey — Bhavya Panchal | Frontend Developer Ahmedabad',
		lastmod: new Date().toISOString().split('T')[0]
	},
	{
		path: '/contact',
		changefreq: 'monthly',
		priority: 0.8,
		title: 'Contact — Hire Bhavya Panchal | Frontend Developer Ahmedabad, India',
		lastmod: new Date().toISOString().split('T')[0]
	}
];

export const navigationSections = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about-me' },
	{ name: 'Projects', url: '/projects' },
	{ name: 'Journey', url: '/journey' },
	{ name: 'Contact', url: '/contact' }
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
			'https://github.com/panchalbhavya2210',
			'https://linkedin.com/in/bhavyapanchal',
			'https://x.com/panchalbhavya22'
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

export function breadcrumbSchema(items?: { name: string; path: string }[]) {
	const crumbs = [{ name: site.name, path: '/' }, ...(items ?? [])];
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'@id': `${site.url}/#breadcrumb`,
		numberOfItems: crumbs.length,
		itemListElement: crumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.path)
		}))
	};
}

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${site.url}/#organization`,
		name: site.name,
		alternateName: 'Bhavya Panchal Portfolio',
		description: site.description,
		url: site.url,
		logo: absoluteUrl(site.image),
		image: absoluteUrl(site.image),
		email: site.email,
		foundingDate: site.foundingDate,
		founder: {
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: site.author
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Ahmedabad',
			addressRegion: 'Gujarat',
			addressCountry: 'IN'
		},
		sameAs: [
			'https://github.com/panchalbhavya2210',
			'https://linkedin.com/in/bhavyapanchal',
			'https://x.com/panchalbhavya22'
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
		organizationSchema(),
		personSchema(),
		siteNavigationSchema(),
		breadcrumbSchema(),
		portfolioSchema()
	];
}
