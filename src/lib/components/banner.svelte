<script lang="ts">
	import Container from './ui/container.svelte';
	import Typography from './ui/typography.svelte';
	import Bhavya from '../assets/bhavya-panchal.webp';
	import ButtonPrimary from './ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import Grid from './ui/grid.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<div class="relative min-h-screen overflow-hidden max-sm:pt-24">
	<Container size="full" class="sm:pr-0! h-dvh">
		<Grid cols={2} class="h-full place-items-center justify-between">
			<div class="mr-auto max-w-xl">
				<div class="flex flex-col">
					<Typography variant="h1" animate class="font-normal" as="div" aria-hidden="true">
						DES<span class="text-primary">I</span>GN
					</Typography>
					<Typography
						variant="h1"
						animate
						class="text-primary font-normal"
						as="div"
						aria-hidden="true">CODE <span class="text-black">&</span></Typography
					>
					<Typography variant="h1" animate class="font-normal" as="div" aria-hidden="true"
						>CRAFT</Typography
					>

					<h1 class="sr-only">Bhavya Panchal — Design, Code &amp; Craft</h1>

					<p class="mt-4 font-heading text-lg sm:text-xl font-semibold tracking-tight text-black">
						Frontend Developer &amp; UI Engineer
					</p>

					<p class="mt-3 text-base leading-7 text-black/70 max-w-md">
						I build fast, accessible, and scalable web applications for businesses worldwide. Based
						in Ahmedabad, India — available for freelance and full-time roles.
					</p>
				</div>
				<div class="mt-8 flex flex-wrap gap-4" use:reveal={0.35}>
					<ButtonPrimary href="/projects" icon={Arrow}>VIEW PROJECTS</ButtonPrimary>
					<ButtonPrimary href="/contact" variant="secondary" icon={Arrow}
						>GET IN TOUCH</ButtonPrimary
					>
				</div>
			</div>
			<div class="h-full w-full" use:reveal={0.2}>
				<img
					src={Bhavya}
					width="720"
					height="960"
					alt="Bhavya Panchal — Frontend Developer and UI Engineer from Ahmedabad, India"
					class="w-full h-full object-cover object-center"
					fetchpriority="high"
				/>
			</div>
		</Grid>
	</Container>
</div>
