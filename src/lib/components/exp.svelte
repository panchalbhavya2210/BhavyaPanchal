<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import SectionHeader from './ui/section-header.svelte';
	import Typography from './ui/typography.svelte';
	import { revealCard } from '$lib/actions/revealCard';

	const experiences = [
		{
			number: '01',
			period: '2026 — Present',
			role: 'WEB DEVELOPER',
			company: 'SolePoint Solutions.',
			description:
				'Building scalable web applications with modern frontend technologies while collaborating with designers and backend teams.',
			current: true
		},
		{
			number: '02',
			period: '2024 — 2025',
			role: 'FRONTEND DEVELOPER',
			company: 'eQuest Solutions',
			description:
				'Building scalable web applications with modern frontend technologies while collaborating with designers and backend teams.'
		},
		{
			number: '03',
			period: '2022 — 2023',
			role: 'WEB DEVELOPER',
			company: 'Early Career',
			description:
				'Built foundational skills in frontend development, responsive design and modern JavaScript frameworks.'
		}
	];
</script>

<Section size="sm">
	<Container size="full">
		<SectionHeader align="start" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				MY JOURNEY
				<span class="text-primary">SO FAR.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" class="text-muted-foreground" animate>
					A timeline of growth, challenges and meaningful experiences that shaped the way I design
					and build.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="relative flex flex-col">
			<div class="absolute left-7 top-0 bottom-0 w-0.5 bg-border/60 hidden md:block"></div>
			{#each experiences as item, index (item.number)}
				<div use:revealCard={index} class="group flex gap-6 pb-6 last:pb-0">
					<div class="hidden md:flex w-14 shrink-0 justify-center">
						<div
							class="z-10 size-[38px] rounded-full border-2 flex items-center justify-center bg-card transition-all duration-300 {item.current
								? 'border-primary'
								: 'border-border group-hover:border-primary/50'}"
						>
							<span
								class="text-xs font-semibold tabular-nums leading-none {item.current
									? 'text-primary'
									: 'text-muted-foreground group-hover:text-primary'} transition-colors duration-300"
							>
								{item.number}
							</span>
						</div>
					</div>

					<div
						class="flex-1 min-w-0 py-8 px-6 rounded-xl bg-card border border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md group-hover:shadow-primary/5"
					>
						<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
							<div class="flex flex-wrap items-center gap-3">
								<Typography variant="caption" class="text-primary">
									{item.role}
								</Typography>
								{#if item.current}
									<span
										class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
									>
										<span class="size-1.5 rounded-full bg-primary animate-pulse"></span>
										Current
									</span>
								{/if}
							</div>
							<Typography variant="bodySm" class="text-muted-foreground tabular-nums shrink-0">
								{item.period}
							</Typography>
						</div>

						<Typography variant="h4" class="mt-3 font-medium">
							{item.company}
						</Typography>

						<Typography variant="body" class="mt-2 text-muted-foreground max-w-2xl">
							{item.description}
						</Typography>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>
