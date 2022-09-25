import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { Table, Thead, Tbody, Tr, Th } from './TransactionHistory.styled';

function TransactionHistory({ transactionData }) {
  return (
    <div>
      <Table>
        <Thead>
          <Tr numberLine="one">
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
    </div>
  );
}

// FriendList.propTypes = {
//   title: PropTypes.string,
//   stat: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//     })
//   ),
// };

export default TransactionHistory;
