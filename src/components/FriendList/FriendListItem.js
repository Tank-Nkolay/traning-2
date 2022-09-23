import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </Fragment>
  );
}

// StatisticsElement.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

export default FriendListItem;

// "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
// "name": "Mango",
// "isOnline": true,
// "id": 1812
