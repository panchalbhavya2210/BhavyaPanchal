import { error } from '@sveltejs/kit';
import { posts, getPost } from '$lib/data/blog';

export function entries() {
	return posts.map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');

	return { post };
}
