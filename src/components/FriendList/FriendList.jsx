// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
// import css from 'components/FriendList/FriendList.module.css';
// import { FriendListContainer } from 'components/FriendList/FriendList.styled.jsx';
import { Box } from '../Box';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box mb={3} minWidth="300px">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
