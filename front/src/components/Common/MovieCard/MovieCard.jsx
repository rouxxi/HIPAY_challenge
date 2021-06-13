import React from 'react';
import MovieCardStyle from './MovieCardStyle'

function MovieCard(props) {
    const {name, urlImage} = props;
    const classes = MovieCardStyle();
    return (
        <div >
            <img className={classes.image}  key={name} src={urlImage} alt={name} />
        </div>
    )
}

export default MovieCard;