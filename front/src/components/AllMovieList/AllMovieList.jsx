import React, { useState, useEffect } from 'react';
import AllMovieListStyle from './AllMovieListStyle';
import { ListItem, ListItemAvatar, List, Avatar, ListItemText, Divider } from '@material-ui/core';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


function AllMovieList(props) {
    const {data, allView} = props;
    const classes = AllMovieListStyle();



    return (
        <div className={classes.main}>
            
            <List className={classes.root}>
                
                
               {data && data.map((movie) => {
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
                })}
               
          </List>
        </div>
    )
}

export default AllMovieList;