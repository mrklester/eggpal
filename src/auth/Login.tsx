import { Field, Input, Flex, Heading, Box, Button, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { validateCredentials } from './AuthWorker';

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit(({ username, password }) => {
    if (!validateCredentials(username, password)) {
      return;
    }

    navigate('/admin/dashboard');
  });

  return (
    <Flex h="svh" w="full" justify="center" align="center" p="4">
      <Box
        border="2px solid"
        borderColor="gray.400"
        rounded="md"
        p="8"
        w={{ base: 'full', md: '1/3' }}
      >
        <form onSubmit={onSubmit}>
          <VStack spaceY="4">
            <Heading textAlign="left" w="full">
              Welcometo EggPal
            </Heading>
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input {...register('username')} placeholder="Enter your username" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" {...register('password')} placeholder="Enter your password" />
            </Field.Root>
            <Button type="submit" w="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
