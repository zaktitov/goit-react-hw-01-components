import PropTypes from 'prop-types';
import s from './UserCard.module.css';

const Product = ({
  userName,
  tag,
  location,
  imgSrc,
  alt,
  lblOne,
  qOne,
  qTwo,
  lblTwo,
}) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={imgSrc} alt={alt} className={s.avatar} />
      <p className="name">{userName}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.label}>{lblOne} </span>
        <span className={s.quantity}>{qOne}</span>
      </li>
      <li>
        <span className={s.label}>{lblTwo} </span>
        <span className={s.quantity}>{qTwo}</span>
      </li>
      <li>
        <span className={s.label}>Likes </span>
        <span className={s.quantity}>3000</span>
      </li>
    </ul>
  </div>
);

Product.propTypes = {
  userClass: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Product;
