import { dev } from '$app/environment';

export const site = {
	name: 'Bhavya Panchal',
	tagline: 'Frontend Developer & UI Engineer',
	url: dev ? 'http://localhost:5173' : 'https://bhavyapanchal.in',
	titleSeparator: ' — ',
	description:
		'Bhavya Panchal is a frontend developer and UI engineer based in Ahmedabad, India. Specializing in React, Next.js, Remix, Shopify Hydrogen, SvelteKit, TypeScript, and modern web technologies to build fast, accessible, and scalable web applications. Available for freelance projects and full-time roles worldwide.',
	keywords: [
		'Bhavya Panchal',
		'frontend developer',
		'frontend developer Ahmedabad',
		'React developer Ahmedabad',
		'Next.js developer India',
		'Shopify Hydrogen developer',
		'Remix developer',
		'UI engineer India',
		'freelance React developer',
		'hire frontend developer',
		'SvelteKit developer',
		'TypeScript developer',
		'JavaScript developer India',
		'web developer Gujarat',
		'React performance optimization',
		'Core Web Vitals',
		'GSAP',
		'Tailwind CSS',
		'Sanity CMS',
		'design systems',
		'web accessibility',
		'Ahmedabad',
		'Gujarat',
		'India',
		'SolePoint Solutions',
		'motion design',
		'UI interactions',
		'frontend developer portfolio'
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
		title:
			'Bhavya Panchal — Frontend Developer & UI Engineer | React, Next.js, Shopify Hydrogen | Ahmedabad, India',
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
		path: '/blog',
		changefreq: 'weekly',
		priority: 0.8,
		title: 'Blog — Bhavya Panchal | Frontend Developer Articles & Insights',
		lastmod: new Date().toISOString().split('T')[0]
	},
	{
		path: '/services',
		changefreq: 'monthly',
		priority: 0.9,
		title: 'Services — Bhavya Panchal | React, Next.js, Shopify Hydrogen Developer',
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
	{ name: 'Services', url: '/services' },
	{ name: 'Projects', url: '/projects' },
	{ name: 'Blog', url: '/blog' },
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
			'Frontend developer and UI engineer specialising in fast, accessible, and scalable digital experiences. Expert in React, Next.js, Remix, Shopify Hydrogen, SvelteKit, and TypeScript. Based in Ahmedabad, India.',
		url: site.url,
		image: absoluteUrl('/bhavya-panchal.webp'),
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
			'React',
			'Next.js',
			'Remix',
			'Shopify Hydrogen',
			'SvelteKit',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'GSAP',
			'Framer Motion',
			'Design Systems',
			'Performance Optimization',
			'Core Web Vitals',
			'Web Accessibility',
			'Technical SEO',
			'Motion Design',
			'Sanity CMS',
			'Firebase',
			'Supabase',
			'Node.js'
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Gujarat Technological University'
		},
		sameAs: [
			'https://github.com/panchalbhavya2210',
			'https://linkedin.com/in/bhavyapanchal',
			'https://x.com/panchalbhavya22'
		],
		knowsLanguage: ['English', 'Hindi', 'Gujarati']
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
		areaServed: [
			{ '@type': 'Country', name: 'India' },
			{ '@type': 'Country', name: 'United States' },
			{ '@type': 'Country', name: 'United Kingdom' },
			{ '@type': 'Country', name: 'Australia' },
			{ '@type': 'Continent', name: 'Europe' }
		],
		sameAs: [
			'https://github.com/panchalbhavya2210',
			'https://linkedin.com/in/bhavyapanchal',
			'https://x.com/panchalbhavya22'
		]
	};
}

export function professionalServiceSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': `${site.url}/#professionalservice`,
		name: `${site.name} — Frontend Development Services`,
		description:
			'Professional frontend development services including React, Next.js, Remix, Shopify Hydrogen, SvelteKit, performance optimization, UI engineering, and technical SEO. Based in Ahmedabad, India.',
		url: `${site.url}/services`,
		provider: {
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: site.author
		},
		areaServed: [
			{ '@type': 'City', name: 'Ahmedabad' },
			{ '@type': 'State', name: 'Gujarat' },
			{ '@type': 'Country', name: 'India' }
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Frontend Development Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'React Development',
						description:
							'High-performance single-page applications, server-rendered platforms, and component architectures built with React and TypeScript.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Next.js Development',
						description:
							'Full-stack React applications with server-side rendering, static generation, API routes, and the App Router.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Shopify & Hydrogen Development',
						description:
							'Custom Shopify storefronts, Hydrogen headless commerce, and Liquid theme development for e-commerce brands.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Performance Optimization',
						description:
							'Core Web Vitals audits, bundle analysis, rendering optimisation, and systematic performance improvements.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'UI Engineering',
						description:
							'Design systems, component libraries, and pixel-perfect implementations that scale across teams and products.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Technical SEO',
						description:
							'Semantic HTML, structured data, Core Web Vitals optimisation, and crawlability audits for JavaScript applications.'
					}
				}
			]
		}
	};
}

export function speakableSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'SpeakableSpecification',
		xpath: ['/html/head/title', '/html/head/meta[@name="description"]/@content']
	};
}

export function imageObjectSchema(url: string, caption: string, width = 1200, height = 630) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ImageObject',
		contentUrl: absoluteUrl(url),
		caption,
		width,
		height,
		representativeOfPage: true
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
		professionalServiceSchema(),
		siteNavigationSchema(),
		breadcrumbSchema(),
		portfolioSchema(),
		speakableSchema()
	];
}
