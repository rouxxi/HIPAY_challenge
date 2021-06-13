import React from 'react';
import AllMovieList from '../../components/AllMovieList/AllMovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResearchStyle from './ResearchStyle'
import { Typography } from '@material-ui/core';
function Research() {

    const classes = ResearchStyle();
    return (
        <div className={classes.main}>
            <Typography  className={classes.title} variant='h3'>Find the chosen One !</Typography>
            <SearchBar />
            <AllMovieList />
        </div>
    )
}

export default Research;