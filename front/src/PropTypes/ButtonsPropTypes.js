import PropTypes from 'prop-types';

const ButtonsPropTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  OnClick: PropTypes.func.isRequired,
};

export default ButtonsPropTypes;
