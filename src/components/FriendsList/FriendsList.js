import PropTypes from 'prop-types';
import Friends from '../Friends/Friends';
import s from './FriendsList.module.css';
const FriendsList = ({ friendsData }) => (
  <ul className={s.friendList}>
    {friendsData.map(friend => (
      <Friends
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      />
    ))}
  </ul>
);

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default FriendsList;
