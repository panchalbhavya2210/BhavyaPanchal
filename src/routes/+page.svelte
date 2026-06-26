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
	import Accordion from '$lib/components/ui/accordion.svelte';
	// import BeyondCode from '$lib/components/beyond-code.svelte';

	const meta = {
		title: `${site.name} — Frontend Developer &amp; UI Engineer | React, Next.js, Shopify Hydrogen | Ahmedabad, India`,
		description:
			'Bhavya Panchal is a frontend developer and UI engineer from Ahmedabad, India. Specialising in React, Next.js, Remix, Shopify Hydrogen, SvelteKit, and TypeScript. 3+ years building fast, accessible, and scalable web applications. Available for freelance and full-time roles worldwide.',
		keywords:
			'Bhavya Panchal, frontend developer Ahmedabad, React developer Ahmedabad, Next.js developer India, Shopify Hydrogen developer, Remix developer, UI engineer India, hire frontend developer, SvelteKit developer, TypeScript developer, freelance React developer, frontend developer Gujarat, performance optimization, Core Web Vitals',
		path: '/',
		image: site.image,
		type: 'website'
	} as const;

	const capabilities = [
		{
			title: 'Frontend Development',
			icon: '⚛️',
			description:
				'I build performant, accessible web applications using React, Next.js, Remix, and SvelteKit. From single-page applications to server-rendered platforms, I architect solutions that balance developer experience with end-user performance. My approach covers component architecture, state management, API integration, and comprehensive testing strategies. Every project ships with measurable performance targets — consistently achieving 95+ Lighthouse scores.'
		},
		{
			title: 'UI Engineering',
			icon: '🎨',
			description:
				'I design and implement scalable component libraries, design systems, and pixel-perfect interfaces that empower teams to ship consistently. Using tools like Tailwind CSS, GSAP, and Framer Motion, I create reusable, accessible UI primitives with comprehensive documentation. My design systems reduce development time by 30-40% while ensuring visual consistency across entire product suites.'
		},
		{
			title: 'Performance Optimization',
			icon: '⚡',
			description:
				'I conduct in-depth Core Web Vitals audits, bundle analysis, and rendering optimization to keep applications fast and responsive. From reducing JavaScript payloads through code splitting and tree shaking to implementing optimal image strategies and caching patterns, I systematically identify and eliminate performance bottlenecks. Typical outcomes include 40-60% reductions in page load times and zero Cumulative Layout Shift.'
		},
		{
			title: 'Technical SEO & Accessibility',
			icon: '🔍',
			description:
				'I implement semantic HTML, structured data, and WCAG 2.1 AA compliance to ensure applications are discoverable by search engines and usable by everyone. My workflow includes automated accessibility testing, keyboard navigation audits, screen reader verification, and comprehensive schema.org implementation. Accessible, SEO-friendly code is not an afterthought — it is foundational to every project I deliver.'
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
<JsonLd
	schemas={[
		webSiteSchema(),
		personSchema(),
		organizationSchema(),
		portfolioSchema(),
		{
			'@type': 'FAQPage',
			mainEntity: [
				{
					'@type': 'Question',
					name: 'What do I specialise in?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'I specialise in frontend development and UI engineering — building fast, accessible web applications with React, Next.js, Remix, SvelteKit, and TypeScript. Deep experience with Shopify Hydrogen for headless commerce, performance optimization (Core Web Vitals), and technical SEO. Based in Ahmedabad, India, serving clients worldwide.'
					}
				},
				{
					'@type': 'Question',
					name: 'What frontend technologies do I use?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Core stack: React, Next.js, Remix, SvelteKit, TypeScript, JavaScript, Tailwind CSS, GSAP, Framer Motion. Backend/data: Node.js, Express, Firebase, Supabase, Appwrite, MongoDB. E-commerce: Shopify, Liquid, Hydrogen. CMS: Sanity.'
					}
				},
				{
					'@type': 'Question',
					name: 'Do I build Shopify Hydrogen stores?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes — custom Shopify Hydrogen storefronts for headless commerce including performant, SEO-optimised product pages, collections, cart functionality, and checkout experiences. Also experienced with traditional Shopify theme development using Liquid.'
					}
				},
				{
					'@type': 'Question',
					name: 'Do I optimise Core Web Vitals?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes. Core Web Vitals optimization is central to my development process. Includes Lighthouse audits, JavaScript bundle analysis, code splitting, lazy loading, image and font optimization, and CLS elimination. Projects consistently achieve 95+ Performance scores with zero CLS.'
					}
				},
				{
					'@type': 'Question',
					name: 'Am I available for freelance work?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes — available for freelance and contract projects working with startups, agencies, and enterprises on React, Next.js, Shopify Hydrogen, and performance optimization. Also open to full-time opportunities. Contact via the website form or email.'
					}
				},
				{
					'@type': 'Question',
					name: 'Do I develop React and Next.js applications?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes — React and Next.js are my primary frameworks. I build single-page applications with React and server-rendered, statically-generated, and incrementally-regenerated pages with Next.js. Covers App Router, Server Components, API routes, middleware, and the complete ecosystem.'
					}
				},
				{
					'@type': 'Question',
					name: 'Where am I located and do I work remotely?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Based in Ahmedabad, Gujarat, India. I work remotely with clients across India and worldwide — including the US, UK, Europe, and Australia. Comfortable with async communication, timezone coordination, and remote-first collaboration workflows.'
					}
				},
				{
					'@type': 'Question',
					name: 'What makes me different from other frontend developers?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Three differentiators: First, measurable performance targets (95+ Lighthouse, zero CLS). Second, accessibility and technical SEO are foundational, not optional. Third, framework-agnostic — production experience with React, Next.js, Remix, SvelteKit, and Shopify Hydrogen, recommending the best tool per project.'
					}
				}
			]
		}
	]}
