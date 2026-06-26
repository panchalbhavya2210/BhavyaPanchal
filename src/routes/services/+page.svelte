<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import SectionHeader from '$lib/components/ui/section-header.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema, absoluteUrl, site } from '$lib/seo';
	import { services } from '$lib/data/services';
	import { reveal } from '$lib/actions/reveal';

	const meta = {
		title: 'Services — Bhavya Panchal | React, Next.js, Shopify Hydrogen Developer | Ahmedabad',
		description:
			'Frontend development services by Bhavya Panchal — React development, Next.js applications, Shopify Hydrogen storefronts, performance optimization, UI engineering, and technical SEO. Based in Ahmedabad, India. Available worldwide.',
		keywords:
			'React developer services, Next.js developer Ahmedabad, Shopify Hydrogen developer, frontend development services, performance optimization services, UI engineering, technical SEO services, hire React developer India, freelance frontend developer',
		path: '/services',
		type: 'website'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'ItemList',
			name: 'Services',
			itemListElement: services.map((service, index) => ({
				'@type': 'Service',
				position: index + 1,
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
					{ '@type': 'Country', name: 'Australia' },
					{ '@type': 'Country', name: 'Europe' }
				]
			}))
		},
		breadcrumbSchema([{ name: 'Services', path: '/services' }])
	]}
/>

<Section size="sm">
	<Container size="full">
		<div class="pt-28">
			<SectionHeader align="row" margin="xl">
				<Typography variant="h2" class="font-normal" animate>
					<span class="text-primary">SERVICES.</span>
				</Typography>
				{#snippet description()}
					<Typography variant="body" color="muted">
						I help businesses build fast, accessible, and scalable web applications. From <strong
							>React development</strong
						>
						to <strong>Shopify Hydrogen</strong> storefronts and <strong>Core Web Vitals</strong> optimization
						— here is how I can help.
					</Typography>
				{/snippet}
			</SectionHeader>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each services as service, i (service.slug)}
					<a
						href="/services/{service.slug}"
						class="group border border-border/50 bg-white hover:border-primary/30 transition-colors p-8 flex flex-col"
						use:reveal={i * 0.06}
					>
						<div class="mb-4 text-primary">
							<svelte:component this={service.icon} class="size-8" />
						</div>
						<Typography
							variant="h4"
							class="font-medium mb-3 group-hover:text-primary transition-colors"
						>
							{service.title}
						</Typography>
						<Typography variant="bodySm" color="muted" class="flex-1 mb-6">
							{service.shortDescription}
						</Typography>
						<div class="flex flex-wrap gap-2">
							{#each service.technologies.slice(0, 5) as tech (tech)}
								<span
									class="border border-border/60 px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
								>
									{tech}
								</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>

			<div class="mt-16 text-center">
				<Typography variant="bodyLg" color="muted" class="max-w-2xl mx-auto mb-6">
					Not sure which service fits your needs? Reach out and I will help you figure out the right
					approach for your project.
				</Typography>
				<ButtonPrimary href="/contact" icon={Arrow}>DISCUSS YOUR PROJECT</ButtonPrimary>
			</div>
		</div>
	</Container>
</Section>
