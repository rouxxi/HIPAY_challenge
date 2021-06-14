import React , {useState} from 'react';
import AllMovieList from '../../components/AllMovieList/AllMovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResearchStyle from './ResearchStyle';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useQuery, gql } from '@apollo/client';

const FETCH_ALL_MOVIES = gql`
   query { 
       getAllMovies {
            id
            image
            name
            year
            
        }
}
`
function Research() {
    const [allView, setAllView] = useState(true);
    const [researchField, setResearchField] = useState('');

    const { data} = useQuery(FETCH_ALL_MOVIES);

    const classes = ResearchStyle();
    return (
        <div className={classes.main}>
            <Typography  className={classes.title} variant='h3'>Find the chosen One !</Typography>
            <SearchBar researchField={researchField} setResearchField={setResearchField} />
            <Button className={classes.button}  color='inherit' >
                Valid Research
            </Button>
            <AllMovieList data={data}/>
        </div>
    )
}

export default Research;