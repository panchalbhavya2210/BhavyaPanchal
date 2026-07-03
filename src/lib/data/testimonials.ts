export type Testimonial = {
	name: string;
	company: string;
	role: string;
	text: string;
	rating: number;
	linkedIn?: string;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Client',
		company: 'Electrical Engineering Firm',
		role: 'Operations Director',
		text: 'Bhavya delivered our corporate website with a 100% accessibility score and 94 Lighthouse performance. The new site generated a 40% increase in contact form conversions within the first month. Professional, fast, and detail-oriented — he understood our industry and translated it into a compelling digital presence.',
		rating: 5
	},
	{
		name: 'Client',
		company: 'Health & Wellness Brand',
		role: 'E-Commerce Manager',
		text: 'The Shopify store rebuild improved our mobile conversion rate by 28% and reduced cart abandonment by 35%. Bhavya replaced bloated third-party apps with custom implementations that made the site noticeably faster. His performance optimization work was exceptional — page load dropped from 2.1s to 0.8s.',
		rating: 5
	},
	{
		name: 'Client',
		company: 'UI/UX Design Agency',
		role: 'Creative Director',
		text: 'Outstanding frontend development skills. The portfolio Bhavya built for our designer runs at 60fps with smooth GSAP animations and scores 96 on Lighthouse. He treats accessibility and performance as foundational, not afterthoughts. The site itself became a portfolio piece we reference in client conversations.',
		rating: 5
	}
];
