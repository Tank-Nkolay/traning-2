import React from 'react';
import PropTypes from 'prop-types';
import { BoxInfo, Info } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <BoxInfo>
    <Info>Good: {good}</Info>
    <Info>Neutral: {neutral}</Info>
    <Info>Bad: {bad}</Info>
    <Info>Total: {total}</Info>
    <Info>
      Positive feedback:
      {positivePercentage > '0' ? positivePercentage : '0'}%
    </Info>
  </BoxInfo>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
