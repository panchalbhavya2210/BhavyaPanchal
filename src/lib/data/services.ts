import type { Component } from 'svelte';
import Atom from '@lucide/svelte/icons/atom';
import Globe from '@lucide/svelte/icons/globe';
import ShoppingCart from '@lucide/svelte/icons/shopping-cart';
import Zap from '@lucide/svelte/icons/zap';
import Paintbrush from '@lucide/svelte/icons/paintbrush';
import Search from '@lucide/svelte/icons/search';

export type Service = {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	deliverables: string[];
	technologies: string[];
	benefits: string[];
	icon: Component;
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
		icon: Atom
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
		icon: Globe
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
		icon: ShoppingCart
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
		icon: Zap
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
		icon: Paintbrush
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
		icon: Search
	}
];

export function getService(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
