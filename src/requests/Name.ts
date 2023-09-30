import axios from "axios"
import { getName } from "../function/name"

export const nameRequest = async (JWT: string) => {
	const name = getName()
	await axios.postForm('https://cheilrus.com/api/user/setuserinfo', {
		realname: name,
		lang: "rus",
		token: JWT
	})
}