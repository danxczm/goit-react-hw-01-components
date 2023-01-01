import PropTypes from 'prop-types';
// import css from 'components/FriendListItem/FriendListItem.module.css';
import {
  Item,
  Status,
  Name,
} from 'components/FriendListItem/FriendListItem.styled.jsx';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item key={id}>
      <Status style={{ color: isOnline ? 'green' : 'red' }}>●</Status>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
