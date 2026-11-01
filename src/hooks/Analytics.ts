import { useQuery } from '@tanstack/react-query';
import { getProfitComparison, type GetProfitComparisonParams } from '../service/AnalyticsService';
import type { AnalyticsProfitComparisonResponse } from '../entity/response/AnalyticsProfitComparisonResponse';

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

