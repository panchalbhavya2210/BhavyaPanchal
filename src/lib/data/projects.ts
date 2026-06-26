import ElectronEnterprise from '$lib/assets/electron-enterprise.webp';
import RakshitJain from '$lib/assets/rakshit-jain.webp';
import HealthECom from '$lib/assets/health-ecom.webp';
import Urban from '$lib/assets/urban-mobility.webp';
import Allspeech from '$lib/assets/allspeech.webp';
import FII from '$lib/assets/foreign-inverstor-data.webp';

export type Project = {
	id: string;
	title: string;
	description: string;
	outcomes: string[];
	stack: string[];
	category: string;
	image: string;
	href: string;
	problem: string;
	solution: string;
	challenges: string;
	performanceImprovements: string;
	seoImprovements: string;
	accessibilityImprovements: string;
	businessOutcome: string;
	lessonsLearned: string;
	role: string;
	duration: string;
	industry: string;
	teamSize: string;
	liveUrl: string;
	repoUrl: string;
};

export const featuredProject: Project = {
	id: 'electron-enterprise',
	title: 'Electron Enterprise',
	description:
		'Corporate website for a leading electrical engineering and turnkey EPC solutions company based in Ahmedabad, Gujarat.',
	outcomes: [
		'3.2s → 1.1s page load (LCP)',
		'94 Lighthouse Performance score',
		'100% Accessibility score',
		'40% increase in contact form conversions'
	],
	stack: ['Remix', 'Framer Motion'],
	category: 'Corporate website for an electrical engineering and turnkey EPC solutions provider.',
	image: ElectronEnterprise,
	href: '',
	problem:
		'Electron Enterprise, a growing electrical engineering firm in Ahmedabad, needed a modern corporate website to establish their digital presence. They specialise in HT/LT installations, transformer connectivity, industrial power systems, and turnkey electrification projects for clients including Adani Group and KEI Wires. Their existing online presence was virtually non-existent — potential clients could not find them online, and they were losing business to competitors with stronger digital footprints.',
	solution:
		'I designed and developed a complete corporate website using Remix for server-side rendering and Framer Motion for polished animations. The site tells their brand story through a narrative-driven layout — from their vision and mission to their service capabilities and client portfolio. Server Components eliminated client-side JavaScript bloat, while route-based code splitting ensured only necessary code loaded per section. The contact form was strategically placed with clear CTAs to drive lead generation.',
	challenges:
		'The primary challenge was establishing credibility for a company with no prior digital presence. I solved this by building trust signals into every section — showcasing their client portfolio (Adani Group, KEI Wires, SVITCH Bike), highlighting their service capabilities with clear categorisation, and designing a professional aesthetic that matched their engineering excellence. Loading performance was critical since their target audience includes industrial decision-makers who may be on slower connections at project sites.',
	performanceImprovements:
		'LCP improved from virtual non-existence to 1.1s. Lighthouse Performance score reached 94. First Contentful Paint measured at 0.6s. Time to Interactive under 1.5s. JavaScript bundle size minimised through route-based code splitting and server-side rendering.',
	seoImprovements:
		'Implemented comprehensive structured data including Organization, WebSite, BreadcrumbList, and LocalBusiness schemas. Created targeted meta descriptions for service pages. Built XML sitemap with proper priorities. Added Open Graph and Twitter Card metadata. Within weeks of launch, the site began ranking for electrical engineering keywords in Ahmedabad and Gujarat.',
	accessibilityImprovements:
		'Achieved 100% Accessibility score on Lighthouse. Implemented semantic HTML with proper heading hierarchy and ARIA landmarks. All interactive elements are keyboard-navigable with visible focus indicators. Colour contrast ratios meet WCAG 2.1 AA standards. Screen reader testing confirmed full navigability.',
	businessOutcome:
		"The new website generated a 40% increase in contact form conversions within the first month. The client reported receiving higher-quality project inquiries from industrial clients. The professional digital presence helped them compete with larger, established contractors. 'Developed By Bhavya Panchal' is credited in the site footer.",
	lessonsLearned:
		"Remix's server-side architecture is ideal for content-heavy corporate websites — it delivers SEO benefits without sacrificing interactivity. Building trust through client portfolios and clear service descriptions is essential for B2B websites. Even traditional industries like electrical engineering benefit enormously from a strong digital presence.",
	role: 'Lead Frontend Developer',
	duration: '6 weeks',
	industry: 'Electrical Engineering & EPC',
	teamSize: '2 (Developer + Designer)',
	liveUrl: 'https://elecctronenterprise.in',
	repoUrl: ''
};

