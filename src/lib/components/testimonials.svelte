<script lang="ts">
	import Section from './ui/section.svelte';
	import Container from './ui/container.svelte';
	import SectionHeader from './ui/section-header.svelte';
	import Typography from './ui/typography.svelte';
	import Star from '@lucide/svelte/icons/star';
	import { testimonials } from '$lib/data/testimonials';
	import { reveal } from '$lib/actions/reveal';
</script>

<Section size="sm" class="bg-white">
	<Container size="full">
		<SectionHeader align="row" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				WHAT CLIENTS <span class="text-primary">SAY.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" color="muted">
					Feedback from businesses I have helped build fast, accessible, and high-converting web
					applications.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="grid gap-6 sm:grid-cols-3">
			{#each testimonials as testimonial, i (testimonial.name + i)}
				<div
					class="border border-border/50 bg-background p-8 flex flex-col"
					use:reveal={i * 0.08}
				>
					<div class="flex gap-1 mb-4">
						{#each Array(testimonial.rating) as _, j (j)}
							<Star class="size-4 text-primary fill-primary" />
						{/each}
					</div>
					<blockquote class="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
						&ldquo;{testimonial.text}&rdquo;
					</blockquote>
					<div class="pt-4 border-t border-border/40">
						<p class="text-sm font-medium">{testimonial.company}</p>
						<p class="text-xs text-muted-foreground">{testimonial.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>
