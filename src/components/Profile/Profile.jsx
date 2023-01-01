import PropTypes from 'prop-types';
import { FaUserAlt, FaInstagramSquare, FaMapMarkerAlt } from 'react-icons/fa';
// import css from 'components/Profile/Profile.module.css';
import {
  ProfileContainer,
  Description,
  Info,
  Avatar,
  Stats,
} from 'components/Profile/Profile.styled.jsx';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Info>
          <FaUserAlt />
          {username}
        </Info>
        <Info>
          <FaInstagramSquare size={20} />@{tag}
        </Info>
        <Info>
          <FaMapMarkerAlt />
          {location}
        </Info>
      </Description>

      <Stats>
        <li>
          <span> Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
