import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
// ===== styled ========
import { Box, Button } from '@chakra-ui/react';
// =====================
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      color="#0e0f69"
      fontWeight="700"
      gap="4"
      display="flex"
      alignItems="center"
    >
      <p>Welcome, {user.name}</p>
      <Button onClick={() => dispatch(logOut())} colorScheme="telegram">
        Log Out
      </Button>
    </Box>
  );
};
