import axios from 'axios'
const token = '6632271391:AAEqDHmo-p-tqUFGVRMG5ZfS29rXFZDUgoU'
const chat_id = '-1001998324739'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}




