import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Td } from './TransactionItem.styled';

function TransactionItem({ type, amount, currency }) {
  return (
    <Fragment>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Fragment>
  );
}

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };

export default TransactionItem;
