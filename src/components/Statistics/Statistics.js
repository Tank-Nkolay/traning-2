import PropTypes from 'prop-types';
import StatisticsElement from './StatisticsElement';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div className={css.statBox}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <StatisticsElement
              label={stat.label}
              percentage={stat.percentage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  Statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
