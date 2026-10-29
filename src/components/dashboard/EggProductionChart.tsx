import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useGetEggProductionMonth } from '../../hooks/Dashboard';
import type { EggProductionChartPoint, EggProductionMonthResponse } from '../../entity/response/EggProductionResponse';

const MONTH_OPTIONS = [
  { label: 'October', month: 10 },
  { label: 'November', month: 11 },
  { label: 'December', month: 12 },
] as const;

const toChartPoints = (resp: EggProductionMonthResponse): EggProductionChartPoint[] => {
  return resp.days
    .map((d) => ({
      day: new Date(d.date).getDate(),
      ...d.totals,
    }))
    .sort((a, b) => a.day - b.day);
};

const EggProductionChart = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(10);
  const selectedYear = new Date().getFullYear();

  const { data, isLoading, isError, error } = useGetEggProductionMonth({
    year: selectedYear,
    month: selectedMonth,
  });

  const chartData = useMemo(() => (data ? toChartPoints(data) : []), [data]);

  return (
    <Box mt="6" borderWidth="1px" borderRadius="md">
      <Flex justify="space-between" align="center" gap="3" mb="3" flexWrap="wrap">
        <Heading size="sm">Daily Egg Production (by size)</Heading>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          style={{
            border: '0.5px solid gray',
            padding: '6px',
            borderRadius: '6px',
            minWidth: '160px',
          }}
          aria-label="Select month"
        >
          {MONTH_OPTIONS.map((m) => (
            <option key={m.month} value={m.month}>
              {m.label}
            </option>
          ))}
        </select>
      </Flex>

      {isLoading && (
        <Text fontSize="sm" mb="2">
          Loading egg production…
        </Text>
      )}

      {isError && (
        <Text fontSize="sm" mb="2" color="red.500">
          Failed to load egg production{error?.message ? `: ${error.message}` : '.'}
        </Text>
      )}

      <Box width="100%" height="320px">
        {!isLoading && !isError && chartData.length === 0 ? (
          <Flex height="100%" align="center" justify="center">
            <Text fontSize="sm" color="gray.500">
              No data for this month.
            </Text>
          </Flex>
        ) : null}

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 16, left: -25, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="small" name="Small" stroke="#3182CE" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="medium" name="Medium" stroke="#38A169" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="large" name="Large" stroke="#DD6B20" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="xlarge" name="XLarge" stroke="#805AD5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default EggProductionChart;
