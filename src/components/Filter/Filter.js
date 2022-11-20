import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// ====================================================
import { Container, Title, Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
// ====================================================

export default function Filter({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <Container>
      <Title>Contacts</Title>
      <Input
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={filter.value}
        onChange={onFilterChange}
      />
    </Container>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
