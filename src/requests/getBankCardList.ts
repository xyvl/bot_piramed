import axios, { AxiosResponse } from "axios"
import { IGetBankCardList } from "../type/TypeGetBankCardList"
export const getBankCardListRequest = async (JWT: string) => {
	const data: AxiosResponse<IGetBankCardList> = await axios.postForm('https://cheilrus.com/api/Account/getBankCardList', {
		lang: "rus",
		token: JWT
	})
	return data.data
}