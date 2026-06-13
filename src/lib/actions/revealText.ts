import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function revealText(node: HTMLElement, enabled = true) {
	if (!enabled) return {};

	const originalHTML = node.innerHTML;

	const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);

	const textNodes: Text[] = [];

	while (walker.nextNode()) {
		textNodes.push(walker.currentNode as Text);
	}

	textNodes.forEach((textNode) => {
		const text = textNode.textContent ?? '';

		const fragment = document.createDocumentFragment();

		const words = text.split(/(\s+)/);

		words.forEach((word) => {
			// preserve spaces
			if (/^\s+$/.test(word)) {
				fragment.appendChild(document.createTextNode(word));
				return;
			}

			const wordWrap = document.createElement('span');
			wordWrap.className = 'word-wrap';

			word.split('').forEach((char) => {
				const wrap = document.createElement('span');
				wrap.className = 'char-wrap';

				const inner = document.createElement('span');
				inner.className = 'char';
				inner.textContent = char;

				wrap.appendChild(inner);
				wordWrap.appendChild(wrap);
			});

			fragment.appendChild(wordWrap);
		});

		textNode.parentNode?.replaceChild(fragment, textNode);
	});

	const chars = node.querySelectorAll('.char');
	const count = chars.length;
	const stagger = Math.max(0.01, (0.12 / count) * 10);
	gsap.set(chars, {
		yPercent: 110
	});

	gsap.to(chars, {
		yPercent: 0,
		duration: 1.2,
		stagger,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			once: true
		}
	});

	return {
		destroy() {
			node.innerHTML = originalHTML;
		}
	};
}
