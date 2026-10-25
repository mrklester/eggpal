import { Stat } from '@chakra-ui/react';
import { useGetSales } from '../../hooks/Dashboard';
const SalesCard = () => {
  const { data: sales, isLoading, isError } = useGetSales();
  const salesText = isLoading
    ? 'Loading..'
    : isError
      ? 'Error'
      : `₱${(sales ?? 0).toLocaleString()}`;
  return (
    <Stat.Root maxW={{ base: 'full', lg: '260px' }} borderWidth="1px" p="4" rounded="md">
      <Stat.Label>Sales</Stat.Label>
      <Stat.ValueText>{salesText}</Stat.ValueText>
    </Stat.Root>
  );
};

export default SalesCard;
