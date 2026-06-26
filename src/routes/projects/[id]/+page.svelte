<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import { ArrowLeft, Clock, Users, Briefcase, Building2 } from '@lucide/svelte';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { breadcrumbSchema, absoluteUrl, site } from '$lib/seo';

	let { data } = $props();
	const project = $derived(data.project);

	const meta = {
		title: `${project.title} — Case Study | Bhavya Panchal Frontend Developer`,
		description: project.description,
		keywords: `${project.title}, ${project.stack.join(', ')}, case study, frontend developer Ahmedabad, Bhavya Panchal, ${project.industry}`,
		path: `/projects/${project.id}`,
		image: project.image,
		type: 'article' as const
	};
</script>

<SeoMeta {meta} />
<JsonLd
	schemas={[
		{
			'@type': 'TechArticle',
			headline: `${project.title} — Case Study`,
			description: project.description,
			image: absoluteUrl(project.image),
			url: absoluteUrl(`/projects/${project.id}`),
			datePublished: '2026-01-01',
			author: {
				'@type': 'Person',
				name: site.author,
				jobTitle: 'Frontend Developer & UI Engineer'
			},
			publisher: {
				'@type': 'Organization',
				name: site.name,
				url: site.url
			},
			about: {
				'@type': 'SoftwareApplication',
				name: project.title,
				applicationCategory: 'WebApplication',
				operatingSystem: 'Web'
			},
			proficiencyLevel: 'Expert'
		},
		breadcrumbSchema([
			{ name: 'Projects', path: '/projects' },
			{ name: project.title, path: `/projects/${project.id}` }
		])
	]}
/>

<Section size="sm">
	<Container size="full">
		<article class="pt-28 max-w-4xl mx-auto">
			<a
				href="/projects"
				class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
			>
				<ArrowLeft class="size-4" />
				Back to Projects
			</a>

			<h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
				{project.title}
			</h1>
			<Typography variant="lead" color="muted" class="mb-6">
				{project.category}
			</Typography>

			<div class="flex flex-wrap gap-3 mb-8">
				{#each project.stack as tech (tech)}
					<span
						class="border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs uppercase tracking-wider text-primary font-medium"
					>
						{tech}
					</span>
				{/each}
			</div>

			<div class="aspect-video overflow-hidden mb-12">
				<img
					src={project.image}
					alt={`${project.title} — Case study by Bhavya Panchal, Frontend Developer`}
					class="h-full w-full object-cover"
					width="1200"
					height="675"
				/>
			</div>

			<div
				class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16 p-6 border border-border/50 bg-white"
			>
				<div class="flex items-start gap-3">
					<Briefcase class="size-5 text-primary mt-0.5 shrink-0" />
					<div>
						<p class="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
							Role
						</p>
						<p class="text-sm font-medium">{project.role}</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Clock class="size-5 text-primary mt-0.5 shrink-0" />
					<div>
						<p class="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
							Duration
						</p>
						<p class="text-sm font-medium">{project.duration}</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Building2 class="size-5 text-primary mt-0.5 shrink-0" />
					<div>
						<p class="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
							Industry
						</p>
						<p class="text-sm font-medium">{project.industry}</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Users class="size-5 text-primary mt-0.5 shrink-0" />
					<div>
						<p class="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
							Team Size
						</p>
						<p class="text-sm font-medium">{project.teamSize}</p>
					</div>
				</div>
			</div>

			<div class="space-y-16">
				<section>
					<h2 class="font-heading text-2xl font-semibold mb-4">The Problem</h2>
					<p class="text-muted-foreground leading-relaxed">{project.problem}</p>
				</section>

				<section>
					<h2 class="font-heading text-2xl font-semibold mb-4">The Solution</h2>
					<p class="text-muted-foreground leading-relaxed">{project.solution}</p>
				</section>

				<section>
					<h2 class="font-heading text-2xl font-semibold mb-4">Challenges</h2>
					<p class="text-muted-foreground leading-relaxed">{project.challenges}</p>
				</section>

				<section>
					<h2 class="font-heading text-2xl font-semibold mb-6">Outcomes & Metrics</h2>
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="border border-border/50 bg-white p-6">
							<h3 class="font-heading text-base font-semibold mb-3">Performance Improvements</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">
								{project.performanceImprovements}
							</p>
						</div>
						<div class="border border-border/50 bg-white p-6">
							<h3 class="font-heading text-base font-semibold mb-3">SEO Improvements</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">{project.seoImprovements}</p>
						</div>
						<div class="border border-border/50 bg-white p-6">
							<h3 class="font-heading text-base font-semibold mb-3">Accessibility Improvements</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">
								{project.accessibilityImprovements}
							</p>
						</div>
						<div class="border border-border/50 bg-white p-6">
							<h3 class="font-heading text-base font-semibold mb-3">Business Outcome</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">{project.businessOutcome}</p>
						</div>
					</div>
				</section>

				<section>
					<h2 class="font-heading text-2xl font-semibold mb-4">Lessons Learned</h2>
					<p class="text-muted-foreground leading-relaxed">{project.lessonsLearned}</p>
				</section>

				<section>
					<h2 class="font-heading text-2xl font-semibold mb-4">Key Metrics at a Glance</h2>
					<div class="flex flex-wrap gap-3">
						{#each project.outcomes as outcome (outcome)}
							<span
								class="border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm text-primary font-medium"
							>
								{outcome}
							</span>
						{/each}
					</div>
				</section>
			</div>

			<div class="mt-16 p-8 border border-border/50 bg-white text-center">
				<Typography variant="h3" class="font-normal mb-4">
					Interested in a similar <span class="text-primary">project</span>?
				</Typography>
				<Typography variant="body" color="muted" class="mb-6 max-w-xl mx-auto">
					Whether you need a corporate website, e-commerce platform, or custom web application — I
					would love to discuss your project.
				</Typography>
				<div class="flex flex-wrap justify-center gap-4">
					<ButtonPrimary href="/contact" icon={Arrow}>START A PROJECT</ButtonPrimary>
					{#if project.liveUrl}
						<ButtonPrimary
							href={project.liveUrl}
							variant="secondary"
							icon={Arrow}
							target="_blank"
							rel="noopener noreferrer"
						>
							VISIT WEBSITE
						</ButtonPrimary>
					{/if}
				</div>
			</div>
		</article>
	</Container>
</Section>
