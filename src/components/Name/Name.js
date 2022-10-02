import React from 'react';
// import PropTypes from 'prop-types';
import { BoxName } from './Name.styled';
// import { formSubmitHandler } from './formSubmitHandler';

const Name = name => <BoxName key={name}>{1}</BoxName>;

// FeedbackOptions.propTypes = {
//   clickGood: PropTypes.func.isRequired,
//   clickNeutral: PropTypes.func.isRequired,
//   clickBad: PropTypes.func.isRequired,
// };

export default Name;
