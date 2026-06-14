import { json } from '@sveltejs/kit';
import { sitemapEntries, site } from '$lib/seo';

export async function GET() {
	const key = process.env.INDEXNOW_KEY;
	if (!key) {
		return json({ ok: false, error: 'INDEXNOW_KEY not configured' }, { status: 500 });
	}

	const urls = sitemapEntries.map((entry) => site.url + entry.path);

	const body = JSON.stringify({
		host: new URL(site.url).host,
		key,
		keyLocation: `${site.url}/${key}.txt`,
		urlList: urls
	});

	try {
		const res = await fetch('https://www.bing.com/indexnow', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body
		});

		if (!res.ok) {
			const text = await res.text();
			return json({ ok: false, status: res.status, body: text }, { status: 502 });
		}

		return json({ ok: true, submitted: urls.length, urls });
	} catch (err) {
		return json({ ok: false, error: String(err) }, { status: 502 });
	}
}
