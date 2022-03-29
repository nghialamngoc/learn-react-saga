export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';
  gender?: 'male' | 'female';
  mark_gte?: number;
  mark_lte?: number;
  name_like?: string;
  city?: string;
}
