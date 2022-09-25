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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
