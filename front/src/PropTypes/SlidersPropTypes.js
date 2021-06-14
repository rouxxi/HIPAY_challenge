import PropTypes from 'prop-types';

const SlidersPropTypes = {
    data:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number || PropTypes.string))

}

export default SlidersPropTypes;