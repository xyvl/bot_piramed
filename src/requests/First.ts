import axios, { AxiosResponse } from "axios"
import { IFirstRequest } from "../type/TypeFirst"

export const firstRequest = async (JWT: string) => {
	const data: AxiosResponse<IFirstRequest> = await axios.postForm('https://cheilrus.com/api/task/getTaskList', {
		group_id: 22,
		task_level: 11,
		page_no: 1,
		is_u: 0,
		token: JWT
	})
	return data.data.info[0].task_id
}