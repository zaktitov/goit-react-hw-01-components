import Friends from '../Friends/Friends';
import s from './FriendsList.module.css';
const FriendsList = ({ friendsData }) => (
  <ul className={s.friendList}>
    <Friends data={friendsData} />
  </ul>
);

export default FriendsList;
