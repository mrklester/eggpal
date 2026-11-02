export type AnalyticsEggProductionSizeMetricsResponse = {
  /** "small" | "medium" | "large" | "xlarge" */
  size: string;
  peak: number;
  average: number;
  lowest: number;
  total: number;
};

export type AnalyticsEggProductionMonthMetricsResponse = {
  year: number;
  /** Month number 1-12 */
  month: number;
  sizes: AnalyticsEggProductionSizeMetricsResponse[];
};

export type AnalyticsEggProductionComparisonResponse = {
  from: AnalyticsEggProductionMonthMetricsResponse;
  to: AnalyticsEggProductionMonthMetricsResponse;
};

