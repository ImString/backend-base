import ansicolor from 'ansicolor';
import terminalHelper from '@/helper/terminal.helper';
import mongoose, { Connection } from 'mongoose';

class MongoAdapter {
	private connectionUrl: string;

	constructor(connectionUrl: string) {
		this.connectionUrl = connectionUrl;
		this.forceConnect();
	}

	private async forceConnect() {
		await mongoose.connect(this.connectionUrl).then(this.connected).catch(this.error);
	}

	private connected() {
		terminalHelper.success('MONGOOSE', [
			'Successfully connected:',
			ansicolor.cyan(mongoose.connection.db.databaseName)
		]);
	}

	private error(error: Error) {
		terminalHelper.error('MONGOOSE', [`Connection Failed.`, error.message]);
		throw error;
	}

	public database(): Connection {
		return mongoose.connection;
	}
}

export default MongoAdapter;
