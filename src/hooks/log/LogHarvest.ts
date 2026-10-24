import { useMutation } from '@tanstack/react-query';
import { logHarvest } from '../../service/log/LogService';
import type { HarvestPayload } from '../../entity/payload/HarvestPayload';

export const useLogHarvest = () => {
  return useMutation<string, Error, HarvestPayload>({
    mutationFn: (data) => logHarvest(data),
  });
};
