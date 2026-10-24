import { useMutation } from '@tanstack/react-query';
import { logHarvest, logExpenses } from '../service/log/LogService';
import type { HarvestPayload } from '../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../entity/payload/ExpensesPayload';

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
