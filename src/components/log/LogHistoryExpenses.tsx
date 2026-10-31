import { Box, Button, Flex, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useGetExpensesHistory } from '../../hooks/Log';

const PAGE_SIZE = 10;

const LogHistoryExpenses = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useGetExpensesHistory({
    page,
    pageSize: PAGE_SIZE,
    search: search || undefined,
  });

  const totalPages = useMemo(() => {
    const totalCount = data?.totalCount ?? 0;
    return Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  }, [data?.totalCount]);

  return (
    <Box minH="100dvh" w="full" p="4">
      <Stack gap="4">
        <HStack gap="2">
          <Button variant="ghost" onClick={() => navigate('/admin/log-history')}>
            <FiArrowLeft />
            Back
          </Button>
          <Heading fontSize="2xl">Expenses History</Heading>
        </HStack>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPage(1);
            setSearch(searchInput.trim());
          }}
        >
          <HStack gap="2">
            <Input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by category"
            />
            <Button type="submit">Search</Button>
          </HStack>
        </form>

        {isLoading ? <Text>Loading…</Text> : null}
        {isError ? <Text color="red.500">Error loading expenses history.</Text> : null}

        <Stack gap="3">
          {(data?.items ?? []).map((item) => (
            <Box key={item.id} borderWidth="1px" rounded="md" p="4">
              <Flex justify="space-between" align="center" flexWrap="wrap" gap="2">
                <Text fontWeight="semibold">{item.date}</Text>
                <Text fontSize="sm" color="gray.500">
                  {item.category}
                </Text>
              </Flex>
              <Text mt="2">Amount: ₱{item.amount.toLocaleString()}</Text>
            </Box>
          ))}

          {!isLoading && (data?.items?.length ?? 0) === 0 ? (
            <Text color="gray.500" fontSize="sm">
              No expense logs found.
            </Text>
          ) : null}
        </Stack>

        <Flex justify="space-between" align="center">
          <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
            Prev
          </Button>
          <Text fontSize="sm" color="gray.600">
            Page {page} / {totalPages}
          </Text>
          <Button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
            Next
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default LogHistoryExpenses;

