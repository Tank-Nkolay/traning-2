import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="#cedaf2"
    >
      <Text fontSize="6xl" color="#0e0f69" fontWeight="700">
        Your best PhoneBook
      </Text>
      <Text fontSize="4xl" color="red">
        *to use - Register
      </Text>
    </Flex>
  );
}
