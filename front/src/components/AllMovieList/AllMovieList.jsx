import React, {useEffect, useState} from 'react';
import AllMovieListStyle from './AllMovieListStyle';
import { ListItem, ListItemAvatar, List, Avatar, ListItemText, Divider } from '@material-ui/core';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import {useLazyQuery, gql} from '@apollo/client';




function AllMovieList(props) {
    const {allMovie, allView, researchField} = props;

    const FETCH_MOVIES_BY_NAME = gql`
        query ($researchInField:String!)  { 
         getMoviesByName(name: $researchInField) {
              name
          }
        }
    `
    const [getDataByName, {data}] = useLazyQuery(FETCH_MOVIES_BY_NAME, {variables: { researchInField: researchField }});

    const classes = AllMovieListStyle();
    useEffect(()=> {
        if (!allView) {
            getDataByName(researchField)
        }
        if (allView) {

        }
    }, [allView])
    return (
        <div className={classes.main}>
            
            <List className={classes.root}>
                {data && data.getMoviesByName &&  data.getMoviesByName.length >=1? 
                data.getMoviesByName.map((movie) => {
                    return <div key={movie.id}>
                         <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMoviesIcon />
                        </Avatar>
                    </ListItemAvatar>
                        <ListItemText primary={movie.name} secondary={`${movie.director}, ${movie.year}`} />
                   
                </ListItem>
                 <Divider/>
                 </div>
                })
                : allMovie && allMovie.getAllMovies ? 
                
                allMovie.getAllMovies.map((movie) => {
                    return <div key={movie.id}>
                         <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMoviesIcon />
                        </Avatar>
                    </ListItemAvatar>
                        <ListItemText primary={movie.name} secondary={`${movie.director}, ${movie.year}`} />
                   
                </ListItem>
                 <Divider/>
                 </div>
                })
                : <p>No match movie in movie list</p>
            
            }
               
          </List>
        </div>
    )
}

export default AllMovieList;