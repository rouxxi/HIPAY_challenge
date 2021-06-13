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
`

const fakeData = [
    {
        id:1,
        name: 'le parain',
        image: 'https://www.cinechronicle.com/wp-content/uploads/2020/08/Le-Parrain-les-archives-inedites-de-la-trilogie.jpg'
},
{
    id:2,
    name: 'Forest Gump',
    image: 'https://www.cinehorizons.net/sites/default/files/affiches/affiche_forrest_gump.jpg'
}
]

function Sliders() {
    const [data, setData] = useState([]);
    const [idActive, setIdActive] = useState(1);
 
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

    useEffect(()=> {
        setData(fakeData)
    }, [])

    return (
        <div className={classes.sliderWrapper}>
            <SkipPreviousOutlinedIcon onClick={() => handleSwapPreview(idActive)}  className={classes.swapButton} color='inherit'  fontSize='inherit'/>
                <div className={classes.sliderDisplayed}>
                    <Swapper  id={idActive} >
                        {data.length >= 1 && data.map((movie) => {
                            return  <MovieCard key={movie.name} urlImage={movie.image} alt={movie.name}/>
                        })}
                    </Swapper>
                </div>
       
            <SkipNextOutlinedIcon onClick={() => handleSwapNext(idActive)}  className={classes.swapButton} color='inherit' fontSize='inherit' />
        </div> 
    )
}

export default Sliders