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
		stack: ['Shopify', 'Liquid', 'JavaScript', 'Analytics'],
		category: 'E-commerce platform focused on growth, retention, and customer experience.',
		image: HealthECom,
		href: ''
	},
	{
		id: '04',
		title: 'Urban Mobility',
		description: 'Mobility platform built to simplify transportation and improve accessibility.',
		stack: ['React', 'TypeScript', 'REST APIs', 'Netlify Functions'],
		category: 'Mobility platform built to simplify transportation and improve accessibility.',
		image: Urban,
		href: ''
	},
	{
		id: '05',
		title: 'Content Platform',
		description: 'Content ecosystem designed for discovery, engagement, and lead generation.',
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
		stack: ['React', 'Node.js', 'Github Actions', 'Crawling'],
		category:
			' Investment intelligence platform powered by real-time market insights.',
		image: FII,
		href: ''
	}
];
