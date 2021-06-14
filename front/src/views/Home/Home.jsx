import React from 'react';
import Sliders from '../../components/Sliders/Sliders';
import HomeStyle from './HomeStyle';
import { useQuery, gql } from '@apollo/client';

const FETCH_ALL_MOVIES = gql`
   query { 
       getAllMovies {
            id
            image
            name
        }
}
`

function Home() {
    const { data} = useQuery(FETCH_ALL_MOVIES);

    const classes = HomeStyle();

    return (
        <div className={classes.main}>
            <Sliders data={data}/>
        </div>
    )
}

export default Home;