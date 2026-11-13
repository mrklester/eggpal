import { useQuery } from '@tanstack/react-query';
import {
  getProfitComparison,
  getEggProductionComparison,
  getEggInventoryLeft,
  type GetProfitComparisonParams,
  type GetEggProductionComparisonParams,
} from '../service/AnalyticsService';
import type { AnalyticsProfitComparisonResponse } from '../entity/response/AnalyticsProfitComparisonResponse';
import type { AnalyticsEggProductionComparisonResponse } from '../entity/response/AnalyticsEggProductionComparisonResponse';
import type { AnalyticsEggInventoryLeftResponse } from '../entity/response/AnalyticsEggInventoryLeftResponse';

export const useGetProfitComparison = (params: GetProfitComparisonParams) => {
  return useQuery<AnalyticsProfitComparisonResponse, Error>({
    queryKey: ['analytics-profit-comparison', params.fromYear, params.fromMonth, params.toYear, params.toMonth],
    queryFn: () => getProfitComparison(params),
    enabled:
      Number.isFinite(params.fromYear) &&
      Number.isFinite(params.fromMonth) &&
      params.fromMonth >= 1 &&
      params.fromMonth <= 12 &&
      Number.isFinite(params.toYear) &&
      Number.isFinite(params.toMonth) &&
      params.toMonth >= 1 &&
      params.toMonth <= 12,
  });
};

export const useGetEggProductionComparison = (params: GetEggProductionComparisonParams) => {
  return useQuery<AnalyticsEggProductionComparisonResponse, Error>({
    queryKey: [
      'analytics-egg-production-comparison',
      params.fromYear,
      params.fromMonth,
      params.toYear,
      params.toMonth,
    ],
    queryFn: () => getEggProductionComparison(params),
    enabled:
      Number.isFinite(params.fromYear) &&
      Number.isFinite(params.fromMonth) &&
      params.fromMonth >= 1 &&
      params.fromMonth <= 12 &&
      Number.isFinite(params.toYear) &&
      Number.isFinite(params.toMonth) &&
      params.toMonth >= 1 &&
      params.toMonth <= 12,
  });
};

export const useGetEggInventoryLeft = () => {
  return useQuery<AnalyticsEggInventoryLeftResponse, Error>({
    queryKey: ['analytics-egg-inventory-left'],
    queryFn: () => getEggInventoryLeft(),
  });
};

