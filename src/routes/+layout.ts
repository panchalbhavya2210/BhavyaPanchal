import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const prerender = true;

export const load = async () => {
	if (browser) {
		posthog.init(
			import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? 'phc_zhKAV8AQZgbZBWsuDXu7QSWLSdM5wKebLqBa3hsjhyCU',
			{
				api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'
			}
		);
	}
	return {};
};
