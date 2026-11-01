import { axiosInstance } from './apiClient';
import type { AnalyticsProfitComparisonResponse } from '../entity/response/AnalyticsProfitComparisonResponse';

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

