import PropTypes from 'prop-types';

function Statistics({ label, percentage }) {
  return (
    <li className="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
}

// Panting.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   profileUrl: PropTypes.string.isRequired,
//   autor: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   guantity: PropTypes.number.isRequired,
// };

export default Statistics;
