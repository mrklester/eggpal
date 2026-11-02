import { axiosInstance } from './apiClient';
import type { AnalyticsProfitComparisonResponse } from '../entity/response/AnalyticsProfitComparisonResponse';
import type { AnalyticsEggProductionComparisonResponse } from '../entity/response/AnalyticsEggProductionComparisonResponse';

export type GetProfitComparisonParams = {
  fromYear: number;
  /** Month number 1-12 */
  fromMonth: number;
  toYear: number;
  /** Month number 1-12 */
  toMonth: number;
};

export const getProfitComparison = async (
  params: GetProfitComparisonParams,
): Promise<AnalyticsProfitComparisonResponse> => {
  const response = await axiosInstance.get<AnalyticsProfitComparisonResponse>(
    '/analytics/profit-comparison',
    { params },
  );

  return response.data;
};

export type GetEggProductionComparisonParams = {
  fromYear: number;
  /** Month number 1-12 */
  fromMonth: number;
  toYear: number;
  /** Month number 1-12 */
  toMonth: number;
};

export const getEggProductionComparison = async (
  params: GetEggProductionComparisonParams,
): Promise<AnalyticsEggProductionComparisonResponse> => {
  const response = await axiosInstance.get<AnalyticsEggProductionComparisonResponse>(
    '/analytics/egg-production-comparison',
    { params },
  );

  return response.data;
};

