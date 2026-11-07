import { Input, Field, Button, Box, Stack, Heading, HStack, IconButton } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogSales } from '../../hooks/Log';
import { FiArrowLeft } from 'react-icons/fi';

interface FormValues {
  eggSize: string;
  amount: number;
  trays: number;
  pieces: number;
}

const EGGS_PER_TRAY = 30;

const LogSales = () => {
  const navigate = useNavigate();
  const logSalesMutation = useLogSales();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    const trays = Number.isFinite(data.trays) ? data.trays : 0;
    const pieces = Number.isFinite(data.pieces) ? data.pieces : 0;
    const eggSalesCount = trays * EGGS_PER_TRAY + pieces;

    logSalesMutation.mutate({
      eggSize: data.eggSize,
      amount: data.amount,
      eggSalesCount,
    });
  });
  return (
    <Box minH="100dvh" w="full" display="flex" flexDirection="column" p="4">
      <Stack flex="1" gap="4">
        <HStack gap="2">
          <IconButton
            aria-label="Back to log home"
            variant="ghost"
            onClick={() => navigate('/log-homepage')}
          >
            <FiArrowLeft />
          </IconButton>
          <Heading fontSize="2xl">Log Sales</Heading>
        </HStack>
        <form onSubmit={onSubmit} id="log-sales-form">
          <Stack gap="4">
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
              <Input
                type="number"
                placeholder="Enter Amount"
                {...register('amount', { valueAsNumber: true, min: 0 })}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Tray</Field.Label>
              <Input
                type="number"
                placeholder="Enter trays"
                {...register('trays', {
                  valueAsNumber: true,
                  min: 0,
                })}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Piece</Field.Label>
              <Input
                type="number"
                placeholder="Enter additional pieces"
                {...register('pieces', {
                  valueAsNumber: true,
                  min: 0,
                })}
              />
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
