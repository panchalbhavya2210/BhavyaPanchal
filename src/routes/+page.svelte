<script lang="ts">
	import Banner from '$lib/components/banner.svelte';
	import Container from '$lib/components/ui/container.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import ButtonPrimary from '$lib/components/ui/button-primary.svelte';
	import Arrow from '@lucide/svelte/icons/arrow-up-right';
	import SeoMeta from '$lib/components/seo-meta.svelte';
	import JsonLd from '$lib/components/json-ld.svelte';
	import { site, webSiteSchema, personSchema, organizationSchema, portfolioSchema } from '$lib/seo';

	const meta = {
		title: `${site.name} — Frontend Developer &amp; UI Engineer | Ahmedabad, India`,
		description:
			'Bhavya Panchal is a frontend developer and UI engineer from Ahmedabad, India. Crafting fast, accessible, and scalable digital experiences with React, SvelteKit, TypeScript, and modern web technologies. Available for hire.',
		keywords:
			'Bhavya Panchal, frontend developer Ahmedabad, React developer Ahmedabad, UI engineer India, hire frontend developer, SvelteKit developer, web developer portfolio, TypeScript developer, Next.js developer, Ahmedabad, Gujarat',
		path: '/',
		image: site.image,
		type: 'website'
	} as const;
</script>

<SeoMeta {meta} />
<JsonLd schemas={[webSiteSchema(), personSchema(), organizationSchema(), portfolioSchema()]} />

<Banner />

<Section size="md" class="bg-white">
	<Container size="full">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="space-y-6">
				<Typography variant="h2" class="font-normal" animate>
					I BUILD FOR <span class="text-primary">THE WEB.</span>
				</Typography>
				<Typography variant="lead" color="muted" class="max-w-xl">
					Clean UI, performance, accessibility and scalable frontend architecture — that's my craft.
				</Typography>
				<div class="flex flex-wrap gap-4 pt-4">
					<ButtonPrimary href="/projects" icon={Arrow}>VIEW PROJECTS</ButtonPrimary>
					<ButtonPrimary href="/about-me" variant="secondary" icon={Arrow}>ABOUT ME</ButtonPrimary>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-4">
					<div class="border border-border/50 p-6 text-center">
						<Typography variant="h3" class="text-primary font-bold">3+</Typography>
						<Typography variant="bodySm" color="muted">Years Experience</Typography>
					</div>
					<div class="border border-border/50 p-6 text-center">
						<Typography variant="h3" class="text-primary font-bold">15+</Typography>
						<Typography variant="bodySm" color="muted">Projects Delivered</Typography>
					</div>
				</div>
				<div class="space-y-4 pt-6">
					<div class="border border-border/50 p-6 text-center">
						<Typography variant="h3" class="text-primary font-bold">8+</Typography>
						<Typography variant="bodySm" color="muted">Technologies</Typography>
					</div>
					<div class="border border-border/50 p-6 text-center">
						<Typography variant="h3" class="text-primary font-bold">100%</Typography>
						<Typography variant="bodySm" color="muted">Client Satisfaction</Typography>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>
