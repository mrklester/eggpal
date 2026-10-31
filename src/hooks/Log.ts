import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getExpensesHistory,
  getHarvestHistory,
  getSalesHistory,
  logExpenses,
  logHarvest,
  logSales,
  type GetHistoryParams,
} from '../service/LogService';
import type { HarvestPayload } from '../entity/payload/HarvestPayload';
import type { ExpensesPayload } from '../entity/payload/ExpensesPayload';
import type { SalesPayload } from '../entity/payload/SalesPayload';
import type { PagedResponse } from '../entity/response/PagedResponse';
import type {
  ExpensesHistoryItemResponse,
  HarvestHistoryItemResponse,
  SalesHistoryItemResponse,
} from '../entity/response/LogHistoryResponse';

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

export const useGetHarvestHistory = (params: GetHistoryParams) => {
  return useQuery<PagedResponse<HarvestHistoryItemResponse>, Error>({
    queryKey: ['harvest-history', params.page, params.pageSize, params.search ?? ''],
    queryFn: () => getHarvestHistory(params),
  });
};

export const useGetSalesHistory = (params: GetHistoryParams) => {
  return useQuery<PagedResponse<SalesHistoryItemResponse>, Error>({
    queryKey: ['sales-history', params.page, params.pageSize, params.search ?? ''],
    queryFn: () => getSalesHistory(params),
  });
};

export const useGetExpensesHistory = (params: GetHistoryParams) => {
  return useQuery<PagedResponse<ExpensesHistoryItemResponse>, Error>({
    queryKey: ['expenses-history', params.page, params.pageSize, params.search ?? ''],
    queryFn: () => getExpensesHistory(params),
  });
};
