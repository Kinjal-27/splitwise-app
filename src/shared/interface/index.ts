export interface IResponseObject<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface IObj {
	[key: string]: string | number;
}

export interface IPagination {
	currentPage: number;
	nextPage: number | null;
	recordPerPage: number;
	remainingCount: number;
	total: number;
	totalPages: number;
}

interface IColumn {
	sort?: boolean;
	name: string;
}
export interface ITableCell {
	title: string;
	style: IObj;
	key?: string;
	sortable?: boolean;
	column: IColumn;
}
