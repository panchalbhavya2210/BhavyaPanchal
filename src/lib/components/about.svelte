<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';
	import { reveal } from '$lib/actions/reveal';

	const expertise = [
		{ name: 'Frontend Development', desc: 'React, Next.js, Remix, SvelteKit' },
		{
			name: 'UI Engineering',
			desc: 'Design systems, component libraries, pixel-perfect implementation'
		},
		{
			name: 'Performance Optimization',
			desc: 'Core Web Vitals, bundle analysis, rendering strategies'
		},
		{ name: 'Accessibility', desc: 'WCAG 2.1 AA compliance, keyboard navigation, screen readers' },
		{ name: 'Technical SEO', desc: 'Structured data, semantic HTML, crawlability' },
		{ name: 'Motion & Interactions', desc: 'GSAP, Framer Motion, scroll-driven animations' }
	];

	const technologies = [
		'React',
		'Next.js',
		'Remix',
		'SvelteKit',
		'TypeScript',
		'JavaScript',
		'Tailwind CSS',
		'GSAP',
		'Framer Motion',
		'Node.js',
		'Shopify',
		'Hydrogen',
		'Sanity',
		'Firebase',
		'Supabase',
		'Appwrite'
	];
</script>

<Section size="sm">
	<Container size="full">
		<div class="space-y-24">
			<!-- Top -->
			<div class="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
				<div class="space-y-6">
					<Typography variant="h2" as="h2" class="font-normal max-w-4xl" animate>
						ABOUT <span class="text-primary">ME.</span>
					</Typography>

					<Typography variant="lead" color="muted" class="max-w-3xl" animate>
						I&rsquo;m Bhavya Panchal, a <strong>frontend developer</strong> and
						<strong>UI engineer</strong> based in Ahmedabad, India, with 3+ years of experience building
						fast, accessible, and scalable digital experiences. I combine design thinking with modern
						development practices to create products that feel intuitive, perform exceptionally, and solve
						real business problems.
					</Typography>

					<Typography variant="bodyLg" color="muted" class="max-w-2xl" animate>
						My journey spans corporate websites, e-commerce platforms, analytics dashboards, and
						custom web applications across industries including enterprise technology, health
						commerce, urban mobility, content platforms, and investment intelligence. At each stage,
						I translate complex requirements into clean, maintainable interfaces that drive
						measurable business outcomes.
					</Typography>

					<Typography variant="bodyLg" color="muted" class="max-w-2xl" animate>
						I approach every project with a performance-first mindset. Whether building a React
						single-page application, a Next.js e-commerce storefront, or a Shopify Hydrogen headless
						commerce experience, I obsess over Core Web Vitals, bundle efficiency, and rendering
						strategies. My work consistently achieves <strong
							>95+ Lighthouse Performance scores</strong
						>
						and <strong>100% Accessibility compliance</strong>.
					</Typography>

					<Typography variant="bodyLg" color="muted" class="max-w-2xl" animate>
						Beyond writing code, I design scalable component architectures and design systems that
						empower teams to ship consistently. I write semantic, accessible HTML, implement
						structured data for search engines, and ensure every interface I build works for
						everyone &mdash; including keyboard-only and screen reader users. As a
						<strong>TypeScript developer</strong>, I bring type safety and developer experience
						improvements to every codebase I touch.
					</Typography>

					<Typography variant="bodyLg" color="muted" class="max-w-2xl" animate>
						Currently building at <strong>SolePoint Solutions</strong> in Ahmedabad, I collaborate with
						designers, backend engineers, and stakeholders to deliver production-grade applications. I&rsquo;m
						well-versed in the modern frontend ecosystem &mdash; from React, Next.js, and Remix to SvelteKit
						and Shopify Hydrogen &mdash; and I choose the right tool for each problem rather than applying
						a one-size-fits-all approach. Available for freelance and full-time opportunities worldwide.
					</Typography>
				</div>

				<div class="flex flex-col justify-between border-l border-border pl-8">
					<div class="space-y-10">
						<div use:reveal={0}>
							<Typography variant="caption">Location</Typography>
							<Typography variant="h4" class="mt-2 font-normal">Ahmedabad, Gujarat</Typography>
							<Typography variant="body" color="muted">India</Typography>
						</div>

						<div use:reveal={0.08}>
							<Typography variant="caption">Experience</Typography>
							<Typography variant="h4" class="mt-2 font-normal">3+ Years</Typography>
							<Typography variant="body" color="muted">Frontend Development</Typography>
						</div>

						<div use:reveal={0.12}>
							<Typography variant="caption">Currently</Typography>
							<Typography variant="h4" class="mt-2 font-normal">Web Developer</Typography>
							<Typography variant="body" color="muted">SolePoint Solutions</Typography>
						</div>

						<div use:reveal={0.16}>
							<Typography variant="caption">Availability</Typography>
							<Typography variant="h4" class="mt-2 font-normal">Open to Opportunities</Typography>
							<Typography variant="body" color="muted">Freelance &amp; Full-time</Typography>
						</div>

						<div use:reveal={0.2}>
							<Typography variant="caption">Focus</Typography>
							<Typography variant="bodyLg" class="mt-2">
								Performance, accessibility, scalable architecture, and technical SEO.
							</Typography>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom -->
			<div class="grid gap-16 border-t border-border pt-16 lg:grid-cols-2">
				<div>
					<Typography variant="caption">What I Do</Typography>

					<div class="mt-8 space-y-6">
						{#each expertise as item, i (item.name)}
							<div class="flex items-start gap-4" use:reveal={i * 0.06}>
								<div class="size-2 mt-2 rounded-full bg-primary shrink-0"></div>

								<div>
									<Typography variant="bodyLg" class="font-medium">
										{item.name}
									</Typography>
									<Typography variant="bodySm" color="muted" class="mt-0.5">
										{item.desc}
									</Typography>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<Typography variant="caption">Tech I Work With</Typography>

					<div class="mt-8 flex flex-wrap gap-3">
						{#each technologies as tech (tech)}
							<span
								class="border border-border px-4 py-2 text-sm transition-colors hover:border-primary"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>
