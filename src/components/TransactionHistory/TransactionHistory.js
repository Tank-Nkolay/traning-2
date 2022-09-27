import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { Table, Thead, Tbody, Tr, Th } from './TransactionHistory.styled';

function TransactionHistory({ transactionData }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {transactionData.map(transaction => (
          <Tr key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
