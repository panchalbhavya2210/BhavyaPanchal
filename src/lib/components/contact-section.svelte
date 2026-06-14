<script lang="ts">
	import { enhance } from '$app/forms';
	import ButtonPrimary from './ui/button-primary.svelte';
	import Container from './ui/container.svelte';
	import Section from './ui/section.svelte';
	import Typography from './ui/typography.svelte';
	import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle, AlertCircle } from '@lucide/svelte';
	import FooterImg from '../assets/bhavya-panchal-footer.jpg';
	let form = $state({
		name: '',
		email: '',
		subject: 'Project inquiry',
		message: '',
		updates: false
	});

	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');

	let formEl = $state<HTMLFormElement>();
</script>

<Section class="sm pb-0 pr-0!" size="sm">
	<footer>
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
				<div class="space-y-12">
					<div class="space-y-5 mt-auto max-md:mb-6">
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

				<form
					bind:this={formEl}
					method="POST"
					use:enhance={() => {
						submitting = true;
						error = '';

						return async ({ result }) => {
							submitting = false;

							if (result.type === 'success') {
								success = true;
								form = {
									name: '',
									email: '',
									subject: 'Project inquiry',
									message: '',
									updates: false
								};
							}

							if (result.type === 'failure') {
								const data = result.data as { error?: string } | undefined;
								error = data?.error ?? 'Something went wrong. Please try again.';
							}
						};
					}}
					class="space-y-6 lg:mr-2 max-md:mb-6"
				>
					{#if success}
						<div class="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
							<CheckCircle class="size-5 text-green-600 mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-green-800">Message sent successfully!</p>
								<p class="text-sm text-green-700 mt-0.5">
									Thanks for reaching out. I'll get back to you soon.
								</p>
							</div>
						</div>
					{/if}

					{#if error}
						<div class="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
							<AlertCircle class="size-5 text-red-600 mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-red-800">Error</p>
								<p class="text-sm text-red-700 mt-0.5">{error}</p>
							</div>
						</div>
					{/if}

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
								name="name"
								bind:value={form.name}
								placeholder="John Doe"
								required
								class="w-full border-0 border-b outline-0 ring-0 border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
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
								name="email"
								bind:value={form.email}
								placeholder="john@example.com"
								required
								class="w-full border-0 border-b outline-0 ring-0 border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
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
							name="subject"
							bind:value={form.subject}
							placeholder="Project inquiry"
							class="w-full border-0 border-b outline-0 ring-0 border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
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
							name="message"
							bind:value={form.message}
							rows="4"
							placeholder="Tell me about your project"
							required
							class="w-full resize-none border-0 border-b outline-0 ring-0 border-black/20 bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
						></textarea>
					</div>

					{#if success}
						<a href="/" class="inline-block">
							<ButtonPrimary type="button" icon={ArrowUpRight}>
								<span class="font-heading relative z-10 text-sm font-medium">BACK TO HOME</span>
							</ButtonPrimary>
						</a>
					{:else}
						<ButtonPrimary type="submit" icon={ArrowUpRight} disabled={submitting}>
							<span class="font-heading relative z-10 text-sm font-medium">
								{submitting ? 'SENDING...' : 'SEND MESSAGE'}
							</span>
						</ButtonPrimary>
					{/if}
				</form>

				<div class="bg-black px-0! md:px-0 lg:px-0 pb-6 flex flex-col justify-between">
					<div class="space-y-8">
						<div class="aspect-4/5 w-full overflow-hidden bg-neutral-800">
							<div class="flex h-full items-center justify-center">
								<img src={FooterImg} alt="Bhavya Panchal" loading="lazy" />
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

							<div class="flex items-center gap-6">
								<a
									href="https://linkedin.com/in/bhavyapanchal"
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
									href="https://x.com/panchalbhavya22"
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
									href="https://github.com/panchalbhavya2210"
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
									href="https://instagram.com/bhavya_2210/"
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

					<div class="mt-6 px-6">
						<Typography variant="bodySm" class="text-neutral-500">
							&copy; 2026 Bhavya Panchal. All rights reserved.
						</Typography>
					</div>
				</div>
			</div>
		</Container>
	</footer>
</Section>
