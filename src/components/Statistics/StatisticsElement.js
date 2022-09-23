import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './StatisticsElement.module.css';

function StatisticsElement({ label, percentage }) {
  return (
    <Fragment>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </Fragment>
  );
}

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsElement;
