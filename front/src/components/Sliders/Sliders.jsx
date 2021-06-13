import React, { useEffect, useState } from 'react';
import MovieCard from '../Common/MovieCard/MovieCard';
import SlidersStyle from './SlidersStyle';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

const FETCH_ALL_MOVIES = gql`
   query getAllMovies {
        movie {
            id
            name
            image
        }
    }

`
const Swapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(${({ id }) => id === 1 ? '0' : (-100*(id-1) +'%').toString() });
    transition: 0.3s all ease-in-out;
`


function Sliders() {
    const [idActive, setIdActive] = useState(1);
    const { loading, error, data} = useQuery(FETCH_ALL_MOVIES);
        if (loading) { 
            return 'Loading...'
        };
        if (error) {
            return `Error! ${error.message}`
        };

    const classes = SlidersStyle();
   
    function handleSwapPreview(id) {
        if (id === 1) {
         setIdActive(data.length)
        } else {
            setIdActive(id-1)
        }
    }

    function handleSwapNext(id) {
        if (id === data.length) {
            setIdActive(1)
           } else {
               setIdActive(id+1)
           }
       }

    return (
        <div className={classes.sliderWrapper}>
            <SkipPreviousOutlinedIcon onClick={() => handleSwapPreview(idActive)}  className={classes.swapButton} color='inherit'  fontSize='inherit'/>
                <div className={classes.sliderDisplayed}>
                    <Swapper  id={idActive} >
                        {console.log('data', data)}
                        {console.log('data.movie', data.movie)}
                        {data.movie.map((movie) => {
                            return  <MovieCard key={movie.name} urlImage={movie.image} alt={movie.name}/>
                        })}
                    </Swapper>
                </div>
       
            <SkipNextOutlinedIcon onClick={() => handleSwapNext(idActive)}  className={classes.swapButton} color='inherit' fontSize='inherit' />
        </div> 
    )
}

export default Sliders