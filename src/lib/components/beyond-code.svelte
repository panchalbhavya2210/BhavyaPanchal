<script lang="ts">
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import SectionHeader from './ui/section-header.svelte';
	import Typography from './ui/typography.svelte';
	import { revealCard } from '$lib/actions/revealCard';

	const passions = [
		{
			title: 'Photography',
			sub: 'Capturing light & composition',
			image: 'https://picsum.photos/seed/photography/800/1000',
			span: 'md:col-span-2 md:row-span-2',
			aspect: 'aspect-[3/4] md:aspect-auto'
		},
		{
			title: 'Travel',
			sub: 'New places, fresh perspectives',
			image: 'https://picsum.photos/seed/travel/600/600',
			span: '',
			aspect: 'aspect-square'
		},
		{
			title: 'Music',
			sub: 'Playlists that shape the code',
			image: 'https://picsum.photos/seed/music/600/600',
			span: '',
			aspect: 'aspect-square'
		},
		{
			title: 'Gaming',
			sub: 'Strategy meets problem-solving',
			image: 'https://picsum.photos/seed/gaming/1000/500',
			span: 'md:col-span-2',
			aspect: 'aspect-[16/9]'
		},
		{
			title: 'Reading',
			sub: 'Design books & typography',
			image: 'https://picsum.photos/seed/reading/600/600',
			span: '',
			aspect: 'aspect-square'
		},
		{
			title: 'Coffee',
			sub: 'The ritual before the commit',
			image: 'https://picsum.photos/seed/coffee/600/600',
			span: '',
			aspect: 'aspect-square'
		}
	];
</script>

<Section size="sm">
	<Container size="full">
		<SectionHeader align="start" margin="xl">
			<Typography variant="h2" class="font-normal" animate>
				OFF THE <span class="text-primary">SCREEN.</span>
			</Typography>
			{#snippet description()}
				<Typography variant="body" class="text-muted-foreground" animate>
					When I'm not pushing pixels or refactoring components, here's what keeps me inspired.
				</Typography>
			{/snippet}
		</SectionHeader>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
			{#each passions as item, i (item.title)}
				<div
					class="group relative overflow-hidden bg-black {item.span} {item.aspect}"
					use:revealCard={i}
				>
					<img
						src={item.image}
						alt={item.title}
						loading="lazy"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
					></div>
					<div class="relative z-10 flex h-full flex-col justify-end p-6">
						<Typography variant="h4" class="font-medium text-white">
							{item.title}
						</Typography>
						<Typography variant="bodySm" class="text-white/60 mt-1">
							{item.sub}
						</Typography>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>
