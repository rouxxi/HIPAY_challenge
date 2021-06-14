import React, { useEffect, useState } from 'react';
import MovieCard from '../Common/MovieCard/MovieCard';
import SlidersStyle from './SlidersStyle';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import styled from 'styled-components';

const Swapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(${({ id }) => id === 1 ? '0' : (-100*(id-1) +'%').toString() });
    transition: 0.3s all ease-in-out;
`


function Sliders(props) {
    const {data} = props;
    const [idActive, setIdActive] = useState(1);

    const classes = SlidersStyle();
   
    function handleSwapPreview(id) {
        if (id === 1) {
         setIdActive(data.getAllMovies.length)
        } else {
            setIdActive(id-1)
        }
    }

    function handleSwapNext(id) {
        if (id === data.getAllMovies.length) {
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
                        {data && data.getAllMovies && data.getAllMovies.map((movie) => {
                            return  <MovieCard key={movie.name} urlImage={movie.image} alt={movie.name}/>
                        })}
                    </Swapper>
                </div>
       
            <SkipNextOutlinedIcon onClick={() => handleSwapNext(idActive)}  className={classes.swapButton} color='inherit' fontSize='inherit' />
        </div> 
    )
}

export default Sliders