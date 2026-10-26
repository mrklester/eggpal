import { Field, Input, Box, Heading, Stack, Button, HStack, IconButton } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogHarvest } from '../../hooks/Log';
import { FiArrowLeft } from 'react-icons/fi';

interface FormValues {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

const LogHarvest = () => {
  const navigate = useNavigate();
  const logHarvestMutation = useLogHarvest();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    logHarvestMutation.mutate(data);
  });

  return (
    <Box p="4" w="full" minH="100dvh">
      <Stack w="full" gap="4">
        <HStack gap="2">
          <IconButton
            aria-label="Back to log home"
            variant="ghost"
            onClick={() => navigate('/log-homepage')}
          >
            <FiArrowLeft />
          </IconButton>
          <Heading fontSize="2xl">Log Harvest</Heading>
        </HStack>
        <form onSubmit={onSubmit} id="log-harvest-form">
          <Stack gap="4" flex="1">
            <Field.Root>
              <Field.Label>Small</Field.Label>
              <Input {...register('small')} type="number" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Medium</Field.Label>
              <Input {...register('medium')} type="number" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Large</Field.Label>
              <Input {...register('large')} type="number" />
            </Field.Root>
            <Field.Root>
              <Field.Label>XLarge</Field.Label>
              <Input {...register('xlarge')} type="number" />
            </Field.Root>
          </Stack>
        </form>
      </Stack>

      <Box position="fixed" left="0" right="0" bottom="0" p="4">
        <Button type="submit" form="log-harvest-form" w="full">
          Save Harvest
        </Button>
      </Box>
    </Box>
  );
};

export default LogHarvest;
