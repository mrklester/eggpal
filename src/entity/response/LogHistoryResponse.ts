export type HarvestHistoryItemResponse = {
  id: number;
  date: string; // YYYY-MM-DD
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  totalQuantity: number;
};

export type SalesHistoryItemResponse = {
  id: number;
  date: string; // YYYY-MM-DD
  eggSize: string;
  amount: number;
};

export type ExpensesHistoryItemResponse = {
  id: number;
  date: string; // YYYY-MM-DD
  category: string;
  amount: number;
};

