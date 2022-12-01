import { NavLink } from 'react-router-dom';
// ===== styled ========
import { Flex, Image, Box } from '@chakra-ui/react';
import Logo from '../../images/logo.png';
// =====================
import { useAuth } from 'hooks';
// =====================

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex
        alignItems="center"
        color="#0e0f69"
        fontSize="24px"
        fontWeight="700"
      >
        <Box h="60px" w="60px" to="/" mr="20px">
          <Image src={Logo} alt="logo" />
        </Box>
        <Box marginRight="20px" _hover={{ color: '#000' }}>
          <NavLink color="#0e0f69" to="/">
            Home
          </NavLink>
        </Box>
        <Box _hover={{ color: '#000' }}>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Box>
      </Flex>
    </nav>
  );
};
