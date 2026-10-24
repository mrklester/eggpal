import { axiosInstance } from '../apiClient';
import type { HarvestPayload } from '../../entity/payload/HarvestPayload';

export const logHarvest = async (harvest: HarvestPayload) => {
  const response = await axiosInstance.post('/log-harvest', harvest);
  return response.data.message;
};
