import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="6xl" color="#0e0f69">
        Your best phonePhoneBook
      </Text>
      <Text fontSize="4xl" color="red">
        *to use - Register
      </Text>
    </Flex>
  );
}
