// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface ImportMetaEnv {
	readonly GMAIL_USER: string;
	readonly GMAIL_APP_PASSWORD: string;
	readonly OWNER_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

export {};
