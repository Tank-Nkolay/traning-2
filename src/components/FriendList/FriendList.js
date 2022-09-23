import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Markup, Card } from './FriendList.styled';

function FriendList({ friendsData }) {
  return (
    <Markup>
      {friendsData.map(friend => (
        <Card key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Card>
      ))}
    </Markup>
  );
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stat: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FriendList;
