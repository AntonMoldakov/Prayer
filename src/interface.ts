export interface IColumn {
	id: number,
	title: string,
	description: string
}

export interface ICard {
	id: number,
	columnId: number,
	title: string,
	description: string,
	checked: boolean,
	subscribed: number,
	prayedByMe: number,
	prayedByOthers: number
}
