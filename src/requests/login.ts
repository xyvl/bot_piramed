import axios, { AxiosResponse } from "axios"
import { ILoginRequest } from "../type/TypeLogin"
import { data } from "../data"

export const loginRequest = async (i: number) => {
	const tok: AxiosResponse<ILoginRequest> = await axios.postForm('https://cheilrus.com/api/User/Login', {
		username: data[i].telephone,
		password: data[i].password,
		lang: "rus",
	})
	return tok.data
}