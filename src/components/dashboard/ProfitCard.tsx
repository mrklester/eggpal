import { Stat } from '@chakra-ui/react';
import { useGetProfit } from '../../hooks/Dashboard';

export type ProfitCardProps = {
  year: number;
  /** Month number 1-12 */
  month: number;
};

const ProfitCard = ({ year, month }: ProfitCardProps) => {
  const { data: profit, isLoading, isError } = useGetProfit({ year, month });

  const profitText =
    isLoading ? 'Loading...' : isError ? 'Error' : `₱${(profit ?? 0).toLocaleString()}`;

  return (
    <Stat.Root maxW={{ base: 'full', lg: '260px' }} borderWidth="1px" p="4" rounded="md">
      <Stat.Label>Profit</Stat.Label>
      <Stat.ValueText>{profitText}</Stat.ValueText>
    </Stat.Root>
  );
};

export default ProfitCard;
