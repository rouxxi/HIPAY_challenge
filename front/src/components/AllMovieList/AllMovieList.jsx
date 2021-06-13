import React from 'react';
import AllMovieListStyle from './AllMovieListStyle'
function AllMovieList() {
    
    const classes = AllMovieListStyle();
    
    return (
        <div className={classes.main}>
            all movie list
        </div>
    )
}

export default AllMovieList;