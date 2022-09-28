import PropTypes from 'prop-types';

// передаем в секцию детей
function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  //   значение что угодно (что-то должно быть)
  children: PropTypes.node,
};

export default Section;
