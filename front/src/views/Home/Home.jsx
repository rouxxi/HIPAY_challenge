import React from "react";
import { useQuery, gql } from "@apollo/client";
import Sliders from "../../components/Sliders/Sliders";
import HomeStyle from "./HomeStyle";

const FETCH_ALL_MOVIES = gql`
  query {
    getAllMovies {
      id
      image
      name
    }
  }
`;

function Home() {
  const { data } = useQuery(FETCH_ALL_MOVIES);

  const classes = HomeStyle();

  return (
    <div className={classes.main}>
      <h1>Most wanted movies</h1>
      <Sliders data={data} />
    </div>
  );
}

export default Home;
