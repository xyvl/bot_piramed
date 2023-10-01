import axios from "axios"

export const fourthRequest = async (JWT: string, id: number) => {
	await axios.postForm('https://cheilrus.com/api/task/taskOrderSubmit', {
		order_id: id,
		"examine_demo[]": "",
		lang: "rus",
		token: JWT
	})
}