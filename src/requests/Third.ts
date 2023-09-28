import axios, { AxiosResponse } from "axios"
import { IThirdRequest } from "../type/TypeThird"

export const thirdRequest = async (JWT: string) => {
	const data: AxiosResponse<IThirdRequest> = await axios.postForm('https://cheilrus.com/api/task/taskOrderlist', {
		status: 1,
		page_no: 1,
		is_u: 2,
		lang: "rus",
		token: JWT
	})
	if (data.data.code === 1)
		return data.data.info[0].order_id
	else
		return 0
}