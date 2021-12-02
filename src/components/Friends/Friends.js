import PropTypes from 'prop-types';
import s from './Friends.module.css';

const Friends = ({ data }) =>
  data.map(inf =>
    inf.isOnline ? (
      <li className={s.isOnline} key={inf.id}>
        <span className="status">{inf.isOnline}</span>
        <img
          className={s.avatar}
          src={inf.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{inf.name}</p>
      </li>
    ) : (
      <li className={s.isOffline} key={inf.id}>
        <span className="status">{inf.isOnline}</span>
        <img
          className={s.avatar}
          src={inf.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{inf.name}</p>
      </li>
    ),
  );

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};

export default Friends;
