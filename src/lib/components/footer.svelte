<script lang="ts">
	import ButtonPrimary from './ui/button-primary.svelte';
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight, Mail, Phone, MapPin } from '@lucide/svelte';

	let form = $state({
		name: '',
		email: '',
		subject: 'Project inquiry',
		message: '',
		updates: false
	});

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', form);
	}
</script>

<Section class="sm bg-white pb-0 pr-0!" size="sm">
	<footer>
		<!-- Main Contact Section -->
		<Container size="full">
			<div class=" max-w-1/2">
				<Typography variant="h2" as="h2" animate class="font-normal uppercase">
					Let's Create Something
					<span class="text-primary">Great</span>
					Together.
				</Typography>

				<Typography variant="body" color="muted" class="max-w-md">
					Have a project in mind or just want to say hello? I'd love to hear from you.
				</Typography>
			</div>
			<div class="grid lg:grid-cols-[1fr_1fr_420px] mt-8">
				<!-- Left: Info Column -->
				<div class="space-y-12">
					<!-- Contact Info -->
					<div class="space-y-5 mt-auto">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
								<Mail class="size-4 text-primary" />
							</div>
							<div>
								<Typography variant="caption" class="mb-0.5">Email</Typography>
								<Typography variant="body">panchalbhavya2210@gmail.com</Typography>
							</div>
						</div>

						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
								<Phone class="size-4 text-primary" />
							</div>
							<div>
								<Typography variant="caption" class="mb-0.5">Phone</Typography>
								<Typography variant="body">+91 90818 65254</Typography>
							</div>
						</div>

						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
								<MapPin class="size-4 text-primary" />
							</div>
							<div>
								<Typography variant="caption" class="mb-0.5">Location</Typography>
								<Typography variant="body">Ahmedabad, Gujarat - IN</Typography>
							</div>
						</div>
					</div>
				</div>

				<!-- Center: Contact Form -->
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="space-y-2">
							<label
								for="name"
								class="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
							>
								Your Name
							</label>
							<input
								type="text"
								id="name"
								bind:value={form.name}
								placeholder="John Doe"
								class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
							/>
						</div>

						<div class="space-y-2">
							<label
								for="email"
								class="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								bind:value={form.email}
								placeholder="john@example.com"
								class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label
							for="subject"
							class="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							bind:value={form.subject}
							placeholder="Project inquiry"
							class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="message"
							class="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
						>
							Message
						</label>
						<textarea
							id="message"
							bind:value={form.message}
							rows="4"
							placeholder="Tell me about your project"
							class="w-full resize-none border-0 border-b border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
						></textarea>
					</div>

					<!-- Submit Button -->
					<ButtonPrimary type="submit" icon={ArrowUpRight}>
						<span class="font-heading relative z-10 text-sm font-medium">SEND MESSAGE</span>
					</ButtonPrimary>
				</form>

				<!-- Right: Dark Panel -->
				<div class="bg-black px-0 pb-6 flex flex-col justify-between">
					<div class="space-y-8">
						<!-- Image Placeholder -->
						<div class="aspect-4/5 w-full overflow-hidden bg-neutral-800">
							<div class="flex h-full items-center justify-center">
								<span class="text-sm text-neutral-500">Image Placeholder</span>
							</div>
						</div>

						<div class="space-y-4 px-6">
							<div>
								<Typography variant="caption" class="text-neutral-400 mb-2">
									PREFER TO CONNECT?
								</Typography>
								<Typography variant="body" class="text-neutral-300">
									I'm always open to new opportunities and interesting conversations.
								</Typography>
							</div>

							<!-- Social Links -->
							<div class="flex items-center gap-6">
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									class="group flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
								>
									<span class="text-xs font-medium uppercase tracking-wider">LN</span>
									<ArrowUpRight
										class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									class="group flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
								>
									<span class="text-xs font-medium uppercase tracking-wider">TW</span>
									<ArrowUpRight
										class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									class="group flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
								>
									<span class="text-xs font-medium uppercase tracking-wider">GH</span>
									<ArrowUpRight
										class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									class="group flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
								>
									<span class="text-xs font-medium uppercase tracking-wider">IG</span>
									<ArrowUpRight
										class="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
							</div>
						</div>
					</div>

					<!-- Copyright -->
					<div class="mt-6 px-6">
						<Typography variant="bodySm" class="text-neutral-500">
							© 2026 Your Name. All rights reserved.
						</Typography>
					</div>
				</div>
			</div>
		</Container>
	</footer>
</Section>
