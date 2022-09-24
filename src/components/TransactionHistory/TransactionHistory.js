import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { Tbody, Tr } from './TransactionHistory.styled';

function TransactionHistory({ transactionData }) {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

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
      </table>
      ;
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
