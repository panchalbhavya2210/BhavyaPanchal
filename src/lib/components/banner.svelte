<script lang="ts">
	import Container from './ui/container.svelte';
	import Typography from './ui/typography.svelte';
	import Bhavya from '../assets/bhavya-panchal.webp';
	import ButtonPrimary from './ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import Grid from './ui/grid.svelte';
</script>

<div class="relative min-h-screen overflow-hidden max-sm:pt-20 bg-[#d0c8ca]">
	<Container size="full" class="sm:pr-0! h-dvh">
		<Grid cols={2} class="h-full place-items-center justify-between">
			<div class="mr-auto">
				<div class="flex flex-col -space-y-4">
					<h1 class="sr-only">Bhavya Panchal — Frontend Developer &amp; UI Engineer</h1>
					<Typography variant="lead" class="mb-4 text-black!" animate
						>I AM <span class="text-primary">BHAVYA</span> PANCHAL.</Typography
					>
					<Typography variant="h1" animate class="font-normal" aria-hidden="true">
						DES<span class="text-primary">I</span>GN
					</Typography>
					<Typography variant="h1" animate class="text-primary font-normal" aria-hidden="true"
						>CODE <span class="text-black">&</span></Typography
					>
					<Typography variant="h1" animate class="font-normal" aria-hidden="true">CRAFT</Typography>

					<Typography variant="lead" class="mt-4 text-black!" animate
						>CRAFTING MEANINGFUL EXPERIENCES WITH PRECISION.</Typography
					>
				</div>
				<div class="mt-8">
					<ButtonPrimary icon={Arrow}>VIEW PROJECTS</ButtonPrimary>
				</div>
			</div>
			<div class="h-full">
				<img
					src={Bhavya}
					alt="Bhavya Panchal Web Developer"
					class="w-full h-full object-cover object-center"
				/>
			</div>
		</Grid>
	</Container>
</div>
