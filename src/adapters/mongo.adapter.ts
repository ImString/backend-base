import ansicolor from 'ansicolor';
import terminalHelper from '@/helper/terminal.helper';
import { connect, connection, Connection } from 'mongoose';

class MongoAdapter {
	private _database: Connection;

	constructor(connectionUrl: string) {
		connect(connectionUrl);
		this._database = connection;
		this._database.on('open', this.connected);
		this._database.on('error', this.error);
		terminalHelper.success('MONGOOSE', 'Start load mongoose');
	}

	private connected() {
		terminalHelper.success('MONGOOSE', [
			'Successfully connected:'
			// ansicolor.cyan(this._database.db.databaseName)
		]);
	}

	private error(error: Error) {
		terminalHelper.error('MONGOOSE', [`Connection Failed.`, error.message]);
		throw error;
	}
}

export default MongoAdapter;
