<script lang="ts">
	import { site, personSchema, webSiteSchema } from '$lib/seo';
	import { selectedProjects } from '$lib/data/projects';

	const skillGroups = [
		{
			label: 'Frontend',
			items: [
				'JavaScript',
				'TypeScript',
				'React',
				'Next.js',
				'Svelte',
				'HTML & CSS',
				'Tailwind CSS'
			]
		},
		{
			label: 'Interface',
			items: [
				'Responsive design',
				'Component-based development',
				'Figma-to-code',
				'Accessible interfaces'
			]
		},
		{
			label: 'Tools & integrations',
			items: ['Git', 'REST APIs', 'Firebase', 'Supabase', 'Appwrite', 'Third-party services']
		}
	].map((group) => ({ ...group, text: group.items.join(' · ') }));

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [personSchema(), webSiteSchema()]
	};

	// JSON-LD is assembled from characters so the source never contains literal
	// script tag sequences (which would terminate this component's script block).
	// SvelteKit prerenders the page, so the tag lands verbatim in the static <head>.
	const lt = String.fromCharCode(60);
	const jsonLd =
		lt + 'script type="application/ld+json">' + JSON.stringify(structuredData) + lt + '/script>';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={`${site.url}/`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={`${site.url}/`} />
	<meta property="og:image" content={`${site.url}${site.ogImage}`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Bhavya Panchal — Frontend Developer" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={`${site.url}${site.ogImage}`} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- markup is built from JSON.stringify of hard-coded schema data, never user input -->
	{@html jsonLd}
</svelte:head>

<article class="sheet" id="top">
	<!-- ── masthead ──────────────────────────────────────────────────── -->
	<header class="masthead">
		<p class="masthead-name">{site.name}</p>
		<p class="masthead-meta">
			Frontend Developer <span aria-hidden="true">·</span> Ahmedabad, India
		</p>
	</header>

	<!-- ── introduction ─────────────────────────────────────────────── -->
	<section class="hero" aria-labelledby="hero-title">
		<p class="kicker"><span class="kicker-line" aria-hidden="true"></span>Frontend Developer</p>

		<h1 id="hero-title" class="hero-title">
			I build<br class="narrow-break" />
			<em class="accent">thoughtful things</em><br class="wide-break" /> for the web.
		</h1>

		<div class="hero-foot">
			<div>
				<p class="hero-lead">
					I turn designs into responsive, working interfaces, paying attention to the small details
					that make a website feel complete.
				</p>
				<p class="hero-cta">
					<a class="tlink tlink--down" href="#work">
						Explore selected work
						<svg
							width="13"
							height="13"
							viewBox="0 0 14 14"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M3.4 3.4 10.6 10.6" />
							<path d="M10.6 5.4v5.2H5.4" />
						</svg>
					</a>
				</p>
			</div>

			<figure class="hero-figure" aria-hidden="true">
				<svg
					class="hero-sketch"
					viewBox="0 0 200 126"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					focusable="false"
				>
					<g class="sketch-frame">
						<path
							d="M14 7.4C56 6.2 142 6.2 185 7.6c3 .2 5 2.3 5.2 5.4.7 30 .6 64 0 96-.1 3.4-2.2 5.4-5.4 5.6-50 1.6-118 1.4-169 .2-3.4-.1-5.3-2.2-5.4-5.5-.7-32-.7-66 0-96C10.5 9.8 11.9 7.7 14 7.4Z"
						/>
						<path d="M9.4 27.6c60-1 121-.8 181.2.2" />
						<circle cx="20.5" cy="17.2" r="2.3" />
						<circle cx="29.5" cy="17.2" r="2.3" />
					</g>
					<g class="sketch-content">
						<path d="M24 45.5c22-1 51-.8 76-.2" stroke-width="2.2" />
						<path d="M24 56.5c19-.7 38-.5 56 .1" />
						<path d="M24 65.5c16-.6 31-.4 45 .2" />
						<rect x="24" y="76" width="72" height="31" rx="2" transform="rotate(-0.7 60 91.5)" />
						<path d="M28 80.5l64 22" />
						<path d="M92 80.5l-64 22" />
						<path d="M112 85c18-.8 38-.6 56 .1" />
						<path d="M112 95c13-.6 28-.4 40 .1" />
						<rect
							x="112"
							y="102.5"
							width="38"
							height="12"
							rx="4"
							transform="rotate(-0.5 131 108.5)"
						/>
					</g>
					<g class="sketch-select">
						<rect
							x="18"
							y="70"
							width="84"
							height="42"
							rx="2"
							stroke-dasharray="3.5 3.5"
							transform="rotate(-0.7 60 91)"
						/>
						<rect class="sketch-handle" x="15.5" y="67.5" width="5" height="5" rx="0.8" />
						<rect class="sketch-handle" x="99.5" y="67.5" width="5" height="5" rx="0.8" />
						<rect class="sketch-handle" x="15.5" y="109.5" width="5" height="5" rx="0.8" />
						<rect class="sketch-handle" x="99.5" y="109.5" width="5" height="5" rx="0.8" />
						<path class="sketch-cursor" d="M96 104l6.6 16.2 2.5-6.5 6.5-1.2Z" />
					</g>
				</svg>
				<figcaption class="sketch-note">
					<svg
						class="sketch-arrow"
						viewBox="0 0 30 26"
						fill="none"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
						stroke-linejoin="round"
						focusable="false"
					>
						<path d="M28 24C19 21.4 9.5 15.5 5 4.5" />
						<path d="M5 4.5c.4 2.7 1.3 5 2.7 6.9" />
						<path d="M5 4.5c2.7.3 5 .9 7 1.9" />
					</svg>
					<span class="sketch-text">placed by hand</span>
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- ── 01 · about ───────────────────────────────────────────────── -->
	<section id="about" class="chapter" aria-labelledby="about-title">
		<div class="about-head">
			<p class="kicker">
				<span class="kicker-num">01</span>
				<span class="kicker-sep" aria-hidden="true">/</span>
				A little about me
			</p>
			<h2 id="about-title" class="section-title">Design files in. Working interfaces out.</h2>

			<svg class="about-orbit" viewBox="0 0 76 50" fill="none" aria-hidden="true" focusable="false">
				<path
					d="M13 25.5C13 14.5 28.5 6.5 45.5 7.5c15.5.9 26 8 25 16.8-1 8.7-15.5 17-32.5 17C21.5 41 13.2 33.8 13 25.5Z"
					stroke="currentColor"
					stroke-width="1.3"
				/>
				<circle cx="62.5" cy="13" r="2.6" fill="currentColor" stroke="none" />
			</svg>
		</div>

		<div class="about-body">
			<p class="body-copy">
				I'm a frontend developer based in Ahmedabad, India. I enjoy turning design files into
				working interfaces, exploring how products fit together, and paying attention to the details
				that make a website feel complete.
			</p>
			<p class="about-fact">
				So far that's meant <span class="about-fact-num">20+</span> websites built from Figma and PSD
				designs.
			</p>
		</div>
	</section>

	<!-- ── 02 · skills ──────────────────────────────────────────────── -->
	<section id="skills" class="chapter" aria-labelledby="skills-title">
		<p class="kicker">
			<span class="kicker-num">02</span>
			<span class="kicker-sep" aria-hidden="true">/</span>
			What I work with
		</p>
		<h2 id="skills-title" class="section-title">A small, honest toolkit.</h2>

		<dl class="skills-index">
			{#each skillGroups as group (group.label)}
				<div class="skill-row">
					<dt class="skill-label">{group.label}</dt>
					<dd class="skill-items">{group.text}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<!-- ── 03 · selected work ───────────────────────────────────────── -->
	<section id="work" class="chapter" aria-labelledby="work-title">
		<p class="kicker">
			<span class="kicker-num">03</span>
			<span class="kicker-sep" aria-hidden="true">/</span>
			Selected work
		</p>
		<h2 id="work-title" class="section-title">Things I've built.</h2>

		<ol class="worklist">
			{#each selectedProjects as project, index (project.id)}
				<li class="work-row">
					<span class="work-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
					<div>
						<h3 class="work-title">
							{#if project.href}
								<a
									class="project-link"
									href={project.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${project.title} — opens in a new tab`}
								>
									<span>{project.title}</span>&nbsp;<svg
										viewBox="0 0 12 12"
										fill="none"
										stroke="currentColor"
										stroke-width="1.6"
										stroke-linecap="round"
										stroke-linejoin="round"
										aria-hidden="true"
										focusable="false"
									>
										<path d="M2.5 9.5 9.5 2.5" />
										<path d="M4 2.5h5.5V8" />
									</svg>
								</a>
							{:else}
								{project.title}
							{/if}
						</h3>
						<p class="work-desc">{project.description}</p>
						<p class="work-stack">{project.stack.join(' · ')}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<!-- ── 04 · contact ─────────────────────────────────────────────── -->
	<section id="contact" class="chapter" aria-labelledby="contact-title">
		<p class="kicker">
			<span class="kicker-num">04</span>
			<span class="kicker-sep" aria-hidden="true">/</span>
			Say hello
		</p>
		<h2 id="contact-title" class="section-title">Have something in mind?</h2>
		<p class="body-copy contact-copy">
			For projects, questions, or a good conversation about the web, feel free to reach out.
		</p>

		<ul class="contact-links">
			<li>
				<a class="tlink" href={`mailto:${site.email}`}>
					{site.email}
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
						focusable="false"
					>
						<path d="M2.5 9.5 9.5 2.5" />
						<path d="M4 2.5h5.5V8" />
					</svg>
				</a>
			</li>
			<li>
				<a class="tlink" href={site.github} target="_blank" rel="noopener noreferrer">
					GitHub
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
						focusable="false"
					>
						<path d="M2.5 9.5 9.5 2.5" />
						<path d="M4 2.5h5.5V8" />
					</svg>
				</a>
			</li>
			<li>
				<a class="tlink" href={site.linkedin} target="_blank" rel="noopener noreferrer">
					LinkedIn
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
						focusable="false"
					>
						<path d="M2.5 9.5 9.5 2.5" />
						<path d="M4 2.5h5.5V8" />
					</svg>
				</a>
			</li>
		</ul>
	</section>

	<!-- ── colophon ─────────────────────────────────────────────────── -->
	<footer class="colophon">
		<p>© 2026 Bhavya Panchal</p>
		<a class="tlink" href="#top">
			Back to top
			<svg
				width="12"
				height="12"
				viewBox="0 0 14 14"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M7 11.6V2.6" />
				<path d="M3.4 6.2 7 2.6l3.6 3.6" />
			</svg>
		</a>
	</footer>
</article>
