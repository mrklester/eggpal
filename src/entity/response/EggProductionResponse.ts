import type { HarvestPayload } from '../payload/HarvestPayload';

/**
 * API response models for egg production charts.
 *
 * The API typically returns a month with an array of days. Each day has a `date`
 * and totals for each egg size (small/medium/large/xlarge).
 *
 * Example JSON:
 * {
 *   "month": 10,
 *   "days": [
 *     { "date": "2026-10-01", "totals": { "small": 31, "medium": 41, "large": 22, "xlarge": 6 } },
 *     { "date": "2026-10-02", "totals": { "small": 28, "medium": 39, "large": 20, "xlarge": 7 } }
 *   ]
 * }
 */

export type EggProductionDayResponse = {
  /** ISO date string (recommended): YYYY-MM-DD */
  date: string;
  /** Total eggs collected for this day, broken down by size */
  totals: HarvestPayload;
};

export type EggProductionMonthResponse = {
  /** Month number 1-12 (e.g. 10 for October) */
  month: number;
  /** One entry per day that has data (could be sparse) */
  days: EggProductionDayResponse[];
};

/**
 * UI-friendly point shape for Recharts line charts:
 * `{ day: 1..31, small, medium, large, xlarge }`
 */
export type EggProductionChartPoint = { day: number } & HarvestPayload;
