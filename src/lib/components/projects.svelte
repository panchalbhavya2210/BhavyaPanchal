<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import { featuredProject, projects } from '$lib/data/projects';
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
				<a href={featuredProject.href} class="group relative w-full overflow-hidden min-h-100">
					<img
						src={featuredProject.image}
						alt={featuredProject.title}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>

					<div class="absolute inset-0 bg-linear-to-r from-black/10 via-black/20 to-black/70"></div>

					<div
						class="relative z-10 ml-auto flex h-full lg:max-w-[49%] flex-col justify-between bg-black/55 p-8 backdrop-blur-md"
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
			<div class="grid gap-4 lg:grid-cols-3">
				{#each projects.slice(0, 3) as project (project.id)}
					<a href={project.href} class="group relative aspect-4/4 overflow-hidden bg-black">
						<img
							src={project.image}
							alt={project.title}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>

						<div
							class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
						></div>

						<div class="relative z-10 flex h-full flex-col justify-end p-8">
							<div class="space-y-4">
								<Typography variant="h4" class="font-normal! uppercase text-white">
									{project.title}
								</Typography>

								<div
									class="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-white"
								>
									{#each project.stack as tech, i (i)}
										<span>{tech}</span>

										{#if i < project.stack.length - 1}
											<span class="text-primary">•</span>
										{/if}
									{/each}
								</div>

								<Typography variant="bodySm" class="uppercase text-white/60">
									{project.category}
								</Typography>
							</div>

							{#if project.href !== ''}
								<div class="flex justify-end">
									<ArrowUpRight
										class="size-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
									/>
								</div>
							{/if}
						</div>
					</a>
				{/each}
			</div>

			<!-- Row 3 -->
			<div class="grid gap-4 lg:grid-cols-2">
				{#each projects.slice(3) as project (project.id)}
					<a
						href={project.href}
						class="group relative aspect-square lg:aspect-21/9 overflow-hidden bg-black"
					>
						<img
							src={project.image}
							alt={project.title}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>

						<div
							class="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"
						></div>

						<div class="relative z-10 flex h-full flex-col justify-end p-8">
							<div class="space-y-4">
								<Typography variant="h4" class="font-normal! uppercase text-white">
									{project.title}
								</Typography>

								<div
									class="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-white"
								>
									{#each project.stack as tech, i (i)}
										<span>{tech}</span>

										{#if i < project.stack.length - 1}
											<span class="text-primary">•</span>
										{/if}
									{/each}
								</div>

								<Typography variant="bodySm" class="uppercase text-white/60">
									{project.category}
								</Typography>
							</div>

							{#if project.href !== ''}
								<div class="flex justify-end">
									<ArrowUpRight
										class="size-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
									/>
								</div>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</div>
	</Container>
</Section>
