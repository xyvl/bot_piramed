import axios, { AxiosResponse } from "axios"
import { ILoginRequest } from "../type/TypeLogin"

export const loginRequest = async (i: number, data: any) => {
	const tok: AxiosResponse<ILoginRequest> = await axios.postForm('https://cheilrus.com/api/User/Login', {
		username: data[i].telephone,
		password: data[i].password,
		lang: "rus",
	})
	return tok.data
}