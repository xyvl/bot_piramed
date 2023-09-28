export interface IFirstRequest {
	code: number,
	data_total_nums: number,
	data_total_page: number,
	data_current_page: string,
	info: IArrayTasks[]
}
interface IArrayTasks {
	task_id: number,
	title: string,
	username: string,
	is_fx: number,
	icon: string,
	is_l: number,
	status_dec: string,
	vip_dec: string,
	group_info: string,
	group_name: string,
	surplus_number: number,
	reward_price: number,
	link_info: string,
	status: number,
	total_number: number,
	end_time: string
}