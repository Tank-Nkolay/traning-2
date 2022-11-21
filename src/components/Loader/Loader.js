import { MagnifyingGlass } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <MagnifyingGlass
        height="80"
        width="80"
        color="#386bd1"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        visible={true}
      />
    </Container>
  );
}
