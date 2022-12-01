import { useSelector, useDispatch } from 'react-redux';
//===== styled =======
import { Input, Flex } from '@chakra-ui/react';
//====================
import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
// =====================

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };
  return (
    <>
      <Flex justifyContent="center" pt="10px" pb="10px" color="#0e0f69">
        <Input
          width="auto"
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={filter}
          onChange={onFilterChange}
        />
      </Flex>
    </>
  );
}
