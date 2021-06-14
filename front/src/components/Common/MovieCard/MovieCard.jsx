import React from "react";
import MovieCardStyle from "./MovieCardStyle";
import MovieCardPropTypes from "../../../PropTypes/MovieCardPropTypes";

function MovieCard(props) {
  const { name, urlImage } = props;
  const classes = MovieCardStyle();
  return (
    <div>
      <img className={classes.image} key={name} src={urlImage} alt={name} />
    </div>
  );
}

MovieCard.propeTypes = MovieCardPropTypes;
export default MovieCard;
