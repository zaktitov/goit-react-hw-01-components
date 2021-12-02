import PropTypes from 'prop-types';
import s from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={s.section}>
    {title && <h2>Upload stats</h2>}
    <ul className={s.statList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <span className={s.label}>{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      percentage: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

export default Stats;
