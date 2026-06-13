import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Blob {
	color: string;
	width: string;
	height: string;
	x: string;
	y: string;
	speedX: number;
	speedY: number;
}

export function revealGradientBg(node: HTMLElement) {
	node.style.position = 'relative';
	node.style.overflow = 'hidden';

	const blobs: Blob[] = [
		{
			color: 'rgba(220, 38, 38, 0.07)',
			width: '700px',
			height: '500px',
			x: '-15%',
			y: '10%',
			speedX: 60,
			speedY: -80
		},
		{
			color: 'rgba(220, 38, 38, 0.05)',
			width: '550px',
			height: '400px',
			x: '55%',
			y: '50%',
			speedX: -40,
			speedY: -60
		},
		{
			color: 'rgba(220, 38, 38, 0.04)',
			width: '450px',
			height: '550px',
			x: '25%',
			y: '70%',
			speedX: 30,
			speedY: 50
		}
	];

	const blobElements: HTMLDivElement[] = [];

	blobs.forEach((blob) => {
		const el = document.createElement('div');
		el.style.position = 'absolute';
		el.style.width = blob.width;
		el.style.height = blob.height;
		el.style.borderRadius = '50%';
		el.style.background = `radial-gradient(ellipse at center, ${blob.color} 0%, transparent 70%)`;
		el.style.filter = 'blur(80px)';
		el.style.pointerEvents = 'none';
		el.style.zIndex = '0';
		el.style.left = blob.x;
		el.style.top = blob.y;
		el.style.opacity = '0';

		node.insertBefore(el, node.firstChild);
		blobElements.push(el);

		gsap.to(el, {
			opacity: 1,
			duration: 1.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: node,
				start: 'top 80%',
				once: true
			}
		});

		gsap.to(el, {
			x: blob.speedX,
			y: blob.speedY,
			ease: 'none',
			scrollTrigger: {
				trigger: node,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 0.5
			}
		});
	});

	return {
		destroy() {
			blobElements.forEach((el) => el.remove());
			ScrollTrigger.getAll().forEach((st) => {
				if (st.vars.trigger === node) st.kill();
			});
		}
	};
}
