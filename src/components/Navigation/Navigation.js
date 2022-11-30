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
        <Button
          colorScheme="telegram"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
        >
          <NavLink colorScheme="telegram" to="/">
            Home
          </NavLink>
        </Button>

        {isLoggedIn && (
          <Button colorScheme="telegram">
            <NavLink to="/contacts">Contacts</NavLink>
          </Button>
        )}
      </Box>
    </nav>
  );
};
