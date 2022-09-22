import PropTypes from 'prop-types';
import Statistics from './Statistics';
import css from './StatisticsList.module.css';

function StatisticsList({ title, stats }) {
  return (
    <div className={css.stat - box}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat - list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// StatisticsList.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//     })
//   ),
// };

export default StatisticsList;
