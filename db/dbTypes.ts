export type User = {
	id: number;
	login: string;
	password: string;
	first_name: string;
	last_name: string;
	balance: number;
}

export type Winner = {
	id: number;
	user_id: string;
	score: number;
	win_date: string;
}