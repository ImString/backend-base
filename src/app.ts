import fastify, { FastifyInstance } from 'fastify';
import terminalHelper from './helper/terminal.helper';
import MongoAdapter from './adapters/mongo.adapter';

class App {
	public app: FastifyInstance;
	public appPort: number = parseInt(`${process.env.SERVER_PORT}`, 10) ?? 8080;
	public mongoDb: MongoAdapter;

	private databaseUrl = process.env.MONGODB_URL;

	constructor(appInit: { plugins: any; routes: any }) {
		this.app = fastify({ logger: true });
		this.mongoDb = new MongoAdapter(this.databaseUrl);
		this.connectDatabase();
	}

	private async connectDatabase() {
		await this.mongoDb.forceConnect();
	}

	public listen() {
		this.app.listen({ port: this.appPort }, () => {
			terminalHelper.success('CORE', 'Successfully initialized!');
		});
	}
}

export default App;
