<script lang="ts">
	import Container from './ui/container.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
</script>

<footer class="border-t border-border bg-background">
	<Container size="full">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
			<div class="flex items-center gap-6">
				<a
					href="https://linkedin.com/in/bhavyapanchal"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
				>
					<span class="text-xs font-medium uppercase tracking-wider">LinkedIn</span>
					<ArrowUpRight class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
				<a
					href="https://x.com/panchalbhavya22"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
				>
					<span class="text-xs font-medium uppercase tracking-wider">X</span>
					<ArrowUpRight class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
				<a
					href="https://github.com/panchalbhavya2210"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
				>
					<span class="text-xs font-medium uppercase tracking-wider">GitHub</span>
					<ArrowUpRight class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
				<a
					href="https://instagram.com/bhavya_2210/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
				>
					<span class="text-xs font-medium uppercase tracking-wider">Instagram</span>
					<ArrowUpRight class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
			</div>
			<Typography variant="bodySm" color="muted">
				&copy; 2026 Bhavya Panchal. All rights reserved.
			</Typography>
		</div>
	</Container>
</footer>
