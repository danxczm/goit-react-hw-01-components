import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
	return (
		<ul class="friend-list">
			{friends.map(({ id, name, avatar, isOnline }) => {
				return (
				<li class="item" key={id}>
  				<span class={isOnline}></span>
  				<img class="avatar" src={avatar} alt="User avatar" width="48" />
  				<p class={name}></p>
				</li>)
			})}
		</ul>
	)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })),
};