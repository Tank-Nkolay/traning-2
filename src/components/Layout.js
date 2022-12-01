import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';
import css from './Layout.module.css';

export function Layout() {
  return (
    <Box display="flex" flexDirection="column" height="100vh" bgColor="#cedaf2">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Box as="footer" bgColor="#9bb9f4" width="100%" className={css.footer}>
        <Flex>
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
}
