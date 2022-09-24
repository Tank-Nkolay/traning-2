import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Span, Foto, TextName } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <Span status={isOnline}></Span>
      <Foto src={avatar} alt="User avatar" />
      <TextName>{name}</TextName>
    </Fragment>
  );
}

// StatisticsElement.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

export default FriendListItem;
