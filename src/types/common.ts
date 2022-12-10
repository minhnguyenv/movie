export type ListResponse<T> = {
  page?: number;
  results: T[];
  total_pages?: number;
  total_results?: number;
  dates?: {
    minimum?: string;
    maximum?: string;
  };
};