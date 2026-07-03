<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import { ArrowLeft, Check } from '@lucide/svelte';
	import Accordion from '$lib/components/ui/accordion.svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import RelatedContent from '$lib/components/related-content.svelte';
	import { breadcrumbSchema, absoluteUrl, site } from '$lib/seo';
	import { reveal } from '$lib/actions/reveal';

	let { data } = $props();
	const service = $derived(data.service);

	const meta = {
		title: `${service.title} — Bhavya Panchal | Frontend Developer, Ahmedabad, India`,
		description: service.shortDescription,
		keywords: `${service.title}, frontend developer Ahmedabad, hire ${service.title.toLowerCase()} India, Bhavya Panchal`,
		path: `/services/${service.slug}`,
		type: 'website' as const
	};

	const faqSchema = $derived(
		service.faq.length > 0
			? {
					'@type': 'FAQPage',
					mainEntity: service.faq.map((item) => ({
						'@type': 'Question',
						name: item.question,
						acceptedAnswer: {
							'@type': 'Answer',
							text: item.answer
						}
					}))
				}
			: null
	);
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'Service',
			name: service.title,
			description: service.shortDescription,
			url: absoluteUrl(`/services/${service.slug}`),
			provider: {
				'@type': 'Person',
				name: site.author,
				jobTitle: 'Frontend Developer & UI Engineer',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Ahmedabad',
					addressRegion: 'Gujarat',
					addressCountry: 'IN'
				}
			},
			areaServed: [
				{ '@type': 'Country', name: 'India' },
				{ '@type': 'Country', name: 'United States' },
				{ '@type': 'Country', name: 'United Kingdom' },
				{ '@type': 'Country', name: 'Australia' }
			],
			offers: {
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.title,
					description: service.shortDescription
				}
			}
		},
		breadcrumbSchema([
			{ name: 'Services', path: '/services' },
			{ name: service.title, path: `/services/${service.slug}` }
		]),
		...(faqSchema ? [faqSchema] : [])
	]}
/>

<Section size="sm">
	<Container size="full">
		<article class="pt-28 max-w-4xl mx-auto">
			<a
				href="/services"
				class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
			>
				<ArrowLeft class="size-4" />
				Back to Services
			</a>

			<div class="mb-8 text-primary">
				<svelte:component this={service.icon} class="size-10" />
			</div>

			<h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
				{service.title}
			</h1>

			<Typography variant="lead" color="muted" class="mb-10 max-w-2xl">
				{service.shortDescription}
			</Typography>

			<div
				class="prose prose-lg max-w-none mb-16
				prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight
				prose-p:text-muted-foreground prose-p:leading-relaxed
				prose-a:text-primary prose-a:no-underline hover:prose-a:underline
				prose-strong:text-foreground
			"
			>
				{#each service.description.split('\n\n') as paragraph}
					{#if paragraph.trim()}
						<p>{@html paragraph}</p>
					{/if}
				{/each}
			</div>

			<div class="grid gap-12 lg:grid-cols-3 mb-16">
				<div>
					<h2 class="font-heading text-lg font-semibold mb-5">Technologies</h2>
					<div class="flex flex-wrap gap-2">
						{#each service.technologies as tech (tech)}
							<span
								class="border border-border/60 bg-white px-3 py-2 text-sm font-medium text-muted-foreground"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<div>
					<h2 class="font-heading text-lg font-semibold mb-5">Business Benefits</h2>
					<ul class="space-y-3">
						{#each service.benefits as benefit (benefit)}
							<li class="flex items-start gap-3 text-sm text-muted-foreground">
								<Check class="size-4 text-primary mt-0.5 shrink-0" />
								{benefit}
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h2 class="font-heading text-lg font-semibold mb-5">Deliverables</h2>
					<ul class="space-y-3">
						{#each service.deliverables as deliverable (deliverable)}
							<li class="flex items-start gap-3 text-sm text-muted-foreground">
								<Check class="size-4 text-primary mt-0.5 shrink-0" />
								{deliverable}
							</li>
						{/each}
					</ul>
				</div>
			</div>

			{#if service.faq.length > 0}
				<div class="mb-16">
					<h2 class="font-heading text-2xl font-semibold mb-6">
						Frequently Asked Questions
					</h2>
					<div class="grid gap-4 sm:grid-cols-2">
						{#each service.faq as item, i (item.question)}
							<div use:reveal={i * 0.06}>
								<Accordion>
									{#snippet summary()}{item.question}{/snippet}
									{#snippet content()}{item.answer}{/snippet}
								</Accordion>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<RelatedContent currentSlug={service.slug} type="service" />

			<div class="border-t border-border pt-10 mt-12 text-center">
				<Typography variant="h3" class="font-normal mb-4">
					Need <span class="text-primary">{service.title.toLowerCase()}</span> for your project?
				</Typography>
				<Typography variant="body" color="muted" class="mb-6 max-w-xl mx-auto">
					Let us discuss your project requirements and how I can help you achieve your goals.
				</Typography>
				<ButtonPrimary href="/contact" icon={Arrow}>GET A FREE QUOTE</ButtonPrimary>
			</div>
		</article>
	</Container>
</Section>
