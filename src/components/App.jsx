// импорт масива данных для разметки (для пропсов)
import friends from '../json/friends.json';
import items from '../json/transactions.json';
// импорт функции разметки
import Section from './Section/Section';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// =========================================================
import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <Feedback />
        <FriendList friendsData={friends} />
        <TransactionHistory transactionData={items} />
      </Section>
    </div>
  );
};
