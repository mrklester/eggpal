export type AnalyticsEggInventoryLeftResponse = {
  /** Sum of eggharvest.TotalQuantity */
  totalEggsHarvested: number;
  /** Sum of sales.EggSalesCount */
  totalEggsSold: number;
  /** totalEggsHarvested - totalEggsSold */
  eggsLeft: number;
};

