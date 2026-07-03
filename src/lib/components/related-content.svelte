<script lang="ts">
	import Typography from './ui/typography.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import { services } from '$lib/data/services';
	import { posts } from '$lib/data/blog';
	import { reveal } from '$lib/actions/reveal';

	let {
		currentSlug,
		type,
		heading = 'Related'
	}: {
		currentSlug: string;
		type: 'service' | 'blog' | 'project';
		heading?: string;
	} = $props();

	const relatedServices = $derived.by(() => {
		if (type === 'service') {
			return services.filter((s) => s.slug !== currentSlug).slice(0, 3);
		}
		return services.slice(0, 3);
	});

	const relatedPosts = $derived.by(() => {
		if (type === 'blog') {
			return posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
		}
		return posts.slice(0, 3);
	});
</script>

{#if type === 'service' || type === 'project'}
	<aside class="mt-12 pt-8 border-t border-border" aria-label="Related blog posts">
		<Typography variant="h3" class="font-normal mb-6">
			Related <span class="text-primary">Articles</span>
		</Typography>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each relatedPosts as post, i (post.slug)}
				<a
					href="/blog/{post.slug}"
					class="group border border-border/50 bg-white hover:border-primary/30 transition-colors p-5 flex flex-col"
					use:reveal={i * 0.06}
				>
					<Typography
						variant="bodySm"
						class="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2"
					>
						{post.title}
					</Typography>
					<div class="flex flex-wrap gap-1.5 mt-auto">
						{#each post.tags.slice(0, 2) as tag (tag)}
							<span class="text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</span
							>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</aside>
{/if}

{#if type === 'service' || type === 'blog' || type === 'project'}
	<aside class="mt-12 pt-8 border-t border-border" aria-label="Related services">
		<Typography variant="h3" class="font-normal mb-6">
			Related <span class="text-primary">Services</span>
		</Typography>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each relatedServices as service, i (service.slug)}
				<a
					href="/services/{service.slug}"
					class="group border border-border/50 bg-white hover:border-primary/30 transition-colors p-5 flex flex-col"
					use:reveal={i * 0.06}
				>
				<div class="mb-3 text-primary">
					<!-- svelte-ignore svelte_component_deprecated -->
					<svelte:component this={service.icon} class="size-6" />
				</div>
					<Typography
						variant="bodySm"
						class="font-medium mb-2 group-hover:text-primary transition-colors"
					>
						{service.title}
					</Typography>
					<p class="text-xs text-muted-foreground line-clamp-2">{service.shortDescription}</p>
				</a>
			{/each}
		</div>
	</aside>
{/if}
