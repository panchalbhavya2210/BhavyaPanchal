import { json } from '@sveltejs/kit';
import { sitemapEntries, absoluteUrl, site } from '$lib/seo';
import { posts } from '$lib/data/blog';
import { services } from '$lib/data/services';
import { featuredProject, projects } from '$lib/data/projects';

function getAllUrls(): string[] {
	const urls = new Set<string>();

	// Static pages
	for (const entry of sitemapEntries) {
		urls.add(absoluteUrl(entry.path));
	}

	// Blog posts
	for (const post of posts) {
		urls.add(absoluteUrl(`/blog/${post.slug}`));
	}

	// Service pages
	urls.add(absoluteUrl('/services'));
	for (const service of services) {
		urls.add(absoluteUrl(`/services/${service.slug}`));
	}

	// Project pages
	for (const project of [featuredProject, ...projects]) {
		urls.add(absoluteUrl(`/projects/${project.id}`));
	}

	return [...urls];
}

async function submitToIndexNow(urls: string[]) {
	const key = process.env.INDEXNOW_KEY;
	if (!key) {
		return { ok: false, error: 'INDEXNOW_KEY not configured' };
	}

	const host = new URL(site.url).host;
	const keyLocation = absoluteUrl(`/${key}.txt`);

	// IndexNow accepts up to 10,000 URLs per request
	const body = JSON.stringify({
		host,
		key,
		keyLocation,
		urlList: urls
	});

	try {
		const res = await fetch('https://api.indexnow.org/IndexNow', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body
		});

		if (!res.ok) {
			const text = await res.text();
			return { ok: false, status: res.status, body: text };
		}

		return { ok: true, submitted: urls.length };
	} catch (err) {
		return { ok: false, error: String(err) };
	}
}

export async function GET() {
	const urls = getAllUrls();
	const result = await submitToIndexNow(urls);

	if (!result.ok) {
		return json(result, { status: 502 });
	}

	return json({ ...result, urls });
}

export async function POST({ request }) {
	let urls: string[];

	const contentType = request.headers.get('content-type') || '';

	if (contentType.includes('application/json')) {
		const body = await request.json();
		// Allow submitting specific URLs via POST body
		if (body.urls && Array.isArray(body.urls)) {
			urls = body.urls;
		} else {
			urls = getAllUrls();
		}
	} else {
		urls = getAllUrls();
	}

	const result = await submitToIndexNow(urls);

	if (!result.ok) {
		return json(result, { status: 502 });
	}

	return json({ ...result, urls });
}
