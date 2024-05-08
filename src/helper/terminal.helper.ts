import ansicolor, { type AnsicolorMethods } from 'ansicolor';

export default class {
	static log(flag: string, flag_color: AnsicolorMethods, content: string[] | string) {
		content = ([] as string[]).concat(content);

		const formattedDate = new Date()
			.toLocaleString('pt-BR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				month: '2-digit',
				day: '2-digit',
				timeZone: 'America/Sao_Paulo'
			})
			.replace(',', '');

		console.log(flag_color(`${formattedDate} | [${flag.toUpperCase()}]`), ...content);
	}

	static success(flag: string, content: string[] | string) {
		this.log(flag, ansicolor.lightGreen, content);
	}

	static error(flag: string, content: string[] | string) {
		this.log(flag, ansicolor.lightRed, content);
	}

	static info(flag: string, content: string[] | string) {
		this.log(flag, ansicolor.lightCyan, content);
	}

	static warn(flag: string, content: string[] | string) {
		this.log(flag, ansicolor.lightYellow, content);
	}
}
