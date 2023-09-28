import axios, { AxiosResponse } from "axios"

export const buyVipFunc = async (JWT: string) => {
	const data: AxiosResponse<{code: 0 | 1}> = await axios.postForm('https://cheilrus.com/api/User/userBuyVip', {
		grade: 2,
		lang: "rus",
		token: JWT
	})
	return data.data.code
}