import { error } from '@sveltejs/kit';
import { featuredProject, projects, getProject } from '$lib/data/projects';

export function entries() {
	return [featuredProject, ...projects].map((project) => ({ id: project.id }));
}

export function load({ params }) {
	const project = getProject(params.id);
	if (!project) error(404, 'Project not found');

	return { project };
}
