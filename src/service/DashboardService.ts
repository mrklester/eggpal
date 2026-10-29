import { axiosInstance } from './apiClient';
import type { EggProductionMonthResponse } from '../entity/response/EggProductionResponse';

export const getProfit = async () => {
  const response = await axiosInstance.get('/get-profit');
  return response.data.profit;
};

export const getSales = async () => {
  const response = await axiosInstance.get('/get-sales');
  return response.data.sales;
};

export const getExpenses = async () => {
  const response = await axiosInstance.get('/get-expenses');
  return response.data.expenses;
};

export type GetEggProductionMonthParams = {
  year: number;
  /** Month number 1-12 */
  month: number;
};

/**
 * Fetch daily egg production totals for a given month.
 *
 * Expected backend endpoint (consistent with existing naming):
 * - GET `/get-egg-production?year=2026&month=10`
 *
 * Expected response body (recommended):
 * - EggProductionMonthResponse directly: { year, month, days: [...] }
 */
export const getEggProductionMonth = async (params: GetEggProductionMonthParams): Promise<EggProductionMonthResponse> => {
  const response = await axiosInstance.get<EggProductionMonthResponse>('/get-egg-production', {
    params,
  });
  return response.data;
};
