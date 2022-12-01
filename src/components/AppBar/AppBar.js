import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Flex } from '@chakra-ui/react';
import css from './AppBar.module.css';

export function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box className={css.header} as="header">
      <Flex justifyContent="space-between">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
}
