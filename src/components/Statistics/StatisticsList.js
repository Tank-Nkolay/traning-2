import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsList({ dataStatistics }) {
  return (
    <ul>
      {dataStatistics.map(dataStatistic => (
        <li key={dataStatistic.tag}>
          <Statistics
            username={dataStatistic.username}
            tag={dataStatistic.tag}
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
