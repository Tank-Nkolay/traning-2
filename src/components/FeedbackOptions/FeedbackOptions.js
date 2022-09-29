import React from 'react';
import PropTypes from 'prop-types';
import { BoxButton, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ clickGood, clickNeutral, clickBad }) => (
  <BoxButton>
    <Button onClick={clickGood}>good</Button>
    <Button onClick={clickNeutral}>neutral</Button>
    <Button onClick={clickBad}>bad</Button>
  </BoxButton>
);

FeedbackOptions.propTypes = {
  clickGood: PropTypes.func.isRequired,
  clickNeutral: PropTypes.func.isRequired,
  clickBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
