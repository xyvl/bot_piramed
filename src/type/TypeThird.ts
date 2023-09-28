export interface IThirdRequest {
	code: 1 | 0,
	today_max_task: 5,
	today_receive_task: 3,
	today_ok_task: 2,
	data_total_nums: 1,
	data_total_page: 1,
	data_current_page: "1",
	info: IArrayTasks[]
}
interface IArrayTasks {
	task_id: number,
	order_id: number,
	title: "Cheil",
	username: "182****5969",
	o_username: "578****8272",
	group_name: "TikTok",
	is_fx: number,
	icon: string,
	vip_dec: "Estagiário",
	surplus_number: number,
	group_info: "TikTok",
	reward_price: "24.00",
	link_info: "https:\/\/www.tiktok.com\/@thekiryalife\/video\/7067501766660721921?lang=zh-Hans",
	add_time: "2023.09.25-20:33:23",
	trial_time: "",
	handle_time: "",
	status: number,
	requirement: "",
	status_dec: "进行中"
}