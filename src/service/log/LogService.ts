import { axiosInstance } from '../apiClient';
import type { HarvestPayload } from '../../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../../entity/payload/ExpensesPayload';

export const logHarvest = async (harvest: HarvestPayload) => {
  const response = await axiosInstance.post('/log-harvest', harvest);
  return response.data.message;
};

export const logExpenses = async (expenses: ExpensesPayload) => {
  const response = await axiosInstance.post('/log-expenses', expenses);
  return response.data.message;
};
