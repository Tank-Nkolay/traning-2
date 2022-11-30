import { NavLink } from 'react-router-dom';
// ===== styled ========
import { Flex, Image, Box } from '@chakra-ui/react';
import Logo from '../../images/logo.png';
// import css from './Navigation.module.css';
// =====================
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex alignItems="center">
        <Box h="60px" w="60px" to="/" marginRight="20px">
          <Image src={Logo} alt="logo" />
        </Box>
        <Box marginRight="20px">
          <NavLink colorScheme="telegram" to="/">
            Home
          </NavLink>
        </Box>
        <Box>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</Box>
      </Flex>
    </nav>
  );
};
