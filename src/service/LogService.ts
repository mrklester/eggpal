import { axiosInstance } from './apiClient';
import type { HarvestPayload } from '../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../entity/payload/ExpensesPayload';
import type { SalesPayload } from '../entity/payload/SalesPayload';

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
