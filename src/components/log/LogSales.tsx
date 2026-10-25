import { Input, Field, Button, Box, Stack, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useLogSales } from '../../hooks/Log';

interface FormValues {
  amount: number;
  eggSize: string;
}

const LogSales = () => {
  const logSalesMutation = useLogSales();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    logSalesMutation.mutate(data);
    console.log(data);
  });
  return (
    <Box minH="100dvh" w="full" display="flex" flexDirection="column" p="4">
      <Stack flex="1" gap="4">
        <form onSubmit={onSubmit} id="log-sales-form">
          <Stack gap="4">
            <Heading fontSize="2xl">Log Sales</Heading>
            <Field.Root>
              <Field.Label>Egg Size</Field.Label>
              <select
                defaultValue=""
                {...register('eggSize', {
                  required: 'Eggsize is required',
                })}
                style={{
                  width: '100%',
                  border: '0.5px solid gray',
                  borderColor: 'gray',
                  padding: '6px',
                  borderRadius: '6px',
                }}
              >
                <option value="">Select egg size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">Xlarge</option>
              </select>
            </Field.Root>
            <Field.Root>
              <Field.Label>Amount</Field.Label>
              <Input type="number" {...register('amount')} placeholder="Enter Amount" />
            </Field.Root>
          </Stack>
        </form>
      </Stack>
      <Box position="fixed" bottom="0" left="0" right="0" p="4">
        <Button type="submit" form="log-sales-form" w="full">
          Save Sales
        </Button>
      </Box>
    </Box>
  );
};

export default LogSales;
