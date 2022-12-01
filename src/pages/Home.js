import { Text } from '@chakra-ui/react';
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: '8px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Text fontSize="6xl" color="#0e0f69">
        Your best phonePhoneBook
      </Text>
      <Text fontSize="4xl" color="red">
        *to use - Register
      </Text>
    </div>
  );
}
