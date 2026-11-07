export type SalesPayload = {
  eggSize: string;
  /** Money amount (existing behavior). */
  amount: number;
  /** Total eggs sold (tray*30 + pieces). */
  eggSalesCount: number;
};
