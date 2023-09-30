import axios from "axios"

export const addBankCardRequest = async (JWT: string, name: string, address: string) => {
	await axios.postForm('https://cheilrus.com/api/Account/AddBankCard', {
		name,
		bank_source: "USDT",
		bank_code: "TRC",
		bank_name: "TRC",
		card_no: address,
		lang:"rus",
		token: JWT,
		bank_clabe: 245147,
		bank_id: '',
		ifsc: '',
		mobile: '',
		email: '',
	})
}