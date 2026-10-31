import { axiosInstance } from './apiClient';
import type { HarvestPayload } from '../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../entity/payload/ExpensesPayload';
import type { SalesPayload } from '../entity/payload/SalesPayload';
import type { PagedResponse } from '../entity/response/PagedResponse';
import type {
  ExpensesHistoryItemResponse,
  HarvestHistoryItemResponse,
  SalesHistoryItemResponse,
} from '../entity/response/LogHistoryResponse';

export const logHarvest = async (harvest: HarvestPayload) => {
  const response = await axiosInstance.post('/log-harvest', harvest);
  return response.data.message;
};

export const logExpenses = async (expenses: ExpensesPayload) => {
  const response = await axiosInstance.post('/log-expenses', expenses);
  return response.data.message;
};

export const logSales = async (sales: SalesPayload) => {
  const reponse = await axiosInstance.post('/log-sales', sales);
  return reponse.data.message;
};

export type GetHistoryParams = {
  page: number;
  pageSize: number;
  search?: string;
};

export const getHarvestHistory = async (
  params: GetHistoryParams,
): Promise<PagedResponse<HarvestHistoryItemResponse>> => {
  const response = await axiosInstance.get<PagedResponse<HarvestHistoryItemResponse>>('/get-harvest-history', {
    params,
  });
  return response.data;
};

export const getSalesHistory = async (
  params: GetHistoryParams,
): Promise<PagedResponse<SalesHistoryItemResponse>> => {
  const response = await axiosInstance.get<PagedResponse<SalesHistoryItemResponse>>('/get-sales-history', {
    params,
  });
  return response.data;
};

export const getExpensesHistory = async (
  params: GetHistoryParams,
): Promise<PagedResponse<ExpensesHistoryItemResponse>> => {
  const response = await axiosInstance.get<PagedResponse<ExpensesHistoryItemResponse>>('/get-expenses-history', {
    params,
  });
  return response.data;
};
