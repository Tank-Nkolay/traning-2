import PropTypes from 'prop-types';

// передаем в секцию детей
function Section({ children }) {
  return <div>{children}</div>;
}

Section.propTypes = {
  //   значение что угодно (что-то должно быть)
  children: PropTypes.node,
};

export default Section;
