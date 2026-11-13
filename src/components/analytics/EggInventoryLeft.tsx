import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export type EggInventoryLeftProps = {
  /** Sum of eggharvest.TotalQuantity (mock for now). */
  totalEggsHarvested?: number;
  /** Sum of sales.EggSalesCount (mock for now). */
  totalEggsSold?: number;
};

const EGGS_PER_TRAY = 30;

const formatNumber = (value: number) => Math.round(value).toLocaleString();

const formatEggsLeft = (eggsLeft: number) => {
  const rounded = Math.trunc(eggsLeft);

  // If negative (sold > harvested), keep it simple and show as pieces.
  if (rounded < 0) return `${formatNumber(rounded)} pieces`;

  if (rounded < EGGS_PER_TRAY) return `${formatNumber(rounded)} pieces`;

  const trays = Math.floor(rounded / EGGS_PER_TRAY);
  const pieces = rounded % EGGS_PER_TRAY;
  return `${formatNumber(trays)} trays and ${formatNumber(pieces)} pieces`;
};

const EggInventoryLeft = ({
  // UI-first: static/mock values for now (swap with API data later).
  totalEggsHarvested = 12_450,
  totalEggsSold = 8_275,
}: EggInventoryLeftProps) => {
  const eggsLeft = totalEggsHarvested - totalEggsSold;

  return (
    <Box bg="white" border="1px solid" borderColor="gray.200" rounded="xl" boxShadow="sm" p="4">
      <Stack gap="1" mb="3">
        <Heading fontSize="lg">EggInventoryLeft</Heading>
        <Text fontSize="sm" color="gray.600">
          Inventory summary.
        </Text>
      </Stack>

      <Stack gap="2">
        <Flex justify="space-between" align="center" gap="4">
          <Text fontSize="sm" color="gray.600">
            Total Eggs Harvested
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            {formatNumber(totalEggsHarvested)}
          </Text>
        </Flex>

        <Flex justify="space-between" align="center" gap="4">
          <Text fontSize="sm" color="gray.600">
            Total Eggs Sold
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            {formatNumber(totalEggsSold)}
          </Text>
        </Flex>

        <Flex justify="space-between" align="center" gap="4" pt="1" borderTop="1px solid" borderColor="gray.100">
          <Text fontSize="sm" color="gray.600">
            Eggs Left
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            {formatEggsLeft(eggsLeft)}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EggInventoryLeft;
