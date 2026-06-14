<script lang="ts">
	import Banner from '$lib/components/banner.svelte';
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import SectionHeader from '$lib/components/ui/section-header.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { site, webSiteSchema, personSchema, organizationSchema, portfolioSchema } from '$lib/seo';
	import { featuredProject, projects } from '$lib/data/projects';
	import { reveal } from '$lib/actions/reveal';
	import { revealCard } from '$lib/actions/revealCard';

	const meta = {
		title: `${site.name} — Frontend Developer &amp; UI Engineer | Ahmedabad, India`,
		description:
			'Bhavya Panchal is a frontend developer and UI engineer from Ahmedabad, India. Crafting fast, accessible, and scalable digital experiences with React, SvelteKit, TypeScript, and modern web technologies. Available for hire.',
		keywords:
			'Bhavya Panchal, frontend developer Ahmedabad, React developer Ahmedabad, UI engineer India, hire frontend developer, SvelteKit developer, web developer portfolio, TypeScript developer, Next.js developer, Ahmedabad, Gujarat',
		path: '/',
		image: site.image,
		type: 'website'
	} as const;

	const capabilities = [
		{
			title: 'Frontend Development',
			description:
				'Building performant, accessible interfaces using React, Next.js, SvelteKit, and TypeScript. From component architecture to full-scale applications.'
		},
		{
			title: 'UI Engineering',
			description:
				'Design systems, component libraries, and pixel-perfect implementations that scale across teams and products.'
		},
		{
			title: 'Performance Optimization',
			description:
				'Core Web Vitals audits, bundle analysis, lazy loading strategies, and rendering optimisation to keep apps fast and responsive.'
		},
		{
			title: 'Motion & Interactions',
			description:
				'Smooth page transitions, scroll-driven animations, and micro-interactions using GSAP and CSS — adding polish without sacrificing performance.'
		}
	];

	const technologies = [
		'React',
		'Next.js',
		'SvelteKit',
		'TypeScript',
		'JavaScript',
		'Tailwind CSS',
		'GSAP',
		'Node.js',
		'Sanity CMS',
		'Firebase',
		'Supabase',
		'Git'
	];
</script>

<SeoMeta {meta} />
<JsonLd schemas={[webSiteSchema(), personSchema(), organizationSchema(), portfolioSchema()]} />

<Banner />

<!-- Stats + Intro -->
<Section size="sm" class="bg-white">
	<Container size="full">
		<div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
			<div class="space-y-6">
				<Typography variant="h2" class="font-normal" animate>
					ABOUT <span class="text-primary">ME.</span>
				</Typography>
				<Typography variant="bodyLg" color="muted" class="max-w-2xl">
					I'm Bhavya Panchal, a <strong>frontend engineer</strong> and
					<strong>JavaScript developer</strong> from Ahmedabad, India. I combine design thinking with
					modern development practices to build products that feel intuitive, perform exceptionally, and
					solve real business problems.
				</Typography>
				<Typography variant="body" color="muted" class="max-w-2xl">
					Over 3+ years I've worked across corporate websites, e-commerce platforms, analytics
					dashboards, and custom web applications — translating complex requirements into clean,
					maintainable interfaces. Currently building at
					<strong>SolePoint Solutions</strong>.
				</Typography>
				<div class="pt-2">
					<ButtonPrimary href="/about-me" variant="secondary" icon={Arrow}>READ MORE</ButtonPrimary>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-4">
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0}>
						<Typography variant="h4" class="text-primary font-bold">React</Typography>
						<Typography variant="bodySm" color="muted">Next.js · Remix</Typography>
					</div>
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.1}>
						<Typography variant="h4" class="text-primary font-bold">SvelteKit</Typography>
						<Typography variant="bodySm" color="muted">Svelte 5 · Runes</Typography>
					</div>
				</div>
				<div class="space-y-4 pt-6">
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.15}>
						<Typography variant="h4" class="text-primary font-bold">TypeScript</Typography>
						<Typography variant="bodySm" color="muted">JavaScript · Node.js</Typography>
					</div>
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.25}>
						<Typography variant="h4" class="text-primary font-bold">Tailwind</Typography>
						<Typography variant="bodySm" color="muted">GSAP · Framer Motion</Typography>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>

<!-- Capabilities -->
<Section size="sm" class="">
	<Container size="full">
		<SectionHeader align="row" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				WHAT I <span class="text-primary">DO.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" color="muted">
					As a <strong>frontend developer</strong> and <strong>JavaScript engineer</strong>, I turn
					complex requirements into clean, maintainable interfaces.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="grid gap-6 sm:grid-cols-2">
			{#each capabilities as cap, i (cap.title)}
				<div class="border border-border/50 bg-white p-8" use:reveal={i * 0.08}>
					<Typography variant="h4" class="mb-3 font-medium">{cap.title}</Typography>
					<Typography variant="body" color="muted">{cap.description}</Typography>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- Featured Projects -->
<Section size="sm">
	<Container size="full">
		<SectionHeader align="row" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				FEATURED <span class="text-primary">PROJECTS.</span>
			</Typography>
			{#snippet description()}
				Selected work across corporate websites, e-commerce, analytics dashboards, and custom web
				applications.
			{/snippet}
		</SectionHeader>

		<div class="grid gap-6 lg:grid-cols-3">
			{#each [featuredProject, ...projects].slice(0, 3) as project, i (project.id)}
				<a
					href={project.href || '/projects'}
					class="group border border-border/50 bg-white hover:border-primary/30 transition-colors"
					use:revealCard={i}
				>
					<div class="aspect-5/3 overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div class="p-6 space-y-3">
						<div
							class="flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-muted-foreground"
						>
							{#each project.stack as tech, i (i)}
								<span>{tech}</span>
								{#if i < project.stack.length - 1}
									<span class="text-primary">·</span>
								{/if}
							{/each}
						</div>
						<Typography variant="h4" class="font-medium group-hover:text-primary transition-colors">
							{project.title}
						</Typography>
						<Typography variant="bodySm" color="muted">{project.description}</Typography>
						<div class="flex flex-wrap gap-x-3 gap-y-1 pt-1">
							{#each project.outcomes.slice(0, 2) as outcome (outcome)}
								<span class="text-xs text-primary/80">{outcome}</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<ButtonPrimary href="/projects" variant="secondary" icon={Arrow}>
				VIEW ALL PROJECTS
			</ButtonPrimary>
		</div>
	</Container>
</Section>

<!-- Tech Stack -->
<Section size="sm" class="bg-white">
	<Container size="full">
		<SectionHeader align="row" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				TECH <span class="text-primary">STACK.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" color="muted">
					As a <strong>TypeScript developer</strong> and <strong>Next.js developer</strong>, I work
					across the modern frontend ecosystem — from frameworks to CMS and backend tools.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="flex flex-wrap gap-3">
			{#each technologies as tech, i (tech)}
				<span
					class="border border-border/60 px-5 py-3 text-sm font-medium transition-all hover:border-primary hover:text-primary hover:bg-primary/5 cursor-default"
					use:reveal={i * 0.04}
				>
					{tech}
				</span>
			{/each}
		</div>
	</Container>
</Section>
