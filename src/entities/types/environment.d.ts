declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			MONGODB_URL: string;
			SERVER_PORT: string;
		}
	}
}

export {};
