import axios from "axios"

export const CreateFondPasswordRequest = async (JWT: string, password: string) => {
	await axios.postForm('https://cheilrus.com/api/user/setuserinfo', {
		n_payword: password,
		r_payword: password,
		lang: "rus",
		token: JWT
	})
}