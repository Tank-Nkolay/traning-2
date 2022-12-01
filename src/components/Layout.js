import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// ===== styled ========
import { Box, Flex } from '@chakra-ui/react';
import css from './Layout.module.css';
// =====================
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
// =====================

export function Layout() {
  return (
    <Box display="flex" flexDirection="column" bgColor="#cedaf2">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Box as="footer" className={css.footer} bgColor="#9bb9f4" width="100%">
        <Flex>
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
}
