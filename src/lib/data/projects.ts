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
};

export const featuredProject: Project = {
	id: '01',
	title: 'Electron Enterprise',
	description:
		'Modern corporate website focused on storytelling, user experience, and lead generation for a growing enterprise.',
	outcomes: [
		'3.2s → 1.1s page load (LCP)',
		'94 Lighthouse Performance score',
		'100% A11y score',
		'40% increase in contact form conversions'
	],
	stack: ['Remix', 'Framer Motion'],
	category:
		'Modern corporate website focused on storytelling, user experience, and lead generation.',
	image: ElectronEnterprise,
	href: 'https://elecctronenterprise.in'
};

export const projects: Project[] = [
	{
		id: '02',
		title: 'Rakshit Jain',
		description:
			'A creative developer portfolio showcasing selected work, experiments, and frontend craftsmanship.',
		outcomes: [
			'96 Lighthouse Performance score',
			'100% Accessibility compliance',
			'< 1s FCP across all pages',
			'Smooth 60fps page transitions'
		],
		stack: ['SvelteKit', 'GSAP', 'Tailwind', 'Firebase', 'Appwrite'],
		category:
			'A creative developer portfolio showcasing selected work, experiments, and frontend craftsmanship.',
		image: RakshitJain,
		href: 'https://rakshit-jain.vercel.app'
	},
	{
		id: '03',
		title: 'Health Commerce',
		description: 'E-commerce platform focused on growth, retention, and customer experience.',
		outcomes: [
			'28% improvement in mobile conversion rate',
			'2.1s → 0.8s avg page load time',
			'35% reduction in cart abandonment',
			'4.8/5 post-launch UX rating'
		],
		stack: ['Shopify', 'Liquid', 'JavaScript', 'Analytics'],
		category: 'E-commerce platform focused on growth, retention, and customer experience.',
		image: HealthECom,
		href: ''
	},
	{
		id: '04',
		title: 'Urban Mobility',
		description: 'Mobility platform built to simplify transportation and improve accessibility.',
		outcomes: [
			'92 Lighthouse Performance on mobile',
			'97% accessibility score (WCAG 2.1 AA)',
			'22% increase in user session duration',
			'Served 5k+ active monthly users'
		],
		stack: ['React', 'TypeScript', 'REST APIs', 'Netlify Functions'],
		category: 'Mobility platform built to simplify transportation and improve accessibility.',
		image: Urban,
		href: ''
	},
	{
		id: '05',
		title: 'Content Platform',
		description: 'Content ecosystem designed for discovery, engagement, and lead generation.',
		outcomes: [
			'45% growth in organic traffic post-launch',
			'3.5% lead conversion rate (industry avg 2.1%)',
			'< 1s TTI on content-heavy pages',
			'Zero layout shift (CLS score 0)'
		],
		stack: ['React', 'Netlify Functions', 'Typeform API'],
		category: 'Content ecosystem designed for discovery, engagement, and lead generation.',
		image: Allspeech,
		href: ''
	},
	{
		id: '06',
		title: 'FII Holding Data',
		description:
			'Investment intelligence platform powered by real-time market insights and automated data crawling.',
		outcomes: [
			'Real-time data updates every 15 minutes',
			'Processed 10k+ data points daily',
			'95th percentile API response < 200ms',
			'Automated crawling reduced manual effort by 90%'
		],
		stack: ['React', 'Node.js', 'Github Actions', 'Crawling'],
		category:
			' Investment intelligence platform powered by real-time market insights.',
		image: FII,
		href: ''
	}
];
