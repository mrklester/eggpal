import { VStack, Box, Text, Drawer, Portal, Heading, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineInventory2 } from 'react-icons/md';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  function SidebarMenu() {
    return (
      <VStack align="start">
        <Flex align="center" spaceX="1.5">
          <Text>
            <LuLayoutDashboard />
          </Text>
          <NavLink to="/admin/dashboard">
            <Text>Dashboard</Text>
          </NavLink>
        </Flex>
        <Flex align="center" spaceX="1.5">
          <Text>
            <MdOutlineInventory2 />
          </Text>
          <NavLink to="/admin/inventory">
            <Text>Inventory</Text>
          </NavLink>
        </Flex>
      </VStack>
    );
  }
  return (
    <Box p="4" borderRightWidth="1px" w="60" display={{ base: 'none', md: 'flex' }}>
      <Box>
        <Heading mb="4">EggPal</Heading>
        <SidebarMenu />
      </Box>

      <Drawer.Root
        open={isSidebarOpen}
        onOpenChange={(details) => setIsSidebarOpen(details.open)}
        placement="start"
      >
        <Drawer.Trigger asChild></Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content w="60">
              <Drawer.Header>
                <Drawer.Title></Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Heading mb="4">EggPal</Heading>
                <SidebarMenu />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default Sidebar;
