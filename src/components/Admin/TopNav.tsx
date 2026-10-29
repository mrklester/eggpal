import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface TopNavProps {
  setIsSidebarOpen: () => void;
}

const TopNav = ({ setIsSidebarOpen }: TopNavProps) => {
  const navigate = useNavigate();
  return (
    <Box borderBottomWidth="1px" p="4">
      <Flex justify={{ base: 'space-between', md: 'end' }} align="center">
        <Box display={{ base: 'flex', md: 'none' }}>
          <GiHamburgerMenu onClick={setIsSidebarOpen} />
        </Box>
        <HStack>
          <Button onClick={() => navigate('/log-homepage')} variant="subtle">
            ESS
          </Button>
          <Text fontSize="2xl">
            <FaRegUserCircle />
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TopNav;
