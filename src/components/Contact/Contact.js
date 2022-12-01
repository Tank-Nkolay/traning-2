import { useDispatch } from 'react-redux';
// ===== styled ========
import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Text, Button } from '@chakra-ui/react';
// =====================
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="5px"
      color="#0e0f69"
      fontSize="24px"
    >
      <Text>
        {name} : {number}
      </Text>
      <Button
        type="button"
        onClick={handleDelete}
        borderRadius="50%"
        p="5px"
        colorScheme="orange"
      >
        <CloseIcon color="#fff" />
      </Button>
    </Flex>
  );
};
