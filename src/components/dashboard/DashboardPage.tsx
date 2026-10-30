import { Box, Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import ProfitCard from './ProfitCard';
import ExpensesCard from './ExpensesCard';
import SalesCard from './SalesCard';
import EggProductionChart from './EggProductionChart';
import EggProductionCard from './EggProductionCard';

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

const DashboardPage = () => {
  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  const selectedYear = 2026;

  return (
    <Box p="8">
      <Flex direction={{ base: 'column', md: 'row' }} gap="4">
        <ProfitCard />
        <ExpensesCard />
        <SalesCard />
      </Flex>

      <Flex mt="6" justify="flex-end">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          style={{
            border: '0.5px solid gray',
            padding: '6px',
            borderRadius: '6px',
            minWidth: '200px',
          }}
          aria-label="Select month"
        >
          {MONTH_OPTIONS.map((m) => (
            <option key={m.month} value={m.month}>
              {m.label} {selectedYear}
            </option>
          ))}
        </select>
      </Flex>

      <EggProductionCard year={selectedYear} month={selectedMonth} />
      <Box>
        <EggProductionChart year={selectedYear} month={selectedMonth} />
      </Box>
    </Box>
  );
};

export default DashboardPage;
