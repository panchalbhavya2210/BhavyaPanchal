import { sitemapEntries, absoluteUrl } from '$lib/seo';
import { posts } from '$lib/data/blog';
import { services } from '$lib/data/services';
import { featuredProject, projects } from '$lib/data/projects';

const pages = [...sitemapEntries];

const blogEntries = posts.map((post) => ({
	path: `/blog/${post.slug}`,
	lastmod: post.date,
	changefreq: 'monthly' as const,
	priority: 0.7,
	title: post.title
}));

const serviceEntries = [
	{
		path: '/services',
		changefreq: 'monthly' as const,
		priority: 0.9,
		title: 'Services — Bhavya Panchal | Frontend Developer'
	},
	...services.map((service) => ({
		path: `/services/${service.slug}`,
		changefreq: 'monthly' as const,
		priority: 0.8,
		title: service.title
	}))
];

const projectEntries = [featuredProject, ...projects].map((project) => ({
	path: `/projects/${project.id}`,
	changefreq: 'monthly' as const,
	priority: 0.8,
	title: project.title
}));

pages.push(...blogEntries, ...serviceEntries, ...projectEntries);

export async function GET() {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
	.map(
		(page) => `	<url>
		<loc>${absoluteUrl(page.path)}</loc>
		${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
		${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
		${page.priority !== undefined ? `<priority>${page.priority}</priority>` : ''}
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'X-Content-Type-Options': 'nosniff',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
