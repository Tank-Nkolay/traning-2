import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friendsData }) {
  return (
    <ul className={css.friend_list}>
      {friendsData.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
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
