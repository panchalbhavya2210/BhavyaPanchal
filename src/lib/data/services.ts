import type { Component } from 'svelte';
import Atom from '@lucide/svelte/icons/atom';
import Globe from '@lucide/svelte/icons/globe';
import ShoppingCart from '@lucide/svelte/icons/shopping-cart';
import Zap from '@lucide/svelte/icons/zap';
import Paintbrush from '@lucide/svelte/icons/paintbrush';
import Search from '@lucide/svelte/icons/search';
import Box from '@lucide/svelte/icons/box';
import Database from '@lucide/svelte/icons/database';
import Gauge from '@lucide/svelte/icons/gauge';
import Code from '@lucide/svelte/icons/code';

export type ServiceFaq = {
	question: string;
	answer: string;
};

export type Service = {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	deliverables: string[];
	technologies: string[];
	benefits: string[];
	icon: Component;
	faq: ServiceFaq[];
};

export const services: Service[] = [
	{
		slug: 'react-development',
		title: 'React Development',
		shortDescription:
			'High-performance single-page applications, server-rendered platforms, and component architectures built with React and TypeScript.',
		description: `I build production-grade React applications that are fast, accessible, and maintainable. Whether you need a single-page application (SPA) with client-side rendering, a server-side rendered (SSR) platform with Next.js, or a hybrid approach, I architect solutions tailored to your requirements.

My React development covers the full spectrum: component architecture with reusable, testable components; state management using Context API, Zustand, or Redux depending on complexity; API integration with React Query or SWR for efficient data fetching; and comprehensive testing with Vitest and React Testing Library.

Every React application I build targets 95+ Lighthouse Performance scores. I implement code splitting at route boundaries, lazy loading for below-the-fold content, memoization where profiling shows it is needed, and server components where appropriate to minimise client-side JavaScript. Accessibility is never optional — every component ships with proper ARIA attributes, keyboard navigation support, and screen reader compatibility.

I have built React applications for enterprise websites, e-commerce platforms, analytics dashboards, content platforms, and investment intelligence tools. From greenfield projects to legacy codebase modernisation, I deliver React solutions that drive measurable business outcomes.`,
		deliverables: [
			'Production-ready React application with TypeScript',
			'Reusable component library with documentation',
			'State management architecture (Context, Zustand, or Redux)',
			'API integration layer with caching and error handling',
			'Comprehensive test suite (unit, integration, E2E)',
			'Performance audit report (Lighthouse, bundle analysis)',
			'Accessibility compliance report (WCAG 2.1 AA)',
			'Deployment configuration (Vercel, Netlify, or custom)'
		],
		technologies: [
			'React 18/19',
			'TypeScript',
			'Next.js',
			'Vite',
			'Zustand / Redux',
			'React Query / SWR',
			'React Testing Library',
			'Vitest / Jest',
			'Tailwind CSS',
			'Framer Motion',
			'Cypress / Playwright'
		],
		benefits: [
			'40-60% faster page loads through code splitting and lazy loading',
			'Scalable component architecture that grows with your product',
			'Type-safe codebase that catches bugs at compile time',
			'Accessible by default — every component tested with screen readers',
			'SEO-friendly rendering strategy (SSR, SSG, or ISR)',
			'Reduced time-to-market with reusable component systems'
		],
		icon: Atom,
		faq: [
			{
				question: 'Do you build React applications from scratch or work with existing codebases?',
				answer: 'Both. I build greenfield React applications and also modernise existing codebases — migrating from class components to hooks, adding TypeScript, improving performance, and restructuring component architecture for maintainability.'
			},
			{
				question: 'What state management do you use with React?',
				answer: 'It depends on the project complexity. For simple apps, React Context API is sufficient. For medium complexity, I use Zustand for its minimal API and excellent TypeScript support. For large-scale applications with complex async logic, I use Redux Toolkit with RTK Query.'
			},
			{
				question: 'Do you write tests for React applications?',
				answer: 'Yes. Every React application I build includes unit tests with Vitest and React Testing Library, integration tests for critical user flows, and E2E tests with Cypress or Playwright for the most important paths like checkout, authentication, and form submissions.'
			},
			{
				question: 'Can you migrate a React class component app to hooks and TypeScript?',
				answer: 'Yes. I have migrated multiple legacy React applications from class components to functional components with hooks, and from JavaScript to TypeScript. The migration is done incrementally to avoid breaking existing functionality.'
			}
		]
	},
	{
		slug: 'nextjs-development',
		title: 'Next.js Development',
		shortDescription:
			'Full-stack React applications with server-side rendering, static generation, API routes, and the App Router.',
		description: `Next.js is my primary framework for building production-grade web applications that require SEO, performance, and scalability. I leverage the App Router, Server Components, and the full Next.js ecosystem to deliver applications that rank on Google and load instantly.

My Next.js expertise spans the complete framework: App Router with layouts, loading states, error boundaries, and parallel routes; Server Components for zero-client-JS rendering; Server Actions for form handling without API routes; API routes and route handlers for backend logic; middleware for authentication, redirects, and A/B testing; and Incremental Static Regeneration (ISR) for content that stays fresh without rebuilds.

I build e-commerce storefronts with dynamic product pages and ISR, content-heavy marketing sites with static generation, SaaS dashboards with server-rendered protected routes, and multi-tenant platforms with middleware-based routing. For headless commerce, I integrate Next.js with Shopify, Sanity, and other headless CMS platforms.

Performance is a first-class concern. I implement streaming with Suspense boundaries, partial prerendering for instant static shells, image optimisation with next/image, font optimisation with next/font, and bundle analysis to eliminate unused JavaScript. The result: sub-second First Contentful Paint and 95+ Lighthouse scores on every page.`,
		deliverables: [
			'Full-stack Next.js application with App Router',
			'Server Components and Server Actions implementation',
			'API routes with proper error handling and validation',
			'Authentication and authorization middleware',
			'Database integration (Prisma, Drizzle, or direct ORM)',
			'SEO-optimised metadata, sitemap, and structured data',
			'ISR or on-demand revalidation strategy',
			'CI/CD pipeline for Vercel or custom deployment'
		],
		technologies: [
			'Next.js 14/15 (App Router)',
			'React Server Components',
			'TypeScript',
			'Prisma / Drizzle',
			'NextAuth.js / Clerk',
			'Tailwind CSS',
			'Vercel / Custom hosting',
			'PostgreSQL / MySQL',
			'Supabase / PlanetScale',
			'Sanity / Contentful'
		],
		benefits: [
			'Sub-second page loads with Server Components and streaming',
			'SEO-optimised out of the box with server-rendered HTML',
			'Reduced infrastructure costs with serverless deployment',
			'Better developer experience with file-system routing',
			'Real-time content updates without full rebuilds',
			'Type-safe API layer with end-to-end TypeScript'
		],
		icon: Globe,
		faq: [
			{
				question: 'Should I use Next.js Pages Router or App Router?',
				answer: 'For new projects, I always recommend the App Router. It provides Server Components, nested layouts, loading states, error boundaries, and Server Actions out of the box. The Pages Router is still supported but the App Router is the future of Next.js and receives all new features.'
			},
			{
				question: 'Do you deploy Next.js applications on Vercel only?',
				answer: 'No. While Vercel is the easiest deployment option for Next.js, I also deploy to custom servers, AWS, Railway, and other platforms. I recommend Vercel for most projects due to its zero-config deployment and edge network, but I can adapt to your infrastructure requirements.'
			},
			{
				question: 'Can you migrate an existing React app to Next.js?',
				answer: 'Yes. I have migrated multiple React SPAs to Next.js for improved SEO, performance, and developer experience. The migration involves restructuring routing, adding server-side rendering, and optimising for Core Web Vitals. I do this incrementally to minimise risk.'
			},
			{
				question: 'How do you handle authentication in Next.js?',
				answer: 'I use NextAuth.js (Auth.js) for most projects, supporting OAuth providers, email/password, and magic links. For enterprise projects, I integrate Clerk or custom JWT-based auth with middleware for protected routes and role-based access control.'
			}
		]
	},
	{
		slug: 'shopify-development',
		title: 'Shopify & Hydrogen Development',
		shortDescription:
			'Custom Shopify storefronts, Hydrogen headless commerce, and Liquid theme development for e-commerce brands.',
		description: `I build high-converting e-commerce experiences on Shopify — from custom Liquid themes for merchants who want a traditional storefront, to fully headless storefronts with Hydrogen and Oxygen for brands that need complete design freedom and maximum performance.

My Shopify expertise covers both sides of the ecosystem. For traditional Shopify development, I create custom Liquid themes with responsive, accessible storefronts, optimised product pages, collection filtering, cart drawer functionality, and checkout customisations. For headless commerce, I build with Shopify Hydrogen — React-based storefronts that connect to the Shopify Storefront API for blazing-fast, highly customised shopping experiences.

A Hydrogen storefront I built achieved sub-second page loads and a 28% improvement in mobile conversion rate compared to the client's previous Liquid theme. I integrate Hydrogen with Shopify's Oxygen hosting for edge-rendered, globally distributed storefronts, and implement advanced features like predictive search, personalised recommendations, and headless CMS integration with Sanity for rich content experiences.

Beyond the frontend, I optimise the entire e-commerce funnel: product discovery, collection navigation, cart management, checkout flow, and post-purchase experience. I implement analytics tracking, A/B testing capabilities, and SEO best practices including structured product data, optimised meta tags, and XML sitemaps.`,
		deliverables: [
			'Custom Liquid theme or Hydrogen storefront',
			'Responsive product pages with image optimisation',
			'Collection filtering, sorting, and search functionality',
			'Cart drawer with upsell and cross-sell capabilities',
			'Checkout customisation (Shopify Plus)',
			'Structured product data (JSON-LD) for rich snippets',
			'Performance optimisation (sub-second LCP target)',
			'Analytics and conversion tracking setup'
		],
		technologies: [
			'Shopify Hydrogen',
			'Oxygen hosting',
			'Liquid templating',
			'Shopify Storefront API',
			'React / Remix',
			'TypeScript',
			'Tailwind CSS',
			'Sanity CMS',
			'Klaviyo / Mailchimp',
			'Shopify Analytics'
		],
		benefits: [
			'28-40% improvement in mobile conversion rates',
			'Sub-second page loads for better SEO and user experience',
			'Complete design freedom with headless architecture',
			'Reduced cart abandonment with optimised checkout flow',
			'Rich product snippets in Google search results',
			'Scalable infrastructure with Shopify backend reliability'
		],
		icon: ShoppingCart,
		faq: [
			{
				question: 'Should I use Shopify Liquid or Hydrogen for my store?',
				answer: 'It depends on your needs. Liquid is ideal for standard stores with quick setup and Shopify-hosted themes. Hydrogen is better for brands that need custom design, superior performance, headless CMS integration, or multi-region storefronts. I help clients choose the right approach during the discovery phase.'
			},
			{
				question: 'Can you migrate my existing Shopify store to Hydrogen?',
				answer: 'Yes. I handle the full migration from Liquid to Hydrogen — preserving SEO equity with proper redirects, migrating product data, and rebuilding the frontend with React and the Storefront API. The result is a faster, more customisable storefront.'
			},
			{
				question: 'Do you work with Shopify Plus?',
				answer: 'Yes. I have experience with Shopify Plus features including checkout customisation, Shopify Functions, multipass, and B2B wholesale channels. For Plus merchants, I build custom checkout experiences and automate workflows with Shopify Flow.'
			},
			{
				question: 'How do you handle SEO for Shopify stores?',
				answer: 'I implement structured Product schema with price, availability, and reviews. I optimise meta titles and descriptions for all product and collection pages. I create XML sitemaps, fix duplicate content from URL parameters, and add canonical URLs. For Hydrogen stores, I have full control over server-rendered HTML for optimal crawlability.'
			}
		]
	},
	{
		slug: 'performance-optimization',
		title: 'Performance Optimization',
		shortDescription:
			'Core Web Vitals audits, bundle analysis, rendering optimisation, and systematic performance improvements.',
		description: `Performance is not a feature — it is a requirement. I help businesses transform slow, bloated web applications into fast, responsive experiences that users love and search engines reward. My performance optimization service is systematic, data-driven, and delivers measurable results.

Every engagement begins with a comprehensive audit. I use Lighthouse, WebPageTest, Chrome DevTools Performance panel, and the web-vitals library to establish baseline metrics: LCP, INP, CLS, FCP, TTFB, and TTI. I analyse JavaScript bundles with tools like Bundle Analyzer and Statoscope to identify bloat. I profile rendering performance to find jank, long tasks, and layout thrashing.

From the audit findings, I build a prioritised optimization roadmap. Typical interventions include: route-based code splitting to reduce initial JavaScript payload; image optimisation with WebP/AVIF formats, responsive sizes, and lazy loading; font optimisation with subsetting, font-display swap, and self-hosting; render-blocking resource elimination with critical CSS inlining and deferred non-critical scripts; and caching strategies with CDN configuration, service workers, and stale-while-revalidate patterns.

I also implement performance monitoring to prevent regressions. Using tools like SpeedCurve, Calibre, or the web-vitals library with your analytics, I set up automated alerts that catch performance degradations before they reach production. On past projects, my optimization work has reduced LCP by 50-70%, eliminated CLS entirely, and achieved consistent 95+ Lighthouse Performance scores.`,
		deliverables: [
			'Comprehensive Core Web Vitals audit report',
			'JavaScript bundle analysis with size breakdown',
			'Prioritised optimisation roadmap with effort/impact matrix',
			'Code splitting and lazy loading implementation',
			'Image and font optimisation',
			'Caching and CDN strategy',
			'Performance monitoring and alerting setup',
			'Before/after metrics comparison'
		],
		technologies: [
			'Lighthouse / PageSpeed Insights',
			'WebPageTest',
			'Chrome DevTools',
			'Bundle Analyzer',
			'web-vitals library',
			'SpeedCurve / Calibre',
			'Image CDN (Cloudinary, imgix)',
			'Vercel / Cloudflare',
			'Lighthouse CI'
		],
		benefits: [
			'50-70% reduction in Largest Contentful Paint',
			'Zero Cumulative Layout Shift (CLS)',
			'Improved Google rankings through page experience signals',
			'Lower bounce rates and higher conversion rates',
			'Reduced bandwidth costs through smaller bundles',
			'Automated performance monitoring prevents regressions'
		],
		icon: Zap,
		faq: [
			{
				question: 'How fast can you make my website?',
				answer: 'Most websites can achieve 90+ Lighthouse Performance scores with systematic optimisation. On past projects, I have reduced page load times by 50-70% and achieved consistent 95+ scores. The exact improvement depends on the current state of the site and the technology stack.'
			},
			{
				question: 'Do you guarantee a 100 Lighthouse score?',
				answer: 'I target 95+ as a realistic, sustainable goal. A perfect 100 score is possible but not always practical — some third-party scripts (analytics, chat widgets) add unavoidable weight. I focus on real-world Core Web Vitals improvements that impact user experience and search rankings.'
			},
			{
				question: 'What is the difference between this and your website speed optimization service?',
				answer: 'Performance Optimization is a deep, technical audit-and-fix service for existing applications — covering bundle analysis, rendering profiling, and infrastructure-level changes. Website Speed Optimization is more focused on quick wins and Core Web Vitals improvements for existing websites, often involving image optimisation, caching, and code splitting without major architectural changes.'
			},
			{
				question: 'How long does a performance optimization engagement take?',
				answer: 'A typical audit takes 1-2 weeks, with implementation following over 2-4 weeks depending on scope. Simple optimisations (image compression, code splitting) can be done in days. Architectural changes (migration to SSR, bundle restructuring) may take longer.'
			}
		]
	},
	{
		slug: 'ui-engineering',
		title: 'UI Engineering',
		shortDescription:
			'Design systems, component libraries, and pixel-perfect implementations that scale across teams and products.',
		description: `I bridge the gap between design and engineering. As a UI engineer, I transform design specifications into production-ready, accessible, and performant user interfaces. My work empowers product teams to ship consistently and designers to see their vision realised with pixel-perfect precision.

Design systems are the foundation of scalable UI development. I build comprehensive component libraries with tools like Storybook, complete with interactive documentation, usage guidelines, and accessibility annotations. Each component is tested for visual regression with Chromatic or Percy, unit tested for functionality, and validated against WCAG 2.1 AA criteria. The result is a single source of truth that designers and developers can both trust.

My approach to UI implementation emphasises maintainability. I use Tailwind CSS for utility-first styling that scales without specificity wars. For complex interactions, I reach for GSAP and Framer Motion — creating animations that enhance usability without compromising performance. Every component ships with proper TypeScript types, making the design system self-documenting and preventing runtime errors.

I have built design systems for multi-product companies, component libraries for startup teams, and UI kits that reduced design-to-development handoff time by 40%. Whether starting from scratch or systematising an existing codebase, I deliver UI infrastructure that makes shipping great interfaces faster and more consistent.`,
		deliverables: [
			'Production-ready component library with Storybook documentation',
			'Design token system (colours, typography, spacing, shadows)',
			'Responsive layout primitives and grid systems',
			'Interactive component documentation with usage examples',
			'Visual regression testing setup (Chromatic/Percy)',
			'Accessibility annotations and keyboard navigation patterns',
			'TypeScript type definitions for all components',
			'Migration guide for existing codebases'
		],
		technologies: [
			'React / Svelte',
			'TypeScript',
			'Tailwind CSS',
			'Storybook',
			'GSAP / Framer Motion',
			'Chromatic / Percy',
			'Figma API',
			'Radix UI / Headless UI',
			'Class Variance Authority',
			'CSS Modules / Styled Components'
		],
		benefits: [
			'30-40% faster design-to-development handoff',
			'Consistent visual language across all products',
			'Fewer UI bugs through reusable, tested components',
			'Faster onboarding for new team members',
			'Accessible by default with built-in ARIA patterns',
			'Design changes propagate instantly through token system'
		],
		icon: Paintbrush,
		faq: [
			{
				question: 'Do you build design systems from scratch or extend existing ones?',
				answer: 'Both. I have built design systems from the ground up for startups and also extended existing systems like shadcn/ui, Radix, and custom enterprise design systems. I assess the current state and recommend the most efficient path forward.'
			},
			{
				question: 'What tools do you use for design system documentation?',
				answer: 'I use Storybook as the primary documentation and development environment. It provides interactive component playgrounds, accessibility checks with axe-core, visual regression testing with Chromatic, and auto-generated documentation from TypeScript types and JSDoc comments.'
			},
			{
				question: 'Can you convert my Figma designs into a component library?',
				answer: 'Yes. I extract design tokens from Figma (colours, typography, spacing) and build a production-ready component library that matches the designs pixel-for-pixel. I use the Figma API to keep design and code in sync as the system evolves.'
			},
			{
				question: 'How do you ensure design system adoption across a team?',
				answer: 'Adoption requires developer experience investment. I provide TypeScript types for autocomplete, comprehensive Storybook documentation, clear contribution guidelines, and regular sync between design and engineering. The system must be easier to use than writing custom CSS.'
			}
		]
	},
	{
		slug: 'technical-seo',
		title: 'Technical SEO',
		shortDescription:
			'Semantic HTML, structured data, Core Web Vitals optimisation, and crawlability audits for JavaScript applications.',
		description: `Technical SEO is the foundation of organic search visibility — especially for JavaScript-heavy applications. I help businesses ensure their React, Next.js, and SvelteKit applications are fully crawlable, indexable, and optimised for search engines.

My technical SEO service begins with a comprehensive crawl audit. Using tools like Screaming Frog, Sitebulb, and Google Search Console, I identify indexing issues, crawl budget waste, duplicate content, and missing structured data. For JavaScript applications, I verify that Google can render and index client-side content — implementing SSR or SSG where client-side rendering falls short.

Structured data is a key differentiator. I implement comprehensive schema.org markup — Person, Organization, WebSite, BreadcrumbList, Article, Product, FAQ, and more — enabling rich snippets in search results. On this portfolio site, I have deployed 14+ schema types that provide Google with a complete understanding of the content.

Performance and SEO are inseparable. I optimize Core Web Vitals — LCP, INP, and CLS — because Google's page experience ranking signal directly impacts search positions. I implement semantic HTML with proper heading hierarchies, landmark regions, and descriptive link text. I also handle the technical plumbing: XML sitemaps, robots.txt configuration, canonical URLs, hreflang tags for multilingual sites, and structured URL patterns.`,
		deliverables: [
			'Technical SEO audit with prioritised issues',
			'Structured data implementation (JSON-LD)',
			'Semantic HTML and heading hierarchy audit',
			'Core Web Vitals optimisation',
			'XML sitemap and robots.txt configuration',
			'Canonical URL and redirect strategy',
			'Google Search Console setup and monitoring',
			'JavaScript rendering and crawlability verification'
		],
		technologies: [
			'Schema.org / JSON-LD',
			'Google Search Console',
			'Screaming Frog',
			'Sitebulb',
			'Lighthouse / PageSpeed Insights',
			'Next.js / SvelteKit SSR',
			'Structured Data Testing Tool',
			'Google Rich Results Test',
			'XML Sitemaps'
		],
		benefits: [
			'Improved Google rankings through page experience signals',
			'Rich snippets in search results (stars, FAQs, breadcrumbs)',
			'Better crawl efficiency and index coverage',
			'Higher click-through rates from enhanced SERP listings',
			'Sustainable SEO foundation that scales with your content',
			'AI search optimisation for Google AI Overviews and SGE'
		],
		icon: Search,
		faq: [
			{
				question: 'Can JavaScript applications rank well on Google?',
				answer: 'Yes, but only with proper technical SEO. Google can render JavaScript, but the two-phase crawl process introduces delays. I ensure JavaScript applications use server-side rendering or static generation so content is available in the initial HTML response — no rendering delays, no indexing gaps.'
			},
			{
				question: 'What structured data do you implement?',
				answer: 'I implement the schemas most relevant to your business: WebSite, Organization/Person, BreadcrumbList, Article/BlogPosting, Product, FAQ, Service, LocalBusiness, and more. Each schema is validated with Google Rich Results Test and monitored in Search Console.'
			},
			{
				question: 'How long does it take to see SEO results?',
				answer: 'Technical SEO improvements (structured data, Core Web Vitals, crawlability) can show results within 2-4 weeks as Google re-crawls and re-indexes pages. Content SEO improvements (keyword targeting, internal linking) typically take 3-6 months to show significant ranking changes.'
			},
			{
				question: 'Do you work with existing SEO teams?',
				answer: 'Yes. I often collaborate with SEO agencies and in-house teams on the technical implementation side — structured data, Core Web Vitals, crawlability, and site architecture. I focus on the technical frontend while your SEO team handles content strategy and link building.'
			}
		]
	},
	{
		slug: 'svelte-development',
		title: 'Svelte & SvelteKit Development',
		shortDescription:
			'Lightning-fast web applications built with Svelte 5 and SvelteKit — compiler-first framework delivering minimal JavaScript bundles and exceptional runtime performance.',
		description: `Svelte and SvelteKit represent the future of frontend development. Unlike React and Vue, Svelte compiles your components at build time into lean vanilla JavaScript — no virtual DOM, no runtime library shipped to the browser. The result is dramatically smaller bundles and faster runtime performance by default.

As a SvelteKit developer who has built production applications including this portfolio, I leverage the full SvelteKit ecosystem: file-based routing, server-side rendering, form actions with progressive enhancement, load functions for data fetching, and adapter-based deployment to any platform.

Svelte 5's runes system ($state, $derived, $effect) provides explicit reactivity without the complexity of React hooks. There are no dependency arrays, no rules of hooks, and no stale closure bugs. Runes work everywhere — in components, in .svelte.js files, and inside functions.

I build marketing sites, portfolios, SaaS dashboards, content platforms, and startup MVPs with SvelteKit. On a recent designer portfolio, SvelteKit delivered a 96 Lighthouse Performance score with a total JavaScript bundle under 30KB gzipped — including all animations powered by GSAP.`,
		deliverables: [
			'Production-ready SvelteKit application with TypeScript',
			'Server-side rendering with load functions',
			'Form actions with progressive enhancement',
			'Component library with Svelte 5 runes',
			'GSAP or Svelte motion animations',
			'SEO-optimised metadata, sitemap, and structured data',
			'Performance audit (targeting 95+ Lighthouse)',
			'Deployment configuration (Vercel, Netlify, Node)'
		],
		technologies: [
			'Svelte 5',
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS',
			'GSAP',
			'Vite',
			'Firebase / Supabase',
			'Adapter-vercel / Adapter-node',
			'MDsveX',
			'Storybook'
		],
		benefits: [
			'60-70% smaller JavaScript bundles compared to React equivalents',
			'Sub-second page loads with compiler-first architecture',
			'Simpler developer experience — less code, fewer bugs',
			'Built-in SSR, SSG, and form actions without external libraries',
			'Excellent Core Web Vitals scores by default',
			'Progressive enhancement — forms work without JavaScript'
		],
		icon: Box,
		faq: [
			{
				question: 'Is Svelte faster than React?',
				answer: 'In most benchmarks, yes. Svelte compiles away at build time — there is no virtual DOM or runtime library shipped to the browser. A typical SvelteKit app ships 18KB gzipped vs 87KB for an equivalent Next.js app. The performance difference is most noticeable on slower devices and networks.'
			},
			{
				question: 'Can you migrate an existing React app to SvelteKit?',
				answer: 'Yes. I have migrated React applications to SvelteKit, rewriting components with Svelte 5 runes and restructuring routing to SvelteKit conventions. The migration is typically done incrementally, starting with the most performance-critical pages.'
			},
			{
				question: 'Is SvelteKit production-ready?',
				answer: 'Absolutely. SvelteKit is used in production by companies like Apple, The New York Times, Spotify, and Rakuten. This portfolio site is built with SvelteKit and achieves 95+ Lighthouse scores. The framework is stable, well-maintained, and backed by Vercel.'
			},
			{
				question: 'When should I choose SvelteKit over Next.js?',
				answer: 'Choose SvelteKit when performance is critical (marketing sites, portfolios, mobile-first apps), when you want smaller bundles, or when you prefer writing less code. Choose Next.js when your team already knows React, when you need React ecosystem libraries, or when building large enterprise applications with many contributors.'
			}
		]
	},
	{
		slug: 'headless-cms',
		title: 'Headless CMS Integration',
		shortDescription:
			'Sanity, Contentful, Strapi, and headless CMS integrations for content-driven websites with structured data, preview environments, and multi-channel delivery.',
		description: `A headless CMS decouples content from presentation — giving your team the freedom to manage content while developers build fast, flexible frontends with any framework. I integrate headless CMS platforms including Sanity, Contentful, Strapi, Payload, and Hygraph into React, Next.js, and SvelteKit applications.

My headless CMS integrations cover the full content lifecycle: schema design with structured content types, content modelling with reusable components, preview environments for draft content, on-demand revalidation for instant publishing, and multi-channel delivery for web, mobile, and email.

For Sanity CMS — my preferred headless CMS — I implement custom studio configurations, GROQ queries for efficient data fetching, Portable Text for rich content editing, image pipelines with automatic optimisation, and live preview with real-time collaboration. Sanity's flexibility makes it ideal for complex content models that go beyond simple blog posts.

I have integrated headless CMS platforms for e-commerce product catalogues, corporate websites with multi-language content, content-heavy marketing sites, and portfolio websites. The result: content teams can update content independently while developers maintain full control over performance, SEO, and user experience.`,
		deliverables: [
			'CMS schema design and content modelling',
			'Frontend integration with React/Next.js/SvelteKit',
			'Preview environment for draft content',
			'On-demand revalidation for instant publishing',
			'Rich text editor configuration (Portable Text, MDX)',
			'Image optimisation pipeline',
			'Multi-language content support',
			'Content migration from existing CMS'
		],
		technologies: [
			'Sanity CMS',
			'Contentful',
			'Strapi',
			'Payload CMS',
			'Hygraph (GraphCMS)',
			'GROQ / GraphQL',
			'Portable Text',
			'Next.js / SvelteKit',
			'MDX',
			'Sanity Studio'
		],
		benefits: [
			'Content teams update content independently — no developer needed',
			'Structured content enables multi-channel delivery (web, mobile, email)',
			'Preview environments let editors see changes before publishing',
			'On-demand revalidation for instant content updates',
			'Scalable content architecture that grows with your business',
			'API-first design enables integration with any frontend framework'
		],
		icon: Database,
		faq: [
			{
				question: 'Which headless CMS do you recommend?',
				answer: 'For most projects, I recommend Sanity CMS. It offers the most flexible content modelling (structured schemas with references, arrays, and custom types), real-time collaboration, live preview, and an excellent developer experience with GROQ queries. For simpler projects, Contentful is a solid alternative. For self-hosted solutions, I recommend Strapi or Payload.'
			},
			{
				question: 'Can you migrate my WordPress content to a headless CMS?',
				answer: 'Yes. I handle full content migration from WordPress to headless CMS — including posts, pages, media, categories, tags, and custom fields. I write migration scripts that transform WordPress data into structured CMS schemas, preserving SEO equity with proper redirects.'
			},
			{
				question: 'What is the difference between Sanity and Contentful?',
				answer: 'Sanity offers more flexible content modelling with custom studio configurations, real-time collaboration, and GROQ queries. Contentful has a more traditional CMS interface with GraphQL API. Sanity is better for complex content models; Contentful is better for teams that prefer a conventional CMS experience.'
			},
			{
				question: 'Do headless CMS platforms support preview/draft content?',
				answer: 'Yes. I implement preview environments that show draft content before publishing. In Sanity, this uses the live preview API with on-demand revalidation in Next.js. Editors can see changes in real-time on the actual website before hitting publish.'
			}
		]
	},
	{
		slug: 'website-speed-optimization',
		title: 'Website Speed Optimization',
		shortDescription:
			'Core Web Vitals audits, Lighthouse optimization, image optimization, code splitting, and performance tuning to achieve 95+ Lighthouse scores and sub-second page loads.',
		description: `A slow website costs you money. Studies show that a 1-second delay in page load reduces conversions by 7%, increases bounce rates by 32%, and hurts your Google rankings. I help businesses fix their website speed — achieving 95+ Lighthouse scores and sub-second page loads.

My website speed optimization service is focused on quick wins and Core Web Vitals improvements. Unlike a full performance architecture overhaul, this service targets the most impactful optimisations that can be implemented quickly: image compression and format conversion (WebP/AVIF), lazy loading for below-fold content, font optimisation with subsetting and font-display swap, code splitting at route boundaries, render-blocking script elimination, and caching strategy improvements.

I work with any tech stack — WordPress, Shopify, React, Next.js, SvelteKit, or static sites. Each engagement starts with a Lighthouse audit and Core Web Vitals measurement to establish baseline metrics. I then implement optimisations in priority order (highest impact, lowest effort first) and provide before/after metrics to demonstrate the improvement.

On a recent Shopify store optimization, I reduced average page load from 2.1s to 0.8s, improved mobile Lighthouse score from 42 to 88, and achieved a 28% improvement in mobile conversion rate — all within 4 weeks.`,
		deliverables: [
			'Lighthouse and Core Web Vitals audit report',
			'Image optimisation (compression, WebP/AVIF conversion, lazy loading)',
			'Font optimisation (subsetting, font-display swap, self-hosting)',
			'Code splitting and render-blocking script elimination',
			'Caching strategy improvements (browser, CDN, service worker)',
			'Before/after metrics comparison with documentation',
			'Performance monitoring setup',
			'Handoff documentation for ongoing maintenance'
		],
		technologies: [
			'Lighthouse / PageSpeed Insights',
			'WebPageTest',
			'Squoosh / Sharp',
			'Cloudflare / Vercel Edge',
			'webpack-bundle-analyzer',
			'Chrome DevTools',
			'web-vitals library',
			'next/image / @sveltejs/enhanced-img',
			'Critical CSS tools',
			'Lighthouse CI'
		],
		benefits: [
			'Sub-second page loads for better user experience',
			'95+ Lighthouse Performance scores',
			'Improved Google rankings through Core Web Vitals signals',
			'20-40% improvement in conversion rates',
			'Reduced bounce rates from faster load times',
			'Lower bandwidth costs from optimised assets'
		],
		icon: Gauge,
		faq: [
			{
				question: 'How fast can you make my website?',
				answer: 'Most websites can achieve 90+ Lighthouse scores with targeted optimisations. On past projects, I have reduced page load times by 50-70% and improved Lighthouse scores from the 40s to the 90s. The exact improvement depends on your current stack and the root causes of slowness.'
			},
			{
				question: 'My website is on WordPress — can you still optimize it?',
				answer: 'Yes. WordPress sites often have significant optimisation opportunities: image compression, plugin audit, caching configuration, CDN setup, and theme optimisation. I work with WordPress sites alongside JavaScript application optimisation.'
			},
			{
				question: 'Do you guarantee specific Lighthouse scores?',
				answer: 'I target 90+ as a realistic, sustainable goal. A perfect 100 is possible but not always practical with third-party scripts. I focus on Core Web Vitals improvements that impact real users and search rankings, not just lab scores.'
			},
			{
				question: 'How is this different from your Performance Optimization service?',
				answer: 'Website Speed Optimization focuses on quick wins and targeted improvements for existing websites — image optimisation, caching, code splitting. Performance Optimization is a deeper, architectural service that may involve migrating to SSR, restructuring bundles, and implementing monitoring infrastructure. I recommend Speed Optimization for most clients as the first step.'
			}
		]
	},
	{
		slug: 'figma-to-code',
		title: 'Figma to Code Conversion',
		shortDescription:
			'Pixel-perfect, responsive, and accessible HTML/CSS/React/Svelte implementations from Figma design files with design system documentation.',
		description: `I convert Figma designs into production-ready, responsive, and accessible code. Unlike automated tools that generate bloated, unmaintainable markup, my Figma-to-code process produces clean, semantic HTML with modern CSS, reusable components, and comprehensive documentation.

My conversion process starts with a design audit — I review the Figma file for consistency, identify reusable patterns, and extract design tokens (colours, typography, spacing, shadows). I then build a component hierarchy that mirrors the Figma structure, ensuring every component is responsive, accessible, and performant.

I work with any frontend stack: vanilla HTML/CSS, React, Next.js, SvelteKit, Vue, or Astro. Each component is built with proper TypeScript types, responsive breakpoints matching the Figma specs, keyboard navigation, ARIA attributes, and semantic HTML. I also create Storybook documentation so your team can reference and reuse components.

For design systems, I extract Figma tokens using the Figma API and sync them with Tailwind CSS configuration or CSS custom properties. This ensures design and code stay in sync as the system evolves. I have converted Figma files ranging from single landing pages to 100+ component enterprise design systems.`,
		deliverables: [
			'Pixel-perfect responsive implementation matching Figma specs',
			'Semantic HTML with proper accessibility (WCAG 2.1 AA)',
			'Reusable component library with TypeScript types',
			'Design token extraction and Tailwind CSS configuration',
			'Storybook documentation with interactive examples',
			'Cross-browser testing report',
			'Performance audit (targeting 95+ Lighthouse)',
			'Handoff documentation for developers'
		],
		technologies: [
			'Figma',
			'Figma API',
			'React / Next.js',
			'SvelteKit',
			'Tailwind CSS',
			'Storybook',
			'TypeScript',
			'Class Variance Authority',
			'Chromatic',
			'Figma Tokens plugin'
		],
		benefits: [
			'Pixel-perfect implementation matching design intent',
			'Accessible by default — keyboard navigation and screen reader support',
			'Responsive across all breakpoints defined in Figma',
			'Design tokens keep code and design in sync',
			'Storybook documentation enables team reuse',
			'Clean, maintainable code — not auto-generated markup'
		],
		icon: Code,
		faq: [
			{
				question: 'How accurate is the Figma to code conversion?',
				answer: 'I aim for pixel-perfect accuracy — every spacing value, font size, colour, and shadow matches the Figma specs. I use design tokens extracted from Figma to ensure consistency. Any deviations are intentional (e.g., responsive adjustments for specific breakpoints) and documented.'
			},
			{
				question: 'Do you support Figma auto-layout and components?',
				answer: 'Yes. I understand Figma auto-layout, components, variants, and design tokens. I translate auto-layout into CSS flexbox/grid, component variants into TypeScript-typed component props, and Figma tokens into Tailwind CSS configuration.'
			},
			{
				question: 'Can you convert Figma to React components?',
				answer: 'Yes. React with TypeScript is one of my primary output targets. I build reusable, typed components that mirror the Figma component structure — with proper variants, states, and composition patterns. I also create Storybook stories for each component.'
			},
			{
				question: 'Can you convert Figma to a SvelteKit application?',
				answer: 'Yes. This portfolio site is built with SvelteKit and was designed in Figma. I convert Figma designs into Svelte components with Svelte5 runes, TypeScript types, and Tailwind CSS styling. The result is a production-ready SvelteKit application with 95+ Lighthouse scores.'
			}
		]
	}
];

export function getService(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
