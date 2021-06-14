import React , {useEffect, useState} from 'react';
import AllMovieList from '../../components/AllMovieList/AllMovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResearchStyle from './ResearchStyle';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useQuery ,gql, useLazyQuery } from '@apollo/client';

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
const FETCH_MOVIES_BY_NAME = gql`
        query ($researchInField:String!)  { 
         getMoviesByName(name: $researchInField) {
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

    const {data} = useQuery(FETCH_ALL_MOVIES);
    const [getDataByName, all] = useLazyQuery(FETCH_MOVIES_BY_NAME, {variables: { researchInField: researchField }});

    const classes = ResearchStyle();

    const handleResearch = () => {
        setAllView(!allView)
    }   

    useEffect(()=> {
        if (!allView) {
            getDataByName()
        }
        if (allView) {
            setResearchField('')
        }
    }, [allView])

    return (
        <div className={classes.main}>
            <Typography  className={classes.title} variant='h3'>Find the chosen One !</Typography>
            <SearchBar researchField={researchField} setResearchField={setResearchField} />
            <Button className={classes.button}  color='inherit' onClick={()=> handleResearch()}>
                {allView ? 'Enable research' : 'Back to all Movies'}
            </Button>
           {data && <AllMovieList  allView={allView} data={all && all.data && all.data.getMoviesByName && !allView ?all.data.getMoviesByName : data.getAllMovies } />
           } 
        </div>
    )
}

export default Research;