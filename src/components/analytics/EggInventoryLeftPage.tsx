import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useGetEggInventoryLeft } from '../../hooks/Analytics';
import EggInventoryLeft from './EggInventoryLeft';

const EggInventoryLeftPage = () => {
  const { data, isLoading, isError, error } = useGetEggInventoryLeft();

  // UI-first fallback until backend endpoint is implemented.
  const totalEggsHarvested = data?.totalEggsHarvested ?? 12_450;
  const totalEggsSold = data?.totalEggsSold ?? 8_275;

  return (
    <Box minH="100dvh" w="full" p="4">
      <Box pt="6" pb="4">
        <Stack gap="1">
          <Heading fontSize="2xl">Egg Inventory Left</Heading>
          <Text color="gray.600" fontSize="sm">
            Shows total eggs harvested, total eggs sold, and remaining inventory
          </Text>
        </Stack>
      </Box>

      {isLoading ? (
        <Text fontSize="sm" mb="3">
          Loading inventory…
        </Text>
      ) : null}

      {isError ? (
        <Text fontSize="sm" mb="3" color="red.500">
          Failed to load inventory{error?.message ? `: ${error.message}` : '.'}
        </Text>
      ) : null}

      <EggInventoryLeft totalEggsHarvested={totalEggsHarvested} totalEggsSold={totalEggsSold} />
    </Box>
  );
};

export default EggInventoryLeftPage;
