import PropTypes from 'prop-types';
import Panting from './Profile';

function ProfileList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.tag}>
          <Panting
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ProfileList;
