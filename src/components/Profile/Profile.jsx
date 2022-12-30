import PropTypes from 'prop-types';
import { FaUserAlt, FaInstagramSquare, FaMapMarkerAlt } from 'react-icons/fa';
import css from 'components/Profile/Profile.module.css';

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
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className="name">
          <FaUserAlt className={css.icon} />
          {username}
        </p>
        <p className="tag">
          <FaInstagramSquare className={css.icon} size={20} />@{tag}
        </p>
        <p className="location">
          <FaMapMarkerAlt className={css.icon} />
          {location}
        </p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
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
