import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { useGetProfitComparison } from '../../hooks/Analytics';

const YEAR = 2026;

const MONTH_OPTIONS = [
  { label: 'January', month: 1 },
  { label: 'February', month: 2 },
  { label: 'March', month: 3 },
  { label: 'April', month: 4 },
  { label: 'May', month: 5 },
  { label: 'June', month: 6 },
  { label: 'July', month: 7 },
  { label: 'August', month: 8 },
  { label: 'September', month: 9 },
  { label: 'October', month: 10 },
  { label: 'November', month: 11 },
  { label: 'December', month: 12 },
] as const;

const getMonthLabel = (month: number) =>
  new Date(YEAR, month - 1, 1).toLocaleString(undefined, { month: 'long' });

const formatCurrency = (value: number) => `₱${Math.round(value).toLocaleString()}`;

type Change = {
  delta: number;
  percent: number | null;
  direction: 'up' | 'down' | 'flat';
};

const calcChange = (fromValue: number, toValue: number): Change => {
  const delta = toValue - fromValue;
  const direction: Change['direction'] = delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
  const percent =
    fromValue === 0 ? null : Math.abs(fromValue) > 0 ? (delta / Math.abs(fromValue)) * 100 : null;
  return { delta, percent, direction };
};

type MetricComparisonCardProps = {
  label: string;
  fromMonth: number;
  toMonth: number;
  fromValue: number;
  toValue: number;
};

const MetricComparisonCard = ({
  label,
  fromMonth,
  toMonth,
  fromValue,
  toValue,
}: MetricComparisonCardProps) => {
  const change = useMemo(() => calcChange(fromValue, toValue), [fromValue, toValue]);

  const changeColor =
    change.direction === 'up' ? 'green.600' : change.direction === 'down' ? 'red.600' : 'gray.600';

  const changeBg =
    change.direction === 'up' ? 'green.50' : change.direction === 'down' ? 'red.50' : 'gray.50';

  const changeText = (() => {
    if (change.direction === 'flat') return 'No change';
    const sign = change.delta > 0 ? '+' : '';
    const deltaText = `${sign}${formatCurrency(change.delta)}`;
    const percentText =
      change.percent === null ? 'N/A' : `${change.percent > 0 ? '+' : ''}${change.percent.toFixed(1)}%`;
    return `${deltaText} (${percentText})`;
  })();

  return (
    <Box borderWidth="1px" p="4" rounded="md" bg="white">
      <Flex justify="space-between" align="start" gap="3">
        <Stack gap="1">
          <Heading size="sm">{label}</Heading>
          <Text fontSize="sm" color="gray.600">
            {getMonthLabel(fromMonth)} → {getMonthLabel(toMonth)}
          </Text>
        </Stack>

        <Flex
          align="center"
          gap="2"
          px="2.5"
          py="1.5"
          rounded="full"
          bg={changeBg}
          color={changeColor}
          fontSize="sm"
          fontWeight="semibold"
          whiteSpace="nowrap"
        >
          {change.direction === 'up' ? <FiArrowUpRight /> : change.direction === 'down' ? <FiArrowDownRight /> : null}
          <Text as="span">{changeText}</Text>
        </Flex>
      </Flex>

      <Flex mt="4" gap="3" flexWrap="wrap">
        <Box flex="1" minW="180px" borderWidth="1px" rounded="md" p="3" borderColor="gray.200">
          <Text fontSize="xs" color="gray.500" fontWeight="semibold">
            From ({getMonthLabel(fromMonth)} {YEAR})
          </Text>
          <Text mt="1" fontSize="lg" fontWeight="semibold">
            {formatCurrency(fromValue)}
          </Text>
        </Box>
        <Box flex="1" minW="180px" borderWidth="1px" rounded="md" p="3" borderColor="gray.200">
          <Text fontSize="xs" color="gray.500" fontWeight="semibold">
            To ({getMonthLabel(toMonth)} {YEAR})
          </Text>
          <Text mt="1" fontSize="lg" fontWeight="semibold">
            {formatCurrency(toValue)}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const ProfitComparisonPage = () => {
  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const [fromMonth, setFromMonth] = useState<number>(Math.max(1, currentMonth - 1));
  const [toMonth, setToMonth] = useState<number>(currentMonth);

  const { data, isLoading, isError, error } = useGetProfitComparison({
    fromYear: YEAR,
    fromMonth,
    toYear: YEAR,
    toMonth,
  });

  const fromSales = data?.from.totals.sales ?? 0;
  const fromExpenses = data?.from.totals.expenses ?? 0;
  const toSales = data?.to.totals.sales ?? 0;
  const toExpenses = data?.to.totals.expenses ?? 0;

  const fromProfit = fromSales - fromExpenses;
  const toProfit = toSales - toExpenses;

  return (
    <Box minH="100dvh" w="full" p="4">
      <Flex pt="6" pb="4" justify="space-between" align="start" gap="4" flexWrap="wrap">
        <Stack gap="1">
          <Heading fontSize="2xl">Profit Comparison</Heading>
          <Text color="gray.600" fontSize="sm">
            Compare Profit, Expenses, and Sales between two months.
          </Text>
        </Stack>

        <Flex gap="3" flexWrap="wrap" justify="flex-end">
          <Box>
            <Text fontSize="xs" color="gray.500" fontWeight="semibold" mb="1">
              From Month
            </Text>
            <select
              value={fromMonth}
              onChange={(e) => setFromMonth(Number(e.target.value))}
              style={{
                border: '0.5px solid gray',
                padding: '6px',
                borderRadius: '6px',
                minWidth: '220px',
              }}
              aria-label="Select from month"
            >
              {MONTH_OPTIONS.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.label} {YEAR}
                </option>
              ))}
            </select>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" fontWeight="semibold" mb="1">
              To Month
            </Text>
            <select
              value={toMonth}
              onChange={(e) => setToMonth(Number(e.target.value))}
              style={{
                border: '0.5px solid gray',
                padding: '6px',
                borderRadius: '6px',
                minWidth: '220px',
              }}
              aria-label="Select to month"
            >
              {MONTH_OPTIONS.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.label} {YEAR}
                </option>
              ))}
            </select>
          </Box>
        </Flex>
      </Flex>

      {isLoading && (
        <Text fontSize="sm" mb="3">
          Loading comparison…
        </Text>
      )}

      {isError && (
        <Text fontSize="sm" mb="3" color="red.500">
          Failed to load comparison{error?.message ? `: ${error.message}` : '.'}
        </Text>
      )}

      {data ? (
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="4">
          <MetricComparisonCard
            label="Profit"
            fromMonth={fromMonth}
            toMonth={toMonth}
            fromValue={fromProfit}
            toValue={toProfit}
          />
          <MetricComparisonCard
            label="Expenses"
            fromMonth={fromMonth}
            toMonth={toMonth}
            fromValue={fromExpenses}
            toValue={toExpenses}
          />
          <MetricComparisonCard
            label="Sales"
            fromMonth={fromMonth}
            toMonth={toMonth}
            fromValue={fromSales}
            toValue={toSales}
          />
        </SimpleGrid>
      ) : null}
    </Box>
  );
};

export default ProfitComparisonPage;

