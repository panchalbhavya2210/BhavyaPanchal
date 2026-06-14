type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const baseStyles = `
	body { margin: 0; padding: 0; background: #d0c8ca; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; }
	.wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
	.accent-bar { height: 4px; background: #dc2626; }
	.header { padding: 32px 40px 24px; border-bottom: 1px solid #f0ecee; }
	.header-logo { font-family: 'Space Grotesk', 'Manrope', sans-serif; font-size: 22px; font-weight: 700; color: #1a1a1a; letter-spacing: -0.02em; }
	.header-logo span { color: #dc2626; }
	.header-sub { font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #8c7d80; margin-top: 4px; }
	.body { padding: 32px 40px; }
	.body h2 { font-family: 'Space Grotesk', 'Manrope', sans-serif; font-size: 24px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; letter-spacing: -0.01em; }
	.body p { font-size: 15px; line-height: 1.6; color: #4a3d40; margin: 0 0 20px; }
	.field-block { margin-bottom: 16px; }
	.field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #8c7d80; margin-bottom: 4px; }
	.field-value { font-size: 15px; color: #1a1a1a; line-height: 1.5; }
	.divider { border: none; border-top: 1px solid #f0ecee; margin: 24px 0; }
	.cta { display: inline-block; background: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-family: 'Space Grotesk', 'Manrope', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 0.02em; margin-top: 8px; }
	.footer { background: #1a1a1a; padding: 24px 40px; }
	.footer p { color: #8c7d80; font-size: 12px; margin: 0 0 4px; }
	.footer-credits { color: #5c5054; font-size: 11px; }
`;

export function ownerEmail(data: FormData): string {
	return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${baseStyles}</style></head>
<body>
<div class="wrapper">
	<div class="accent-bar"></div>
	<div class="header">
		<div class="header-logo">Bhavya<span>Panchal</span></div>
		<div class="header-sub">New Contact Inquiry</div>
	</div>
	<div class="body">
		<h2>Someone reached out</h2>
		<p>A new message has been submitted through your portfolio contact form.</p>

		<div class="field-block">
			<div class="field-label">Name</div>
			<div class="field-value">${escapeHtml(data.name)}</div>
		</div>
		<div class="field-block">
			<div class="field-label">Email</div>
			<div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color:#dc2626;text-decoration:none;">${escapeHtml(data.email)}</a></div>
		</div>
		<div class="field-block">
			<div class="field-label">Subject</div>
			<div class="field-value">${escapeHtml(data.subject)}</div>
		</div>

		<hr class="divider">

		<div class="field-block">
			<div class="field-label">Message</div>
			<div class="field-value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
		</div>

		<a href="mailto:${escapeHtml(data.email)}?subject=Re:%20${encodeURIComponent(data.subject)}" class="cta">Reply to ${escapeHtml(data.name)}</a>
	</div>
	<div class="footer">
		<p>Bhavya Panchal &mdash; Frontend Developer &amp; UI Engineer</p>
		<p class="footer-credits">Ahmedabad, Gujarat &mdash; IN</p>
	</div>
</div>
</body>
</html>`;
}

export function userEmail(data: FormData): string {
	return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${baseStyles}</style></head>
<body>
<div class="wrapper">
	<div class="accent-bar"></div>
	<div class="header">
		<div class="header-logo">Bhavya<span>Panchal</span></div>
		<div class="header-sub">Message Received</div>
	</div>
	<div class="body">
		<h2>Thanks for reaching out, ${escapeHtml(data.name)}!</h2>
		<p>I've received your message and will get back to you as soon as possible. Here's a summary of what you sent:</p>

		<hr class="divider">

		<div class="field-block">
			<div class="field-label">Subject</div>
			<div class="field-value">${escapeHtml(data.subject)}</div>
		</div>
		<div class="field-block">
			<div class="field-label">Your Message</div>
			<div class="field-value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
		</div>

		<hr class="divider">

		<p style="font-size:13px;color:#8c7d80;">If you didn't submit this form, you can safely ignore this email.</p>
	</div>
	<div class="footer">
		<p>Bhavya Panchal &mdash; Frontend Developer &amp; UI Engineer</p>
		<p class="footer-credits">Ahmedabad, Gujarat &mdash; IN &nbsp;&bull;&nbsp; <a href="mailto:panchalbhavya2210@gmail.com" style="color:#8c7d80;">panchalbhavya2210@gmail.com</a></p>
	</div>
</div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
