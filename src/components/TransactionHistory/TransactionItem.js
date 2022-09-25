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

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
