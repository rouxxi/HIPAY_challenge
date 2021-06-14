import React from 'react';
import SideBarStyle from './SideBarStyle';
import { ListItemIcon, ListItemText, ListItem, List, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import SideBarPropTypes from '../../PropTypes/SideBarPropTypes';

function SideBar(props) {
    const {isOpen, setMenuBurgerOpen} = props;

    const classes = SideBarStyle(); 
    const history = useHistory();

    const moveTo = (page) => {
        setMenuBurgerOpen(false);
        history.push(`/${page}`);
    }

    const moveToHome =() => {
        setMenuBurgerOpen(false);
        history.push(`/`);
    }

    return (
        <div className={isOpen ? classes.sideBarOpen : classes.sideBarHidden}>

        <div className={classes.navMenu}>
            <h2> Movies Achives</h2>
                <List>
                    {['Home', 'Research'].map((text) => (
                    <ListItem button key={text} 
                    onClick={
                        ()=> 
                        text === 'Home'  ? 
                        moveToHome()
                        :moveTo(text.toLocaleLowerCase()) }>
                        <ListItemIcon> 
                            {
                            text === 'Home' ? 
                            <HomeIcon className={classes.icon} color='inherit' />
                            :<SearchIcon className={classes.icon} color='inherit'/> 
                        }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        <Divider />
                    </ListItem>
                    ))}
                </List>
        
        </div>
                
        </div>
    )
}

SideBar.propTypes = SideBarPropTypes;

export default SideBar;