/>

<Banner />

<!-- Stats + Intro -->
<Section size="sm" class="bg-white">
	<Container size="full">
		<div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
			<div class="space-y-6">
				<Typography variant="h2" class="font-normal" animate>
					ABOUT <span class="text-primary">ME.</span>
				</Typography>
				<Typography variant="bodyLg" color="muted" class="max-w-2xl">
					I&rsquo;m Bhavya Panchal, a <strong>frontend developer</strong> and
					<strong>UI engineer</strong> from Ahmedabad, India, with 3+ years of experience crafting high-performance
					web applications. I combine design thinking with modern development practices to build products
					that feel intuitive, perform exceptionally, and solve real business problems.
				</Typography>
				<Typography variant="body" color="muted" class="max-w-2xl">
					My work spans corporate websites, e-commerce platforms built with
					<strong>Shopify and Hydrogen</strong>, analytics dashboards, and custom web applications
					across industries including enterprise technology, health commerce, urban mobility,
					content platforms, and investment intelligence. I specialise in building with
					<strong>React</strong>, <strong>Next.js</strong>, <strong>Remix</strong>, and
					<strong>SvelteKit</strong> — choosing the right framework for each project rather than a one-size-fits-all
					approach.
				</Typography>
				<Typography variant="body" color="muted" class="max-w-2xl">
					Every project I ship targets <strong>95+ Lighthouse Performance</strong> scores and
					<strong>WCAG 2.1 AA accessibility compliance</strong>. I implement semantic HTML,
					structured data, and Core Web Vitals optimization as foundational practices — not
					afterthoughts. Currently building at <strong>SolePoint Solutions</strong> in Ahmedabad, I am
					available for freelance and full-time opportunities worldwide.
				</Typography>
				<div class="flex flex-wrap gap-4 pt-2">
					<ButtonPrimary href="/about-me" variant="secondary" icon={Arrow}
						>READ MORE ABOUT ME</ButtonPrimary
					>
					<ButtonPrimary href="/contact" variant="secondary" icon={Arrow}
						>WORK WITH ME</ButtonPrimary
					>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-4">
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0}>
						<Typography variant="h4" class="text-primary font-bold">3+</Typography>
						<Typography variant="bodySm" color="muted">Years Experience</Typography>
					</div>
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.12}>
						<Typography variant="h4" class="text-primary font-bold">6+</Typography>
						<Typography variant="bodySm" color="muted">Projects Delivered</Typography>
					</div>
				</div>
				<div class="space-y-4 pt-6">
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.08}>
						<Typography variant="h4" class="text-primary font-bold">95+</Typography>
						<Typography variant="bodySm" color="muted">Avg Lighthouse Score</Typography>
					</div>
					<div class="border border-border/50 bg-white p-6 text-center" use:reveal={0.2}>
						<Typography variant="h4" class="text-primary font-bold">15+</Typography>
						<Typography variant="bodySm" color="muted">Technologies</Typography>
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
					As a <strong>frontend developer</strong> and <strong>UI engineer</strong> based in Ahmedabad,
					India, I deliver production-grade applications that are fast, accessible, and search-engine
					friendly. Here is how I can help your business.
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
					href={project.href || `/projects/${project.id}`}
					class="group border border-border/50 bg-white hover:border-primary/30 transition-colors"
					use:revealCard={i}
				>
					<div class="aspect-5/3 overflow-hidden">
						<img
							src={project.image}
							alt={`${project.title} — project by Bhavya Panchal, frontend developer`}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
							width="600"
							height="360"
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

