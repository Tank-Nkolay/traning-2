import PropTypes from 'prop-types';

// передаем в секцию детей
function Section({ title, children }) {
  return (
    <div
      style={{
        // height: '100vh',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  //   значение что угодно (что-то должно быть)
  children: PropTypes.node,
};

export default Section;
