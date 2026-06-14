<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import { Calendar, Clock, Tag, ArrowLeft } from '@lucide/svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema, absoluteUrl, site } from '$lib/seo';

	let { data } = $props();
	const post = $derived(data.post);

	const meta = {
		title: `${post.title} — ${site.name}`,
		description: post.description,
		keywords: post.tags.join(', ') + ', frontend developer blog, Bhavya Panchal',
		path: `/blog/${post.slug}`,
		type: 'article' as const,
		publishedTime: post.date
	};
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'BlogPosting',
			'@id': absoluteUrl(`/blog/${post.slug}`),
			headline: post.title,
			description: post.description,
			datePublished: post.date,
			dateModified: post.date,
			url: absoluteUrl(`/blog/${post.slug}`),
			author: {
				'@type': 'Person',
				name: 'Bhavya Panchal',
				jobTitle: 'Frontend Developer & UI Engineer',
				url: site.url
			},
			publisher: {
				'@type': 'Organization',
				name: site.name,
				url: site.url
			},
			keywords: post.tags.join(', '),
			wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
			inLanguage: 'en-IN',
			isAccessibleForFree: true
		},
		breadcrumbSchema([
			{ name: 'Blog', path: '/blog' },
			{ name: post.title, path: `/blog/${post.slug}` }
		])
	]}
/>

<Section size="sm">
	<Container size="full">
		<article class="pt-28 max-w-3xl mx-auto">
			<!-- Back link -->
			<a href="/blog" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
				<ArrowLeft class="size-4" />
				Back to Blog
			</a>

			<!-- Tags -->
			<div class="flex flex-wrap gap-2 mb-6">
				{#each post.tags as tag (tag)}
					<span class="border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs uppercase tracking-wider text-primary font-medium">
						{tag}
					</span>
				{/each}
			</div>

			<!-- Title -->
			<Typography variant="h2" class="font-normal mb-6">
				{post.title}
			</Typography>

			<!-- Meta -->
			<div class="flex items-center gap-6 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
				<span class="flex items-center gap-1.5">
					<Calendar class="size-4" />
					{new Date(post.date).toLocaleDateString('en-IN', {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}
				</span>
				<span class="flex items-center gap-1.5">
					<Clock class="size-4" />
					{post.readTime} read
				</span>
			</div>

			<!-- Hero image -->
			<img
				src={post.image}
				alt={post.title}
				class="w-full rounded-xl mb-12"
				loading="eager"
			/>

			<!-- Content -->
			<div class="prose prose-lg max-w-none
				prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight
				prose-a:text-primary prose-a:no-underline hover:prose-a:underline
				prose-code:before:content-none prose-code:after:content-none
				prose-code:bg-primary/10 prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
				prose-pre:bg-gray-950 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg
				prose-pre:overflow-x-auto
				prose-img:rounded-xl
				prose-table:w-full prose-table:border prose-table:border-border
				prose-th:border prose-th:border-border prose-th:bg-muted/30 prose-th:px-4 prose-th:py-2 prose-th:text-sm prose-th:font-medium
				prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-sm
				prose-li:marker:text-primary
				prose-strong:text-foreground
				prose-blockquote:border-l-primary prose-blockquote:bg-muted/20 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
			">
				{@html post.content}
			</div>

			<!-- Bottom CTA -->
			<div class="mt-16 pt-8 border-t border-border">
				<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div>
						<Typography variant="bodySm" color="muted">
							Written by <strong class="text-foreground">Bhavya Panchal</strong> — Frontend Developer & UI Engineer
						</Typography>
					</div>
					<ButtonPrimary href="/contact" variant="secondary" icon={Arrow}>
						WORK WITH ME
					</ButtonPrimary>
				</div>
			</div>
		</article>
	</Container>
</Section>
