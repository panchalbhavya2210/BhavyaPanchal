<script lang="ts">
	import Container from './ui/container.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<footer class="border-t border-border bg-background">
	<Container size="full">
		<div class="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
			<!-- Brand -->
			<div use:reveal>
				<div class="font-heading text-lg font-semibold tracking-[0.2em] text-foreground mb-4">
					BHAVYA
				</div>
				<Typography variant="bodySm" color="muted" class="max-w-xs leading-relaxed">
					Frontend developer & UI engineer based in Ahmedabad, India. Building fast, accessible, and
					scalable digital experiences.
				</Typography>
			</div>

			<!-- Navigation -->
			<div use:reveal={0.06}>
				<Typography variant="caption" class="mb-5 block">Navigation</Typography>
				<div class="space-y-3">
					<a href="/" class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>Home</a
					>
					<a
						href="/about-me"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>About</a
					>
					<a
						href="/projects"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>Projects</a
					>
					<a
						href="/blog"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>Blog</a
					>
					<a
						href="/contact"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>Contact</a
					>
				</div>
			</div>

			<!-- Expertise -->
			<div use:reveal={0.12}>
				<Typography variant="caption" class="mb-5 block">Expertise</Typography>
				<div class="space-y-3">
					<span class="block text-sm text-muted-foreground">React & Next.js</span>
					<span class="block text-sm text-muted-foreground">SvelteKit</span>
					<span class="block text-sm text-muted-foreground">TypeScript</span>
					<span class="block text-sm text-muted-foreground">Performance</span>
					<span class="block text-sm text-muted-foreground">Accessibility</span>
				</div>
			</div>

			<!-- Social -->
			<div use:reveal={0.18}>
				<Typography variant="caption" class="mb-5 block">Connect</Typography>
				<div class="space-y-3">
					<a
						href="https://linkedin.com/in/bhavyapanchal"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						LinkedIn
						<ArrowUpRight
							class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					<a
						href="https://github.com/panchalbhavya2210"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						GitHub
						<ArrowUpRight
							class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					<a
						href="https://x.com/panchalbhavya22"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						X (Twitter)
						<ArrowUpRight
							class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					<a
						href="https://instagram.com/bhavya_2210/"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Instagram
						<ArrowUpRight
							class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div
			class="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-border/50"
			use:reveal={0.2}
		>
			<Typography variant="bodySm" color="muted">
				&copy; 2026 Bhavya Panchal. All rights reserved.
			</Typography>
			<div class="flex items-center gap-2 text-xs text-muted-foreground">
				<span>Ahmedabad, India</span>
				<span class="text-border">|</span>
				<a href="mailto:panchalbhavya2210@gmail.com" class="hover:text-primary transition-colors">
					panchalbhavya2210@gmail.com
				</a>
			</div>
		</div>
	</Container>
</footer>
