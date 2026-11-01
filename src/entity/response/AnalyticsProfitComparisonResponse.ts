export type AnalyticsMetricDirection = 'up' | 'down' | 'flat';

export type AnalyticsMetricChangeResponse = {
  delta: number;
  percentChange: number | null;
  direction: AnalyticsMetricDirection;
};

export type AnalyticsMoneyMetaResponse = {
  code: string;
  symbol: string;
  /** "major" = pesos, "minor" = centavos */
  amountUnit: 'major' | 'minor';
};

export type AnalyticsTotalsResponse = {
  sales: number;
  expenses: number;
  profit: number;
};

export type AnalyticsMonthTotalsResponse = {
  year: number;
  month: number;
  totals: AnalyticsTotalsResponse;
};

export type AnalyticsProfitComparisonResponse = {
  currency: AnalyticsMoneyMetaResponse;
  from: AnalyticsMonthTotalsResponse;
  to: AnalyticsMonthTotalsResponse;
  comparison: {
    sales: AnalyticsMetricChangeResponse;
    expenses: AnalyticsMetricChangeResponse;
    profit: AnalyticsMetricChangeResponse;
  };
};

