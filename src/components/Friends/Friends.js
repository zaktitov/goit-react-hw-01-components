import s from './Friends.module.css';

const Friends = ({ avatar, name, isOnline }) => (
  <li className={isOnline ? s.isOnline : s.isOffline}>
    <span className="status">{isOnline}</span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default Friends;
