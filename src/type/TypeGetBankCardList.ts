export interface IGetBankCardList {
	code: 0 | 1,
	data: IArray[]
}
interface IArray {
	id: number,
	card_no: string
}