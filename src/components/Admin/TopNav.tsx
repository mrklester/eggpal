import { Box, Flex, Text } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';

interface TopNavProps {
  setIsSidebarOpen: () => void;
}

const TopNav = ({ setIsSidebarOpen }: TopNavProps) => {
  return (
    <Box borderBottomWidth="1px" p="4">
      <Flex justify={{ base: 'space-between', md: 'end' }} align="center">
        <Box display={{ base: 'flex', md: 'none' }}>
          <GiHamburgerMenu onClick={setIsSidebarOpen} />
        </Box>
        <Text fontSize="2xl">
          <FaRegUserCircle />
        </Text>
      </Flex>
    </Box>
  );
};

export default TopNav;
