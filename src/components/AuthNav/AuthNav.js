import { NavLink } from 'react-router-dom';
// ===== styled ========
import { Flex, Box } from '@chakra-ui/react';
// =====================

export const AuthNav = () => {
  return (
    <Flex alignItems="center" color="#0e0f69" fontSize="24px" fontWeight="700">
      <Box _hover={{ color: '#000' }}>
        <NavLink to="/register">Register</NavLink>
      </Box>
      <Box ml="20px" _hover={{ color: '#000' }}>
        <NavLink to="/login">Log In</NavLink>
      </Box>
    </Flex>
  );
};
