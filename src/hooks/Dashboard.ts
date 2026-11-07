import {
  getEggProductionMonth,
  getEggProductionStats,
  getExpenses,
  getProfit,
  getSales,
  type GetMonthlyFinancialParams,
  type GetEggProductionMonthParams,
} from '../service/DashboardService';
import { useQuery } from '@tanstack/react-query';
import type { EggProductionMonthResponse } from '../entity/response/EggProductionResponse';
import type { EggProductionStatsResponse } from '../entity/response/EggProductionStatsResponse';

export const useGetProfit = (params: GetMonthlyFinancialParams) => {
  return useQuery<number, Error>({
    queryKey: ['profit', params.year, params.month],
    queryFn: () => getProfit(params),
    enabled:
      Number.isFinite(params.year) &&
      Number.isFinite(params.month) &&
      params.month >= 1 &&
      params.month <= 12,
  });
};

export const useGetSales = (params: GetMonthlyFinancialParams) => {
  return useQuery<number, Error>({
    queryKey: ['sales', params.year, params.month],
    queryFn: () => getSales(params),
    enabled:
      Number.isFinite(params.year) &&
      Number.isFinite(params.month) &&
      params.month >= 1 &&
      params.month <= 12,
  });
};

export const useGetExpenses = (params: GetMonthlyFinancialParams) => {
  return useQuery<number, Error>({
    queryKey: ['expenses', params.year, params.month],
    queryFn: () => getExpenses(params),
    enabled:
      Number.isFinite(params.year) &&
      Number.isFinite(params.month) &&
      params.month >= 1 &&
      params.month <= 12,
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

export const useGetEggProductionStats = (params: GetEggProductionMonthParams) => {
  return useQuery<EggProductionStatsResponse[], Error>({
    queryKey: ['egg-production-stats', params.year, params.month],
    queryFn: () => getEggProductionStats(params),
    enabled:
      Number.isFinite(params.year) &&
      Number.isFinite(params.month) &&
      params.month >= 1 &&
      params.month <= 12,
  });
};
