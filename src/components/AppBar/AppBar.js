import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Flex } from '@chakra-ui/react';

export function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" bgColor="#9bb9f4" p="4">
      <Flex justifyContent="space-between">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
}
