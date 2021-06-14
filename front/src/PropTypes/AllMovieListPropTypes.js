 import PropTypes from 'prop-types';

 const AllMovieListPropTypes = {
   data:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number || PropTypes.string))
 }

 export default AllMovieListPropTypes;