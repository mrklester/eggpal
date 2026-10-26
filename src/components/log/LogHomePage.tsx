import type { ElementType } from 'react';
import { Box, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiDollarSign, FiPackage, FiTrendingUp } from 'react-icons/fi';

type LogNavCardProps = {
  title: string;
  description: string;
  icon: ElementType;
  onClick: () => void;
};

const LogNavCard = ({ title, description, icon, onClick }: LogNavCardProps) => {
  return (
    <Box as="button" onClick={onClick} textAlign="left" w="full" p="4" rounded="xl" bg="white" border="1px solid" borderColor="gray.200" boxShadow="sm" _hover={{ boxShadow: 'md', borderColor: 'gray.300' }}>
      <HStack gap="3" align="start">
        <Box flexShrink={0} w="10" h="10" rounded="lg" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
          <Icon as={icon} boxSize="5" color="gray.700" />
        </Box>
        <Stack gap="1" flex="1" minW={0}>
          <Heading fontSize="lg">{title}</Heading>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
};

const LogHomePage = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100dvh" w="full" p="4">
      <Box pt="6" pb="4">
        <Stack gap="1">
          <Heading fontSize="2xl">Logs</Heading>
          <Text color="gray.600" fontSize="sm">
            Choose what you want to record today.
          </Text>
        </Stack>
      </Box>

      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
          <LogNavCard title="Log Harvest" description="Record the number of eggs harvested by size." icon={FiPackage} onClick={() => navigate('/log-harvest')} />
          <LogNavCard title="Log Sales" description="Record egg sales amount and size." icon={FiTrendingUp} onClick={() => navigate('/log-sales')} />
          <LogNavCard title="Log Expenses" description="Track feeds, transportation, and other costs." icon={FiDollarSign} onClick={() => navigate('/log-expenses')} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LogHomePage;
