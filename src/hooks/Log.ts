import { useMutation } from '@tanstack/react-query';
import { logHarvest, logExpenses, logSales } from '../service/LogService';
import type { HarvestPayload } from '../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../entity/payload/ExpensesPayload';
import type { SalesPayload } from '../entity/payload/SalesPayload';

export const useLogHarvest = () => {
  return useMutation<string, Error, HarvestPayload>({
    mutationFn: (data) => logHarvest(data),
  });
};

export const useLogExpenses = () => {
  return useMutation<string, Error, ExpensesPayload>({
    mutationFn: (data) => logExpenses(data),
  });
};

export const useLogSales = () => {
  return useMutation<string, Error, SalesPayload>({
    mutationFn: (data) => logSales(data),
  });
};
