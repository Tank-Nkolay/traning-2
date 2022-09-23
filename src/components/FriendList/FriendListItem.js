import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Span, Foto, TextName } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <Span></Span>
      <Foto src={avatar} alt="User avatar" width="48" />
      <TextName>{name}</TextName>
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
