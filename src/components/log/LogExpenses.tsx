import { Input, Field, Box, Button, Stack, Heading, HStack, IconButton } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogExpenses } from '../../hooks/Log';
import { FiArrowLeft } from 'react-icons/fi';

interface FormValues {
  amount: number;
  category: string;
}

const LogExpenses = () => {
  const navigate = useNavigate();
  const logExpensesMutation = useLogExpenses();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    logExpensesMutation.mutate(data);
  });
  return (
    <Box w="full" p="4" minH="100dvh" display="flex" flexDir="column">
      <Stack flex="1" minH={0} gap="4">
        <HStack gap="2">
          <IconButton
            aria-label="Back to log home"
            variant="ghost"
            onClick={() => navigate('/log-homepage')}
          >
            <FiArrowLeft />
          </IconButton>
          <Heading fontSize="2xl">Log Expenses</Heading>
        </HStack>
        <form onSubmit={onSubmit} id="log-expenses-form">
          <Stack gap="4">
            <Field.Root>
              <Field.Label>Expenses Category</Field.Label>
              <select
                {...register('category', {
                  required: 'Category is required',
                })}
                defaultValue=""
                style={{
                  width: '100%',
                  border: '0.5px solid gray',
                  borderColor: 'gray.100',
                  padding: '6px',
                  borderRadius: '6px',
                }}
              >
                <option value="">Select a Category</option>
                <option value="feeds">Feeds</option>
                <option value="transportation">Transportation</option>
              </select>
            </Field.Root>
            <Field.Root>
              <Field.Label>Amount</Field.Label>
              <Input
                type="number"
                border="0.5px solid gray"
                {...register('amount')}
                placeholder="Enter amount"
              />
            </Field.Root>
          </Stack>
        </form>
      </Stack>
      <Box position="fixed" left="0" right="0" bottom="0" p="4">
        <Button type="submit" form="log-expenses-form" w="full">
          Save Expenses
        </Button>
      </Box>
    </Box>
  );
};

export default LogExpenses;
