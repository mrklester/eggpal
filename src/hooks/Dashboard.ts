import { getExpenses, getProfit, getSales } from '../service/DashboardService';
import { useQuery } from '@tanstack/react-query';

export const useGetProfit = () => {
  return useQuery<number, Error>({
    queryKey: ['profit'],
    queryFn: () => getProfit(),
  });
};

export const useGetSales = () => {
  return useQuery<number, Error>({
    queryKey: ['sales'],
    queryFn: () => getSales(),
  });
};

export const useGetExpenses = () => {
  return useQuery<number, Error>({
    queryKey: ['expenses'],
    queryFn: () => getExpenses(),
  });
};
