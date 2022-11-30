import { NavLink } from 'react-router-dom';
// ===== styled ========
import { Box, Button } from '@chakra-ui/react';
// =====================
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box gap="4" display="flex">
        <NavLink colorScheme="telegram" to="/">
          Home
        </NavLink>

        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Box>
    </nav>
  );
};
