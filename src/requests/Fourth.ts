import axios, { AxiosResponse } from "axios"
import { IThirdRequest } from "../type/TypeThird"

export const fourthRequest = async (JWT: string, id: number) => {
	const data: AxiosResponse<IThirdRequest> = await axios.postForm('https://cheilrus.com/api/task/taskOrderSubmit', {
		order_id: id,
		"examine_demo[]": "",
		lang: "rus",
		token: JWT
	})
}