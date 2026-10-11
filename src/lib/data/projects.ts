/**
 * A deliberately short selection of real projects.
 * Only details that are verified are kept here — no invented metrics or links.
 */
export type SelectedProject = {
	id: string;
	title: string;
	description: string;
	stack: string[];
	/** Verified live URL. Omit when there is nothing certain to link to. */
	href?: string;
};

export const selectedProjects: SelectedProject[] = [
	{
		id: 'electron-enterprise',
		title: 'Electron Enterprise',
		description:
			'Corporate website for an electrical engineering and turnkey EPC company in Ahmedabad — built with Next.js, with SEO work and a contact form integrated with Brevo.',
		stack: ['Next.js', 'Technical SEO', 'Brevo'],
		href: 'https://elecctronenterprise.in'
	},
	{
		id: 'rakshit-jain',
		title: 'Rakshit Jain — Designer Portfolio',
		description:
			'Portfolio website for a UI/UX designer, covering selected work, design philosophy and frontend craft — with smooth, performance-conscious motion.',
		stack: ['SvelteKit', 'GSAP', 'Tailwind CSS', 'Firebase'],
		href: 'https://rakshit-jain.vercel.app'
	},
	{
		id: 'fii-datalyzer',
		title: 'FII Datalyzer',
		description:
			'Investment-research tool for tracking FII holdings in Indian markets — scheduled crawlers collect regulatory filings and turn them into a searchable dashboard.',
		stack: ['React', 'Node.js', 'GitHub Actions'],
		href: 'https://fii2.vercel.app'
	}
];
