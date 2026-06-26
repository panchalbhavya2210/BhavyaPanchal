<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import { featuredProject, projects } from '$lib/data/projects';
	import { revealCard } from '$lib/actions/revealCard';
</script>

<Section size="sm">
	<Container size="full">
		<div class="space-y-4">
			<!-- Header -->
			<div class="grid lg:grid-cols-[0.33fr_0.67fr] gap-4">
				<div class="space-y-6">
					<Typography variant="h2" class="font-normal" animate>
						SELECTED <span class="text-primary">PROJECTS.</span>
					</Typography>

					<Typography variant="body" class="font-normal leading-tight max-w-md" animate>
						A selection of products, platforms, and digital experiences built across industries.
						<span class="text-primary"
							>Some projects are presented as anonymized case studies due to client confidentiality
							agreements.</span
						>
					</Typography>
				</div>

				<!-- Featured Project -->
				<a
					href={`/projects/${featuredProject.id}`}
					class="group relative w-full overflow-hidden min-h-96 lg:min-h-[25rem]"
					use:revealCard={0}
				>
					<img
						src={featuredProject.image}
						alt={`${featuredProject.title} — case study by Bhavya Panchal, frontend developer`}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						width="1200"
						height="800"
					/>

					<div
						class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent lg:bg-linear-to-r lg:from-black/10 lg:via-black/20 lg:to-black/70"
					></div>

					<div
						class="relative z-10 flex h-full flex-col justify-end p-6 lg:ml-auto lg:max-w-[49%] lg:justify-between lg:bg-black/55 lg:p-8 lg:backdrop-blur-md"
					>
						<div class="space-y-6">
							<Typography variant="h3" class="font-normal! uppercase text-white">
								{featuredProject.title}
							</Typography>

							<div class="space-y-2">
								<div class="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-white">
									{#each featuredProject.stack as tech, i (i)}
										<span>{tech}</span>
										{#if i < featuredProject.stack.length - 1}
											<span class="text-primary">•</span>
										{/if}
									{/each}
								</div>

								<Typography variant="bodySm" class="uppercase text-white/70">
									{featuredProject.category}
								</Typography>

								<div class="flex flex-wrap gap-x-4 gap-y-1">
									{#each featuredProject.outcomes as outcome (outcome)}
										<span class="text-xs text-primary/80">{outcome}</span>
									{/each}
								</div>
							</div>
						</div>

						<div class="flex items-center justify-between">
							<Typography variant="label" class="text-white">VIEW PROJECT</Typography>

							<ArrowUpRight
								class="size-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
							/>
						</div>
					</div>
				</a>
			</div>

			<!-- Project Grid -->
			<!-- Row 2 -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each projects.slice(0, 3) as project, i (project.id)}
					<a
						href={project.href || `/projects/${project.id}`}
						target={project.href ? '_blank' : undefined}
						rel={project.href ? 'noopener noreferrer' : undefined}
						class="group relative aspect-square overflow-hidden bg-black"
						use:revealCard={i + 1}
					>
						<img
							src={project.image}
							alt={`${project.title} — project by Bhavya Panchal, frontend developer`}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							width="800"
							height="800"
							loading="lazy"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
						></div>
						<div class="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
							<div class="space-y-4">
								<Typography variant="h4" class="font-normal! uppercase text-white"
									>{project.title}</Typography
								>
								<div
									class="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-white"
								>
									{#each project.stack as tech, j (j)}
										<span>{tech}</span>
										{#if j < project.stack.length - 1}<span class="text-primary">•</span>{/if}
									{/each}
								</div>
								<Typography variant="bodySm" class="uppercase text-white/60"
									>{project.category}</Typography
								>
								<div class="flex flex-wrap gap-x-3 gap-y-0.5">
									{#each project.outcomes as outcome (outcome)}
										<span class="text-[10px] text-primary/70">{outcome}</span>
									{/each}
								</div>
							</div>
							<div class="flex justify-end">
								<ArrowUpRight
									class="size-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Row 3 -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{#each projects.slice(3) as project, i (project.id)}
					<a
						href={project.href || `/projects/${project.id}`}
						target={project.href ? '_blank' : undefined}
						rel={project.href ? 'noopener noreferrer' : undefined}
						class="group relative aspect-[4/3] lg:aspect-[21/9] overflow-hidden bg-black"
						use:revealCard={i + 4}
					>
						<img
							src={project.image}
							alt={`${project.title} — project by Bhavya Panchal, frontend developer`}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							width="800"
							height="800"
							loading="lazy"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:bg-linear-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent"
						></div>
						<div class="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
							<div class="space-y-4">
								<Typography variant="h4" class="font-normal! uppercase text-white"
									>{project.title}</Typography
								>
								<div
									class="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-white"
								>
									{#each project.stack as tech, j (j)}
										<span>{tech}</span>
										{#if j < project.stack.length - 1}<span class="text-primary">•</span>{/if}
									{/each}
								</div>
								<Typography variant="bodySm" class="uppercase text-white/60"
									>{project.category}</Typography
								>
								<div class="flex flex-wrap gap-x-3 gap-y-0.5">
									{#each project.outcomes as outcome (outcome)}
										<span class="text-[10px] text-primary/70">{outcome}</span>
									{/each}
								</div>
							</div>
							<div class="flex justify-end">
								<ArrowUpRight
									class="size-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</Container>
</Section>
