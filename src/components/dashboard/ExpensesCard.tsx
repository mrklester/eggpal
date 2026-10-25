import { Stat } from '@chakra-ui/react';
import { useGetExpenses } from '../../hooks/Dashboard';
const ExpensesCard = () => {
  const { data: expenses, isLoading, isError } = useGetExpenses();
  const expensesText = isLoading
    ? 'Loading...'
    : isError
      ? 'Error'
      : `₱${(expenses ?? 0).toLocaleString()}`;
  return (
    <Stat.Root maxW={{ base: 'full', lg: '260px' }} borderWidth="1px" p="4" rounded="md">
      <Stat.Label>Expenses</Stat.Label>
      <Stat.ValueText>{expensesText}</Stat.ValueText>
    </Stat.Root>
  );
};

export default ExpensesCard;
