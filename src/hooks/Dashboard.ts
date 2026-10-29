import {
  getEggProductionMonth,
  getExpenses,
  getProfit,
  getSales,
  type GetEggProductionMonthParams,
} from '../service/DashboardService';
import { useQuery } from '@tanstack/react-query';
import type { EggProductionMonthResponse } from '../entity/response/EggProductionResponse';

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

export const useGetEggProductionMonth = (params: GetEggProductionMonthParams) => {
  return useQuery<EggProductionMonthResponse, Error>({
    queryKey: ['egg-production', params.year, params.month],
    queryFn: () => getEggProductionMonth(params),
    enabled:
      Number.isFinite(params.year) &&
      Number.isFinite(params.month) &&
      params.month >= 1 &&
      params.month <= 12,
  });
};
