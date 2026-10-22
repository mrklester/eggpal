import { Flex, Stack } from '@chakra-ui/react';
import TopNav from '../components/Admin/TopNav';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';
import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AdminLayout = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(true);
      return;
    }

    setIsSidebarOpen(false);
  }, [isMobile]);
  return (
    <Flex h="100dvh" w="full">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Stack w="full">
        <TopNav setIsSidebarOpen={() => setIsSidebarOpen((prev) => !prev)} />
        <Outlet />
      </Stack>
    </Flex>
  );
};

export default AdminLayout;
