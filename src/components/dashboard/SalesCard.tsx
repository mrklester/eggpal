import { Skeleton, Stat } from '@chakra-ui/react';
import { useGetSales } from '../../hooks/Dashboard';

export type SalesCardProps = {
  year: number;
  /** Month number 1-12 */
  month: number;
};

const SalesCard = ({ year, month }: SalesCardProps) => {
  const { data: sales, isLoading, isError } = useGetSales({ year, month });
  const salesText = isError ? 'Error' : `₱${(sales ?? 0).toLocaleString()}`;
  return (
    <Stat.Root maxW={{ base: 'full', lg: '260px' }} borderWidth="1px" p="4" rounded="md">
      <Stat.Label>Sales</Stat.Label>
      <Skeleton loading={isLoading} height="6" mt="1" rounded="md">
        <Stat.ValueText>{salesText}</Stat.ValueText>
      </Skeleton>
    </Stat.Root>
  );
};

export default SalesCard;
