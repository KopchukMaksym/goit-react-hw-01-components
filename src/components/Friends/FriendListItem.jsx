import PropTypes from 'prop-types';
import s from '../Friends/Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const color = isOnline ? s.online : s.offline;
  const newStyle = [color, s.status].join(' ');

  return (
    <li className={s.item}>
      <span className={newStyle}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
