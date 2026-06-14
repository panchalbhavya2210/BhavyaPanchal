import { fail } from '@sveltejs/kit';
import { config } from 'dotenv';
import { resolve } from 'node:path';
import nodemailer from 'nodemailer';
import { ownerEmail, userEmail } from '$lib/email/template';

config({ path: resolve(process.cwd(), '.env') });

function getTransporter() {
	const user = process.env.GMAIL_USER;
	const pass = process.env.GMAIL_APP_PASSWORD;
	console.log(user, pass)

	if (!user || !pass) {
		throw new Error('GMAIL_USER and GMAIL_APP_PASSWORD environment variables are required.');
	}

	return nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: { user, pass }
	});
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const subject = data.get('subject')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please fill in all required fields.',
				values: { name, email, subject, message }
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				values: { name, email, subject, message }
			});
		}

		const formData = { name, email, subject: subject || 'Project inquiry', message };
		const gmailUser = process.env.GMAIL_USER!;
		const to = process.env.OWNER_EMAIL ?? gmailUser;

		try {
			const transporter = getTransporter();

			await Promise.all([
				transporter.sendMail({
					from: `"${gmailUser}" <${gmailUser}>`,
					to,
					subject: `New Inquiry from ${name} — ${formData.subject}`,
					html: ownerEmail(formData),
					replyTo: email
				}),
				transporter.sendMail({
					from: `"Bhavya Panchal" <${gmailUser}>`,
					to: email,
					subject: `Thanks for reaching out, ${name}!`,
					html: userEmail(formData)
				})
			]);

			return { success: true };
		} catch (err) {
			console.error('Email send failed:', err);
			return fail(500, {
				error: 'Failed to send message. Please try again later.',
				values: { name, email, subject, message }
			});
		}
	}
};
