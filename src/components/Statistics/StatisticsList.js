import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Statistics from './Statistics';

function StatisticsList({ title, stats }) {
  return (
    <Fragment>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </Fragment>
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
