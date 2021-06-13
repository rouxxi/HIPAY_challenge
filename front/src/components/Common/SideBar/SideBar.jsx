import React from 'react';
import SideBarStyle from './SideBarStyle';
import ButtonNav from '../Button/ButtonNav';
import { ListItemIcon, ListItemText, ListItem, List, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

function SideBar(props) {
    const {isOpen} = props;

    const classes = SideBarStyle(); 
    return (
        <div className={isOpen ? classes.sideBarOpen : classes.sideBarHidden}>

        <div className={classes.navMenu}>
            <h2> Movies Achives</h2>
                <List>
                    {['Home', 'Research'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon> <HomeIcon className={classes.icon} color='inherit' /></ListItemIcon>
                        <ListItemText primary={text} />
                        <Divider />
                    </ListItem>
                    ))}
                </List>
        
        </div>
                
        </div>
    )
}

export default SideBar;