<!-- FAQ -->
<Section size="sm">
	<Container size="full">
		<SectionHeader align="row" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				FREQUENTLY ASKED <span class="text-primary">QUESTIONS.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" color="muted">
					Quick answers about my services, expertise, and availability as a
					<strong>frontend developer</strong> in Ahmedabad, India.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="grid gap-4 sm:grid-cols-2">
			<div use:reveal={0}>
				<Accordion>
					{#snippet summary()}What do I specialise in?{/snippet}
					{#snippet content()}
						I specialise in frontend development and UI engineering — building fast, accessible web
						applications with React, Next.js, Remix, SvelteKit, and TypeScript. I also have deep
						experience with Shopify Hydrogen for headless commerce, performance optimization (Core
						Web Vitals), and technical SEO. Based in Ahmedabad, India, I serve clients worldwide.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.04}>
				<Accordion>
					{#snippet summary()}What frontend technologies do I use?{/snippet}
					{#snippet content()}
						My core stack includes React, Next.js, Remix, SvelteKit, TypeScript, JavaScript,
						Tailwind CSS, GSAP, and Framer Motion. For backend and data, I work with Node.js,
						Express, Firebase, Supabase, Appwrite, and MongoDB. For e-commerce, I build with
						Shopify, Liquid, and Hydrogen. For CMS-driven sites, I use Sanity. I select the right
						tool for each project rather than forcing a single stack.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.08}>
				<Accordion>
					{#snippet summary()}Do I build Shopify Hydrogen stores?{/snippet}
					{#snippet content()}
						Yes — I build custom Shopify Hydrogen storefronts for headless commerce. This includes
						creating performant, SEO-optimised product pages, collections, cart functionality, and
						checkout experiences using Hydrogen and Oxygen. I also have experience with traditional
						Shopify theme development using Liquid for clients who prefer a non-headless approach.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.12}>
				<Accordion>
					{#snippet summary()}Do I optimise Core Web Vitals?{/snippet}
					{#snippet content()}
						Absolutely. Core Web Vitals optimization is central to my development process. I conduct
						Lighthouse audits, analyse JavaScript bundles, implement code splitting and lazy
						loading, optimise images and fonts, and eliminate layout shift. My projects consistently
						achieve 95+ Performance scores with zero CLS and sub-second FCP.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.16}>
				<Accordion>
					{#snippet summary()}Am I available for freelance work?{/snippet}
					{#snippet content()}
						Yes, I am available for freelance and contract projects. I work with startups, agencies,
						and enterprises on React, Next.js, Shopify Hydrogen, and performance optimization
						engagements. I am also open to full-time opportunities. You can reach me through the
						<a href="/contact" class="text-primary hover:underline">contact form</a>
						or at panchalbhavya2210@gmail.com.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.2}>
				<Accordion>
					{#snippet summary()}Do I develop React and Next.js applications?{/snippet}
					{#snippet content()}
						Yes — React and Next.js are my primary frameworks for full-stack frontend development. I
						build everything from single-page applications with React to server-rendered,
						statically-generated, and incrementally-regenerated pages with Next.js. My expertise
						covers the App Router, Server Components, API routes, middleware, and the complete
						Next.js ecosystem.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.24}>
				<Accordion>
					{#snippet summary()}Where am I located and do I work remotely?{/snippet}
					{#snippet content()}
						I am based in Ahmedabad, Gujarat, India. I work remotely with clients across India and
						worldwide — including the US, UK, Europe, and Australia. I am comfortable with async
						communication, timezone coordination, and remote-first collaboration workflows.
					{/snippet}
				</Accordion>
			</div>

			<div use:reveal={0.28}>
				<Accordion>
					{#snippet summary()}What makes me different from other frontend developers?{/snippet}
					{#snippet content()}
						Three things set my work apart: First, I ship with measurable performance targets —
						every project achieves 95+ Lighthouse and zero CLS. Second, I treat accessibility and
						technical SEO as foundational, not optional. Third, I am framework-agnostic — I have
						production experience with React, Next.js, Remix, SvelteKit, and Shopify Hydrogen, so I
						recommend the best tool for your specific needs rather than the one I am most
						comfortable with.
					{/snippet}
				</Accordion>
			</div>
		</div>
	</Container>
</Section>

<!-- Final CTA -->
<Section size="sm" class="bg-white">
	<Container size="full">
		<div class="text-center max-w-2xl mx-auto space-y-6">
			<Typography variant="h2" class="font-normal" animate>
				READY TO BUILD SOMETHING <span class="text-primary">GREAT?</span>
			</Typography>
			<Typography variant="bodyLg" color="muted">
				Whether you need a React developer for your next product, a Shopify Hydrogen storefront, or
				a performance audit for your existing application — I would love to hear from you.
			</Typography>
			<div class="flex flex-wrap justify-center gap-4 pt-2">
				<ButtonPrimary href="/contact" icon={Arrow}>START A PROJECT</ButtonPrimary>
				<ButtonPrimary href="/projects" variant="secondary" icon={Arrow}
					>VIEW CASE STUDIES</ButtonPrimary
				>
			</div>
		</div>
	</Container>
</Section>

<!-- <BeyondCode /> -->
