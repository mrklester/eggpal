import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useGetEggProductionStats } from '../../hooks/Dashboard';

type EggSize = 'small' | 'medium' | 'large' | 'xlarge';

const EGG_SIZES: EggSize[] = ['small', 'medium', 'large', 'xlarge'];

const toTitleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export type EggProductionCardProps = {
  year: number;
  /** Month number 1-12 */
  month: number;
};

const EggProductionCard = ({ year, month }: EggProductionCardProps) => {
  const { data, isLoading, isError } = useGetEggProductionStats({ year, month });

  const statsBySize = useMemo(() => {
    const map = new Map<string, { peak: number; average: number; lowest: number }>();
    (data ?? []).forEach((s) => {
      map.set(s.size, { peak: s.peak, average: s.average, lowest: s.lowest });
    });
    return map;
  }, [data]);

  const monthLabel = new Date(year, month - 1, 1).toLocaleString(undefined, { month: 'long' });

  return (
    <Box mt="6">
      <Flex justify="space-between" align="center" mb="3" flexWrap="wrap" gap="2">
        <Heading size="sm">Egg Production Stats</Heading>
        <Text fontSize="sm" color="gray.500">
          {isLoading ? 'Loading…' : isError ? 'Error' : `${monthLabel} ${year}`}
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="4">
        {EGG_SIZES.map((size) => {
          const stats = statsBySize.get(size) ?? { peak: 0, average: 0, lowest: 0 };

          return (
            <Box key={size} borderWidth="1px" p="4" rounded="md">
              <Heading size="sm" mb="3">
                {toTitleCase(size)}
              </Heading>

              <Flex direction="column" gap="2">
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="gray.500">
                    Peak
                  </Text>
                  <Text fontSize="sm" fontWeight="semibold">
                    {stats.peak}
                  </Text>
                </Flex>

                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="gray.500">
                    Average
                  </Text>
                  <Text fontSize="sm" fontWeight="semibold">
                    {Number.isFinite(stats.average) ? stats.average.toFixed(2) : '0.00'}
                  </Text>
                </Flex>

                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="gray.500">
                    Lowest
                  </Text>
                  <Text fontSize="sm" fontWeight="semibold">
                    {stats.lowest}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default EggProductionCard;