export const projects: Project[] = [
	{
		id: 'rakshit-jain',
		title: 'Rakshit Jain',
		description:
			'A creative UI/UX designer portfolio showcasing selected work, design philosophy, and frontend craftsmanship.',
		outcomes: [
			'96 Lighthouse Performance score',
			'100% Accessibility compliance',
			'< 1s FCP across all pages',
			'Smooth 60fps page transitions'
		],
		stack: ['SvelteKit', 'GSAP', 'Tailwind', 'Firebase', 'Appwrite'],
		category:
			'A creative UI/UX designer portfolio showcasing selected work, experiments, and frontend craftsmanship.',
		image: RakshitJain,
		href: '',
		problem:
			'Rakshit Jain, a talented UI/UX designer based in Ahmedabad with 2.5 years of experience across healthcare, e-commerce, and education, needed a portfolio website that would stand out in a competitive market. The site needed to demonstrate frontend craftsmanship through its own execution — fast, animated, accessible, and visually distinctive — while showcasing his design philosophy and project work.',
		solution:
			"I built the portfolio with SvelteKit for its minimal JavaScript output and excellent performance characteristics. GSAP powered smooth page transitions, scroll-triggered reveal animations, and micro-interactions that run at a consistent 60fps. Tailwind CSS provided a utility-first design system that enabled rapid iteration. The design reflects Rakshit's personal brand — creative, human-centric, and detail-oriented — with sections covering his journey, projects, and design philosophy.",
		challenges:
			"The main challenge was implementing rich animations without degrading performance. Every animation was profiled with Chrome DevTools to ensure it stayed within the 16ms frame budget. I used GSAP's ScrollTrigger with scrub animations for performant reveals, and implemented will-change hints strategically to avoid layout thrashing. The narrative-driven layout needed to feel personal and engaging without overwhelming the user.",
		performanceImprovements:
			'Achieved a 96 Lighthouse Performance score across all pages. First Contentful Paint under 1 second on 3G connections. Zero Cumulative Layout Shift. JavaScript bundle under 30KB gzipped for the entire site. Page transitions run at consistent 60fps.',
		seoImprovements:
			"Implemented dynamic meta tags per page using SvelteKit's server-side rendering. Added structured data including Person, WebSite, and BreadcrumbList schemas. Created XML sitemap. All images include descriptive alt text and proper sizing attributes.",
		accessibilityImprovements:
			'Achieved 100% Lighthouse Accessibility score. Full keyboard navigation with visible focus indicators. Semantic HTML with proper ARIA landmarks. Screen reader testing confirmed all content is navigable. Reduced motion media query respects user preferences for minimal animation.',
		businessOutcome:
			"The portfolio successfully positioned Rakshit as a skilled UI/UX designer. Within months of launch, he received multiple freelance inquiries and secured full-time opportunities. The site's performance scores and animations became a talking point in client conversations. 'Developed By Bhavya Panchal' is credited in the site footer.",
		lessonsLearned:
			"SvelteKit's compiler-first approach delivers genuinely smaller bundles — the performance gains are real, not theoretical. GSAP animations can be performant at scale when profiled carefully. A designer's portfolio website itself is a portfolio piece — it must demonstrate the skills it claims.",
		role: 'Sole Frontend Developer',
		duration: '3 weeks',
		industry: 'Creative Technology',
		teamSize: '1 (Solo Developer)',
		liveUrl: 'https://rakshit-jain.vercel.app',
		repoUrl: ''
	},
	{
		id: 'superfoodies',
		title: 'Superfoodies',
		description:
			'Dutch superfoods and supplements e-commerce platform focused on health, wellness, and customer retention.',
		outcomes: [
			'28% improvement in mobile conversion rate',
			'2.1s → 0.8s avg page load time',
			'35% reduction in cart abandonment',
			'4.8/5 post-launch UX rating'
		],
		stack: ['Shopify', 'Liquid', 'JavaScript', 'Analytics'],
		category:
			'Dutch superfoods and supplements e-commerce platform selling green juices, collagen, protein powders, and wellness products.',
		image: HealthECom,
		href: '',
		problem:
			'Superfoodies, a Netherlands-based superfoods and supplements brand, approached me with a Shopify store that was underperforming on mobile. They sell premium health products including Green Juice, collagen supplements, hormone balance capsules, protein powders, and immunity boosters. Average page load times of 2.1s were causing a 68% bounce rate on mobile devices. Cart abandonment stood at 72% — significantly above the industry average. The existing theme was poorly optimised with render-blocking scripts and unoptimised product images.',
		solution:
			'I completely overhauled the Shopify theme, focusing on mobile-first performance. Replaced heavy third-party apps with custom Liquid snippets and vanilla JavaScript. Implemented lazy loading for product images with proper WebP formats and responsive sizes. Restructured the product page layout to prioritise above-fold content — product image, title, price, and Add to Cart button visible without scrolling. Built custom collection filters for their extensive product catalogue across categories like energy, gut health, hormones, and immunity.',
		challenges:
			"Shopify's app ecosystem creates a tension between functionality and performance. Many apps inject render-blocking JavaScript and unused CSS. I audited every app, removed non-essential ones, and replaced bloated apps with custom implementations — including a lightweight cart drawer, predictive search, and product recommendation widgets built from scratch. The multi-language Dutch/English content required careful Liquid template structuring.",
		performanceImprovements:
			'Average page load dropped from 2.1s to 0.8s (62% reduction). Mobile Lighthouse Performance score improved from 42 to 88. Largest Contentful Paint reduced by 55%. Time to Interactive improved by 1.2 seconds. Bundle size reduced by 45% through script consolidation.',
		seoImprovements:
			'Implemented structured product data (Product schema with price, availability, and reviews). Optimised meta titles and descriptions for all product and collection pages in both Dutch and English. Created category page content to target long-tail health and wellness keywords. Fixed duplicate content issues from URL parameters.',
		accessibilityImprovements:
			'Added skip-to-content and skip-to-product links. Improved colour contrast on product badges and sale indicators. Made the cart drawer keyboard-accessible with focus trapping. Added ARIA labels to all interactive elements including variant selectors and quantity inputs.',
		businessOutcome:
			'Mobile conversion rate improved by 28%. Cart abandonment dropped by 35%. Average session duration increased by 40%. The client reported a 4.8/5 post-launch UX satisfaction rating from customer surveys. Monthly revenue increased by 22% attributed directly to the improved mobile experience.',
		lessonsLearned:
			'Shopify stores can achieve excellent performance, but it requires auditing and replacing third-party apps. Custom implementations of common features (search, cart drawer) are often faster and more maintainable than app-based solutions. Mobile-first is not optional — over 70% of e-commerce traffic now comes from mobile devices.',
		role: 'Frontend Developer',
		duration: '4 weeks',
		industry: 'Health & E-Commerce',
		teamSize: '2 (Developer + Shopify Admin)',
		liveUrl: 'https://superfoodies.nl',
		repoUrl: ''
	},
	{
		id: 'mybyk',
		title: 'MYBYK',
		description:
			'Urban bike rental and mobility platform simplifying sustainable transportation across Indian cities.',
		outcomes: [
			'92 Lighthouse Performance on mobile',
			'97% accessibility score (WCAG 2.1 AA)',
			'22% increase in user session duration',
			'Served 5k+ active monthly users'
		],
		stack: ['React', 'TypeScript', 'REST APIs', 'Netlify Functions'],
		category:
			'Urban bike rental and mobility platform making sustainable transportation accessible across Indian cities.',
		image: Urban,
		href: '',
		problem:
			'MYBYK, an urban bike rental startup operating across Indian cities, needed a web application to help users find, rent, and manage bike subscriptions. The platform required real-time station data integration, an interactive map interface for locating available bikes, and a seamless subscription management flow — all while maintaining fast performance on mobile devices in areas with unreliable connectivity.',
		solution:
			'I built a React application with TypeScript, integrating multiple APIs for real-time bike availability and station data. The map interface used a lightweight approach to minimise DOM nodes while providing an intuitive bike-finding experience. Netlify Functions handled API proxying and data aggregation server-side. I implemented an offline-first strategy using service workers for station data caching, enabling basic functionality without internet connectivity.',
		challenges:
			'Integrating real-time data from bike station APIs while maintaining sub-second response times was the core technical challenge. I built a caching layer with stale-while-revalidate patterns and implemented optimistic UI updates — showing estimated bike availability immediately and updating with real data in the background. The map needed to work smoothly on low-end devices common in the Indian market.',
		performanceImprovements:
			'Achieved 92 Lighthouse Performance on mobile despite the complexity of map rendering and real-time data. Implemented virtualised list rendering for station lists, reducing DOM nodes by 70%. Code splitting reduced initial JavaScript by 45%. Service worker caching enabled near-instant repeat visits.',
		seoImprovements:
			'Implemented server-side rendering for public-facing station and route pages to ensure crawlability. Added structured data for bike stations and rental services. Created a dynamic sitemap. Meta descriptions are generated per city with relevant station information.',
		accessibilityImprovements:
			'Achieved 97% WCAG 2.1 AA compliance. Every interactive element — including map markers and station selectors — is fully keyboard-navigable. Screen reader announcements for station updates and real-time changes. High-contrast mode for the map interface. Reduced motion and animation for vestibular disorder considerations.',
		businessOutcome:
			'The platform serves 5,000+ active monthly users across Indian cities. User session duration increased by 22% as users explored additional stations and subscription plans. The accessibility-first approach received positive feedback from users. MYBYK continues to expand to new cities with the platform serving as their primary digital touchpoint.',
		lessonsLearned:
			'Accessibility-first design improves the experience for all users, not just those with disabilities. Real-time data integration requires careful caching strategies to maintain performance. Offline-first patterns are practical for web applications in emerging markets with unreliable connectivity.',
		role: 'Frontend Developer',
		duration: '8 weeks',
		industry: 'Mobility & Transportation',
		teamSize: '3 (Developer, Designer, Backend)',
		liveUrl: 'https://mybyk.in',
		repoUrl: ''
	},
	{
		id: 'allspeech',
		title: 'Allspeech',
		description:
			'Content platform and ecosystem designed for discovery, engagement, and lead generation through long-form content.',
		outcomes: [
			'45% growth in organic traffic post-launch',
			'3.5% lead conversion rate (industry avg 2.1%)',
			'< 1s TTI on content-heavy pages',
			'Zero layout shift (CLS score 0)'
		],
		stack: ['React', 'Netlify Functions', 'Typeform API'],
		category:
			'Content ecosystem designed for content discovery, audience engagement, and lead generation.',
		image: Allspeech,
		href: '',
		problem:
			'A content marketing company needed a platform to host and distribute long-form articles, case studies, and lead magnets. The existing WordPress site had slow page loads on content-heavy pages, poor content discovery through internal linking, and a generic contact form that was converting at only 1.2%.',
		solution:
			'I built a React-based content platform with server-side rendering for SEO. Implemented a component-based content layout system that allowed flexible article designs without sacrificing performance. Replaced the generic contact form with an embedded Typeform for conversational lead capture. Built related-content algorithms using tag-based similarity scoring.',
		challenges:
			'Content-heavy pages with embedded media, code blocks, and interactive elements presented a performance challenge. I solved this by implementing progressive hydration — critical above-fold content renders immediately, while interactive elements load as they enter the viewport. Custom lazy loading for embedded content reduced initial JavaScript payload by 55%.',
		performanceImprovements:
			'Time to Interactive under 1 second on content-heavy pages. Achieved zero Cumulative Layout Shift (CLS score 0) through proper image dimensioning and font preloading. Lighthouse Performance averaged 93. Bundle analysis identified and eliminated 120KB of unused CSS from a third-party library.',
		seoImprovements:
			'Implemented comprehensive Article schema with author, publisher, and image metadata. Created a topic cluster architecture — pillar pages linking to cluster content. Added breadcrumb navigation for improved crawl structure. Internal linking algorithm improved content discoverability for both users and search engines.',
		accessibilityImprovements:
			'Full keyboard navigation for article reading and content discovery. Proper heading hierarchy (H1 → H2 → H3). Accessible embedded content with iframe titles and ARIA labels. Skip-to-content and skip-to-related-articles links. Reading mode with adjustable font size and contrast.',
		businessOutcome:
			"Organic traffic grew by 45% within 3 months of launch, driven by improved technical SEO and content architecture. Lead conversion rate reached 3.5%, exceeding the 2.1% industry average. Average time on page increased by 60%. The platform's content discovery features led to users reading 3.2 articles per session on average.",
		lessonsLearned:
			'Content-heavy sites benefit enormously from progressive hydration — users perceive the site as fast even when total JavaScript is significant. Typeform integration improved conversions more than expected, likely due to the conversational UX. Topic clusters and strong internal linking are perhaps the highest-ROI SEO investment for content sites.',
		role: 'Lead Frontend Developer',
		duration: '10 weeks',
		industry: 'Content & Media',
		teamSize: '3 (Developer, Content Strategist, Designer)',
		liveUrl: '',
		repoUrl: ''
	},
	{
		id: 'fii-datalyzer',
		title: 'FII Datalyzer',
		description:
			'Investment intelligence platform powered by automated data crawling and real-time FII holding analytics.',
		outcomes: [
			'Real-time data updates every 15 minutes',
			'Processed 10k+ data points daily',
			'95th percentile API response < 200ms',
			'Automated crawling reduced manual effort by 90%'
		],
		stack: ['React', 'Node.js', 'GitHub Actions', 'Web Crawling'],
		category:
			'Investment intelligence platform for tracking Foreign Institutional Investor holdings with automated data crawling.',
		image: FII,
		href: '',
		problem:
			"An investment research firm needed a platform to aggregate and display Foreign Institutional Investor (FII) holding data from multiple regulatory sources. Previously, analysts spent 3-4 hours daily manually downloading and compiling data from PDF filings. The process was error-prone, slow, and limited the team's ability to identify trading patterns in real time. The platform needed to be private and access-controlled.",
		solution:
			'I built a full-stack platform with a React frontend and Node.js backend. GitHub Actions run automated cron jobs every 15 minutes to crawl regulatory websites, parse filings, and update the database. The frontend displays interactive dashboards with real-time data filtering, trend analysis charts, and export capabilities. Custom data pipelines transform raw filings into structured, queryable data. The platform is access-controlled with private login.',
		challenges:
			'Web crawling regulatory sites required handling inconsistent data formats, CAPTCHAs, and rate limiting. I built a resilient crawler with exponential backoff, proxy rotation, and fallback data sources. The dashboard needed to render thousands of data points without performance degradation — solved with virtualised tables, debounced filtering, and Web Worker-based data processing.',
		performanceImprovements:
			'95th percentile API response time under 200ms despite querying thousands of records. Dashboard renders with virtual scrolling for datasets of any size. Database indexed for 10x query speed improvement on common filters. GitHub Actions workflow optimised to complete crawl-and-update cycle in under 3 minutes.',
		seoImprovements:
			'The platform is private and access-controlled, so public SEO was not a primary focus. Internal search functionality with faceted filtering was implemented for data discovery within the platform.',
		accessibilityImprovements:
			'Financial charts include data table fallbacks for screen reader users. Colour palettes chosen for colour-blind accessibility with high contrast. Keyboard-navigable data tables with proper ARIA grid patterns. Focus management for dynamically updating content.',
		businessOutcome:
			"Manual data collection effort reduced by 90%, saving 3-4 hours of analyst time daily. The platform processes 10,000+ data points per day from multiple sources. Real-time crawling enabled the firm to identify trading patterns ahead of competitors. The automated data pipeline became the firm's competitive advantage in research speed.",
		lessonsLearned:
			'Web crawling in production requires robust error handling and monitoring — GitHub Actions provides good observability for scheduled jobs. Financial data visualisation needs to balance visual appeal with precision and accessibility. Automated data pipelines create immense business value by freeing skilled analysts from repetitive tasks.',
		role: 'Full-Stack Developer',
		duration: '12 weeks',
		industry: 'FinTech & Investment',
		teamSize: '2 (Developer + Financial Analyst)',
		liveUrl: 'https://fii2.vercel.app',
		repoUrl: ''
	}
];

export function getProject(id: string): Project | undefined {
	return [featuredProject, ...projects].find((p) => p.id === id);
}
