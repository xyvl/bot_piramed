import axios, { AxiosResponse } from "axios"
import { ISecondRequest } from "../type/TypeSecond"

export const secondRequest = async (JWT: string, id: number) => {
	const data: AxiosResponse<ISecondRequest> = await axios.postForm('https://cheilrus.com/api/task/receiveTask', {
		id: id,
		lang: "rus",
		token: JWT
	})
	return [data.data.code, data.data.code_dec]
}