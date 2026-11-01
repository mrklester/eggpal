import type { ElementType } from 'react';
import { Box, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCompareArrows } from 'react-icons/md';

type NavCardProps = {
  title: string;
  description: string;
  icon: ElementType;
  onClick: () => void;
};

const NavCard = ({ title, description, icon, onClick }: NavCardProps) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      textAlign="left"
      w="full"
      p="4"
      rounded="xl"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      _hover={{ boxShadow: 'md', borderColor: 'gray.300' }}
    >
      <HStack gap="3" align="start">
        <Box
          flexShrink={0}
          w="10"
          h="10"
          rounded="lg"
          bg="gray.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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

const AnalyticsHomePage = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100dvh" w="full" p="4">
      <Box pt="6" pb="4">
        <Stack gap="1">
          <Heading fontSize="2xl">Analytics</Heading>
          <Text color="gray.600" fontSize="sm">
            Compare performance across months and spot trends.
          </Text>
        </Stack>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
        <NavCard
          title="Profit Comparison"
          description="Compare Profit, Expenses, and Sales between two months."
          icon={MdOutlineCompareArrows}
          onClick={() => navigate('/admin/analytics/profit')}
        />
      </SimpleGrid>
    </Box>
  );
};

export default AnalyticsHomePage;

