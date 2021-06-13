import React from 'react';
import AllMovieListStyle from './AllMovieListStyle';
import { ListItem, ListItemAvatar, List, Avatar, ListItemText, Divider } from '@material-ui/core';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


const fakeData = [
    {
        id:1,
        name: 'le parain',
        year: 1967,
        director: 'gertrude',
        image: 'https://www.cinechronicle.com/wp-content/uploads/2020/08/Le-Parrain-les-archives-inedites-de-la-trilogie.jpg'
},
{
    id:2,
    name: 'Forest Gump',
    year: 1980,
    director: 'jean luc',
    image: 'https://www.cinehorizons.net/sites/default/files/affiches/affiche_forrest_gump.jpg'
}
]

function AllMovieList() {
    
    const classes = AllMovieListStyle();
    
    return (
        <div className={classes.main}>
            <List className={classes.root}>
                {fakeData.map((movie) => {
                    return  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMoviesIcon />
                        </Avatar>
                    </ListItemAvatar>
                        <ListItemText primary={movie.name} secondary={`${movie.director}, ${movie.year}`} />
                    <Divider/>
                </ListItem>
                })}
               
          </List>
        </div>
    )
}

export default AllMovieList;