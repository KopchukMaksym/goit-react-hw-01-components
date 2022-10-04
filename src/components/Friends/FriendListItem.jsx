import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span
        style={{
          display: 'block',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'green' : 'red',
        }}
        class="status"
      >
        {isOnline}
      </span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
