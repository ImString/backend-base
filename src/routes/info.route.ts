interface Configuration {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	query: {
		properties: Record<string, string>;
	};
}

type CreateRouterData<T extends Configuration> = Omit<Configuration, 'query'> & {
	query: T['query']['properties'];
};

interface CreateRouterOptions<T extends Configuration> {
	configuration: () => T;
	execute: (data: CreateRouterData<T>) => void;
}

class InfoRoute {
	configuration() {
		return {
			method: 'GET',
			query: {
				properties: {
					domain: 'cherrycode.com.br'
				}
			}
		};
	}

	execute(data) {
		console.log('execute', data);
	}
}
