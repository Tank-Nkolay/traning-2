import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsList({ dataStatistics }) {
  return (
    <ul>
      {dataStatistics.map(dataStatistic => (
        <li className="item" key={dataStatistic.id}>
          <Statistics
            label={dataStatistic.label}
            percentage={dataStatistic.percentage}
          />
        </li>
      ))}
    </ul>
  );
}

// ProfileList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       tag: PropTypes.string.isRequired,
//     })
//   ),
// };

export default StatisticsList;
