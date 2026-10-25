import { axiosInstance } from './apiClient';

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
