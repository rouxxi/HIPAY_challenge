import React , {useState} from 'react';
import AllMovieList from '../../components/AllMovieList/AllMovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResearchStyle from './ResearchStyle';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
function Research() {
    const [allView, setAllView] = useState(true);
    const [researchField, setResearchField] = useState('');
    const classes = ResearchStyle();
    return (
        <div className={classes.main}>
            <Typography  className={classes.title} variant='h3'>Find the chosen One !</Typography>
            <SearchBar />
            <Button className={classes.button}  color='inherit' >
                Valid Research
            </Button>
            <AllMovieList />
        </div>
    )
}

export default Research;