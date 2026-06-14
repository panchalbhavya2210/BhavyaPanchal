export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime: string;
	tags: string[];
	image: string;
	content: string;
};

export const posts: BlogPost[] = [
	{
		slug: 'react-performance-optimization-techniques',
		title: 'React Performance Optimization: Techniques Every Frontend Developer Should Know',
		description:
			'Practical strategies to improve React app performance — from memoization and code splitting to bundle analysis and Core Web Vitals.',
		date: '2026-05-20',
		readTime: '8 min',
		tags: ['React', 'Performance', 'JavaScript', 'Core Web Vitals'],
		image: 'https://picsum.photos/seed/react-perf/1200/630',
		content: `<img src="https://picsum.photos/seed/react-perf/1200/630" alt="React Performance Optimization" class="w-full rounded-lg mb-8" loading="lazy" />

<p>Performance is not a feature — it's a <strong>requirement</strong>. In a market where users abandon sites that take longer than 3 seconds to load, frontend developers must treat performance as a first-class concern.</p>

<p>Having spent 3+ years building production React applications as a <strong>frontend developer in Ahmedabad</strong>, I've seen firsthand how small performance wins compound into massive user experience gains.</p>

<h2>1. Master React.memo and useMemo</h2>

<p>The most common performance bottleneck in React apps is unnecessary re-renders. <code>React.memo</code> prevents a component from re-rendering when its props haven't changed:</p>

<pre><code>const ExpensiveList = React.memo(({ items }: { items: Item[] }) => {
  return items.map(item => &lt;ListItem key={item.id} {...item} />);
});</code></pre>

<p>Pair it with <code>useMemo</code> for expensive computations and <code>useCallback</code> for stable function references passed to memoized children.</p>

<h2>2. Code Splitting with React.lazy</h2>

<p>Route-based code splitting is the single highest-ROI performance optimisation you can make. Split your bundle at route boundaries:</p>

<pre><code>const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    &lt;Suspense fallback={&lt;LoadingSpinner />}&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard />} /&gt;
        &lt;Route path="/settings" element={&lt;Settings />} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

<p>On a recent e-commerce project, code splitting reduced the initial JavaScript payload by <strong>47%</strong> and improved Time to Interactive by <strong>1.8 seconds</strong>.</p>

<img src="https://picsum.photos/seed/code-split/800/400" alt="Code splitting illustration" class="w-full rounded-lg my-8" loading="lazy" />

<h2>3. Optimise Images and Fonts</h2>

<p>Images typically account for 60-65% of page weight. Use <code>next/image</code> (Next.js) or manual <code>&lt;picture&gt;</code> elements with WebP/AVIF formats, lazy loading, and proper sizing.</p>

<p>For fonts, use <code>font-display: swap</code> and subset to only the characters you need. On a portfolio site I built with SvelteKit, font subsetting alone saved 120KB.</p>

<h2>4. Monitor Core Web Vitals</h2>

<p>Set up real-user monitoring (RUM) with the <code>web-vitals</code> library. Track LCP, FID/INP, and CLS in production:</p>

<pre><code>import { onLCP, onINP, onCLS } from 'web-vitals';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);</code></pre>

<p>At SolePoint Solutions, we track Core Web Vitals across all client projects. The data drives our optimisation backlog — if LCP exceeds 2.5s, it becomes a sprint priority.</p>

<img src="https://picsum.photos/seed/web-vitals/800/400" alt="Core Web Vitals dashboard" class="w-full rounded-lg my-8" loading="lazy" />

<h2>Key Takeaways</h2>

<ul>
<li>Memoization is a scalpel, not a hammer — only memoize when profiling shows it's needed</li>
<li>Code splitting at route boundaries is the easiest performance win</li>
<li>Image optimisation alone can cut page weight by 40-60%</li>
<li>Measure before you optimise — always start with Lighthouse or WebPageTest</li>
</ul>

<p>Performance optimisation is an ongoing process, not a one-time task. Build a culture of measurement, and the wins will follow.</p>`
	},
	{
		slug: 'building-accessible-web-applications',
		title: "Building Accessible Web Applications: A Frontend Developer's Guide to WCAG 2.1 AA",
		description:
			'Learn how to build web applications that work for everyone — covering semantic HTML, ARIA, keyboard navigation, screen reader testing, and practical accessibility patterns.',
		date: '2026-04-12',
		readTime: '10 min',
		tags: ['Accessibility', 'HTML', 'WCAG', 'Frontend'],
		image: 'https://picsum.photos/seed/a11y-web/1200/630',
		content: `<img src="https://picsum.photos/seed/a11y-web/1200/630" alt="Web Accessibility" class="w-full rounded-lg mb-8" loading="lazy" />

<p>Accessibility is not an edge case. <strong>15% of the world's population</strong> lives with some form of disability. As frontend developers, building inclusive experiences is our responsibility — and it makes for better products for everyone.</p>

<p>In my work as a <strong>frontend developer in Ahmedabad</strong>, I've integrated accessibility into projects ranging from corporate websites to complex dashboards. Here's what I've learned.</p>

<img src="https://picsum.photos/seed/a11y-work/800/400" alt="Developer working on accessible UI" class="w-full rounded-lg my-8" loading="lazy" />

<h2>Start with Semantic HTML</h2>

<p>The most powerful accessibility tool is already in your toolbox: <strong>semantic HTML</strong>. A screen reader user navigating by heading can jump directly to content sections. A user navigating by landmark can find the &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt; instantly.</p>

<pre><code>&lt;!-- Bad --&gt;
&lt;div class="header"&gt;...&lt;/div&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;
&lt;div class="content"&gt;...&lt;/div&gt;

&lt;!-- Good --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;nav aria-label="Main navigation"&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>

<p>Work with the platform, not against it. Browsers already understand how to expose semantic elements to assistive technology.</p>

<h2>Keyboard Navigation is Non-Negotiable</h2>

<p>Every interactive element must be reachable and operable via keyboard. This means:</p>

<ul>
<li><strong>Focus management</strong>: Trap focus in modals, restore focus when they close</li>
<li><strong>Visible focus indicators</strong>: Never use <code>outline: none</code> without a replacement</li>
<li><strong>Logical tab order</strong>: Match the visual order with the DOM order</li>
<li><strong>Skip links</strong>: Provide a "Skip to content" link as the first focusable element</li>
</ul>

<pre><code>&lt;a href="#main-content" class="skip-link"&gt;
  Skip to content
&lt;/a&gt;</code></pre>

<h2>ARIA: Use Only When HTML Falls Short</h2>

<p>The first rule of ARIA is: <strong>don't use ARIA if native HTML can do the job</strong>. A <code>&lt;button&gt;</code> is infinitely better than a <code>&lt;div role="button"&gt;</code>.</p>

<pre><code>&lt;!-- Don't do this --&gt;
&lt;div role="button" tabindex="0" onclick="..."&gt;Click me&lt;/div&gt;

&lt;!-- Do this instead --&gt;
&lt;button onclick="..."&gt;Click me&lt;/button&gt;</code></pre>

<p>Use ARIA for complex widgets that HTML can't express natively: tabs, accordions, live regions, and custom selects.</p>

<h2>Test with Real Tools</h2>

<p>Automated tools catch ~30% of issues. Manual testing catches the rest:</p>

<ul>
<li><strong>axe DevTools</strong>: Browser extension for automated checks</li>
<li><strong>VoiceOver / NVDA</strong>: Test with actual screen readers</li>
<li><strong>Tab through your app</strong>: Can you reach and operate everything?</li>
<li><strong>Zoom to 200%</strong>: Does the layout hold up?</li>
<li><strong>WAVE</strong>: Visual overlay showing ARIA roles and structural issues</li>
</ul>

<p>On a recent mobility platform project, systematic accessibility testing helped us achieve <strong>97% WCAG 2.1 AA compliance</strong> while maintaining a 92 Lighthouse Performance score on mobile.</p>

<h2>Key Takeaways</h2>

<ul>
<li>Semantic HTML solves 70% of accessibility problems before you write a single ARIA attribute</li>
<li>Keyboard accessibility is the foundation — if you can't tab through it, it's broken</li>
<li>Test with real assistive technology, not just automated tools</li>
<li>Accessibility improves SEO, usability, and brand perception — it's not just compliance</li>
</ul>`
	},
	{
		slug: 'sveltekit-vs-nextjs-2026',
		title: "SvelteKit vs Next.js in 2026: A Frontend Developer's Honest Comparison",
		description:
			'An unbiased comparison of SvelteKit and Next.js from a developer who has built production apps with both — covering performance, DX, ecosystem, and when to choose which.',
		date: '2026-03-05',
		readTime: '9 min',
		tags: ['SvelteKit', 'Next.js', 'TypeScript', 'JavaScript', 'Frameworks'],
		image: 'https://picsum.photos/seed/svelte-next/1200/630',
		content: `<img src="https://picsum.photos/seed/svelte-next/1200/630" alt="SvelteKit vs Next.js" class="w-full rounded-lg mb-8" loading="lazy" />

<p>As a <strong>frontend developer</strong> who has built production applications with both <strong>SvelteKit</strong> and <strong>Next.js</strong>, I get asked this question a lot. Both are excellent frameworks, but they take fundamentally different approaches to building for the web.</p>

<p>Here's my honest comparison after shipping real projects with both.</p>

<h2>The Philosophical Difference</h2>

<p><strong>Next.js</strong> (React) takes a runtime-heavy approach. Your components are JavaScript functions that run in the browser. React 19's Server Components push more work to the server, but the mental model is still "JavaScript running somewhere."</p>

<p><strong>SvelteKit</strong> takes a compiler-first approach. Your components are compiled away at build time into lean, vanilla JavaScript. There's no virtual DOM, no runtime library shipped to the client. The result: <strong>smaller bundles and faster runtime performance</strong> by default.</p>

<h2>Bundle Size: The Numbers Don't Lie</h2>

<img src="https://picsum.photos/seed/bundle-size/800/400" alt="Bundle size comparison chart" class="w-full rounded-lg my-8" loading="lazy" />

<p>I benchmarked two equivalent apps — a blog with SSR, images, and a contact form:</p>

<table>
<tr><th>Metric</th><th>SvelteKit</th><th>Next.js</th></tr>
<tr><td>JS bundle (gzipped)</td><td>18KB</td><td>87KB</td></tr>
<tr><td>Lighthouse Performance</td><td>98</td><td>91</td></tr>
<tr><td>Time to Interactive</td><td>0.8s</td><td>1.4s</td></tr>
<tr><td>First Contentful Paint</td><td>0.6s</td><td>0.9s</td></tr>
</table>

<p>SvelteKit's compiler-first approach pays off in every metric. The difference is most noticeable on slower devices and networks.</p>

<h2>Developer Experience</h2>

<p><strong>Next.js</strong> benefits from React's massive ecosystem. Need a date picker, form library, or animation tool? There are dozens of battle-tested options. The App Router (stable since Next.js 14) provides a clean file-system routing model with layouts, loading states, and error boundaries built in.</p>

<p><strong>SvelteKit</strong> has a smaller ecosystem, but the quality of what exists is high. Svelte 5's runes (<code>$state</code>, <code>$derived</code>, <code>$effect</code>) make reactivity explicit and predictable. The learning curve is gentler — Svelte feels closer to writing plain HTML, CSS, and JavaScript.</p>

<pre><code>// Svelte 5 runes
let count = $state(0);
let doubled = $derived(count * 2);

function increment() {
  count += 1;
}</code></pre>

<h2>When to Choose Which</h2>

<p><strong>Choose Next.js when:</strong></p>
<ul>
<li>You need React's ecosystem (component libraries, state management)</li>
<li>Your team already knows React</li>
<li>You're building a large, complex application with many contributors</li>
<li>You need Incremental Static Regeneration (ISR) for content-heavy sites</li>
</ul>

<p><strong>Choose SvelteKit when:</strong></p>
<ul>
<li>Performance is critical (marketing sites, landing pages, mobile-first apps)</li>
<li>You want smaller bundles and faster builds</li>
<li>You prefer writing less code (Svelte components are typically 30-40% shorter)</li>
<li>You're building a personal project, portfolio, or startup MVP</li>
</ul>

<h2>The Bottom Line</h2>

<p>As a <strong>Next.js developer</strong> and <strong>SvelteKit developer</strong>, I use both depending on the project. For client work at SolePoint Solutions, Next.js provides the ecosystem maturity enterprises need. For my own projects and performance-critical builds, SvelteKit is my go-to.</p>

<p>The best framework is the one that helps your team ship faster while delivering a great user experience. Both do that — just in different ways.</p>`
	}
];

export function getPost(slug: string): BlogPost | undefined {
	return posts.find((p) => p.slug === slug);
}
