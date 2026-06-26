<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import SectionHeader from '$lib/components/ui/section-header.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import { Calendar, Clock, Tag } from '@lucide/svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema, absoluteUrl } from '$lib/seo';
	import { reveal } from '$lib/actions/reveal';
	import { posts } from '$lib/data/blog';

	const meta = {
		title: 'Blog — Bhavya Panchal | Frontend Developer Articles & Insights',
		description:
			'Read articles on React, SvelteKit, TypeScript, web performance, accessibility, and frontend development. Written by Bhavya Panchal, a frontend developer from Ahmedabad, India.',
		keywords:
			'frontend developer blog, React blog, SvelteKit articles, TypeScript tutorials, web performance tips, accessibility guide, frontend developer Ahmedabad',
		path: '/blog',
		type: 'website'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'Blog',
			name: 'Bhavya Panchal — Blog',
			description: meta.description,
			url: absoluteUrl('/blog'),
			author: {
				'@type': 'Person',
				name: 'Bhavya Panchal',
				jobTitle: 'Frontend Developer & UI Engineer'
			},
			blogPost: posts.map((post) => ({
				'@type': 'BlogPosting',
				headline: post.title,
				description: post.description,
				datePublished: post.date,
				url: absoluteUrl(`/blog/${post.slug}`),
				author: { '@type': 'Person', name: 'Bhavya Panchal' }
			}))
		},
		breadcrumbSchema([{ name: 'Blog', path: '/blog' }])
	]}
/>

<Section size="sm">
	<Container size="full">
		<div class="pt-28">
			<SectionHeader align="row" margin="xl">
				<Typography variant="h2" class="font-normal" animate>
					<span class="text-primary">BLOG.</span>
				</Typography>
				{#snippet description()}
					<Typography variant="body" color="muted">
						Thoughts on frontend development, performance, accessibility, and the modern web.
					</Typography>
				{/snippet}
			</SectionHeader>

			<div class="grid gap-8 lg:grid-cols-3">
				{#each posts as post, i (post.slug)}
					<a
						href="/blog/{post.slug}"
						class="group border border-border/50 bg-white hover:border-primary/30 transition-colors flex flex-col overflow-hidden"
						use:reveal={i * 0.1}
					>
						<div class="aspect-16/9 overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
								width="400"
								height="225"
							/>
						</div>
						<div class="p-6 flex flex-col flex-1">
							<div class="flex flex-wrap gap-2 mb-4">
								{#each post.tags as tag (tag)}
									<span
										class="border border-border/60 px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
									>
										{tag}
									</span>
								{/each}
							</div>

							<Typography
								variant="h4"
								class="font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2"
							>
								{post.title}
							</Typography>

							<Typography variant="bodySm" color="muted" class="mb-6 flex-1 line-clamp-3">
								{post.description}
							</Typography>

							<div
								class="flex items-center gap-5 text-xs text-muted-foreground mt-auto pt-4 border-t border-border/40"
							>
								<span class="flex items-center gap-1.5">
									<Calendar class="size-3.5" />
									{new Date(post.date).toLocaleDateString('en-IN', {
										month: 'short',
										day: 'numeric',
										year: 'numeric'
									})}
								</span>
								<span class="flex items-center gap-1.5">
									<Clock class="size-3.5" />
									{post.readTime}
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if posts.length === 0}
				<div class="text-center py-20">
					<Typography variant="h4" color="muted">No posts yet.</Typography>
					<Typography variant="bodySm" color="muted" class="mt-2">
						Check back soon for articles on frontend development.
					</Typography>
				</div>
			{/if}
		</div>
	</Container>
</Section>
