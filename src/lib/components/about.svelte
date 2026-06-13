<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';

	const expertise = [
		'Frontend Development',
		'UI Engineering',
		'Design Systems',
		'Performance Optimization',
		'Accessibility',
		'Motion & Interactions'
	];

	const technologies = [
		'SvelteKit',
		'TypeScript',
		'Next.js',
		'Tailwind CSS',
		'GSAP',
		'Sanity',
		'Firebase',
		'Supabase'
	];
</script>

<Section size="sm">
	<Container size="full">
		<div class="space-y-24">
			<!-- Top -->
			<div class="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
				<div class="space-y-8">
					<Typography variant="h2" as="h2" class="font-normal max-w-4xl" animate>
						ABOUT <span class="text-primary">ME.</span>
					</Typography>

					<Typography variant="lead" color="muted" class="max-w-3xl">
						I'm Bhavya Panchal, a frontend developer focused on building fast, scalable and
						thoughtfully crafted digital experiences. I combine design thinking with modern
						development practices to create products that feel intuitive, perform exceptionally and
						solve real business problems.
					</Typography>

					<Typography variant="bodyLg" color="muted" class="max-w-2xl">
						Over the years I've worked across corporate websites, e-commerce platforms, analytics
						dashboards and custom web applications — translating complex requirements into clean,
						maintainable interfaces.
					</Typography>
				</div>

				<div class="flex flex-col justify-between border-l border-border pl-8">
					<div class="space-y-10">
						<div>
							<Typography variant="caption">Location</Typography>

							<Typography variant="h4" class="mt-2 font-normal">Ahmedabad, India</Typography>
						</div>

						<div>
							<Typography variant="caption">Currently</Typography>

							<Typography variant="h4" class="mt-2 font-normal">Web Developer</Typography>

							<Typography variant="body" color="muted">SolePoint Solutions</Typography>
						</div>

						<div>
							<Typography variant="caption">Focus</Typography>

							<Typography variant="bodyLg" class="mt-2">
								Clean UI, performance, accessibility and scalable frontend architecture.
							</Typography>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom -->
			<div class="grid gap-16 border-t border-border pt-16 lg:grid-cols-2">
				<div>
					<Typography variant="caption">What I Do</Typography>

					<div class="mt-8 space-y-5">
						{#each expertise as item (item)}
							<div class="flex items-center gap-4">
								<div class="size-2 rounded-full bg-primary"></div>

								<Typography variant="bodyLg">
									{item}
								</Typography>
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
