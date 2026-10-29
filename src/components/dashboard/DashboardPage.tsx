import { Box, Flex } from '@chakra-ui/react';
import ProfitCard from './ProfitCard';
import ExpensesCard from './ExpensesCard';
import SalesCard from './SalesCard';
import EggProductionChart from './EggProductionChart';

const DashboardPage = () => {
  return (
    <Box p="8">
      <Flex direction={{ base: 'column', md: 'row' }} gap="4">
        <ProfitCard />
        <ExpensesCard />
        <SalesCard />
      </Flex>
      <Box>
        <EggProductionChart />
      </Box>
    </Box>
  );
};

export default DashboardPage;
