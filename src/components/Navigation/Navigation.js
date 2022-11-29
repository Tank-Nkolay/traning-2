import { NavLink } from 'react-router-dom';
// ===== styled ========
import { Box, Button } from '@chakra-ui/react';
// =====================
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box gap="4" display="flex">
      <Button
        colorScheme="telegram"
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}
      >
        <NavLink colorScheme="telegram" className={css.link} to="/">
          Home
        </NavLink>
      </Button>

      {isLoggedIn && (
        <Button colorScheme="telegram">
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </Button>
      )}
    </Box>
  );
};
