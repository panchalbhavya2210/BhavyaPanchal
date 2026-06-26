import { error } from '@sveltejs/kit';
import { services, getService } from '$lib/data/services';

export function entries() {
	return services.map((service) => ({ slug: service.slug }));
}

export function load({ params }) {
	const service = getService(params.slug);
	if (!service) error(404, 'Service not found');

	return { service };
}
