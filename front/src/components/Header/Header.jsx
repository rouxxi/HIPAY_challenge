import React, { useState } from 'react';
import logo from '../../assert/logo-hipay.png'
import HeaderStyle from './HeaderStyle';
import ButtonNav from '../Common/Button/ButtonNav';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from '../SideBar/SideBar';
import {useHistory} from 'react-router-dom';

function Header() {
    const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);

    const classes = HeaderStyle();
    const history = useHistory();

    const moveTo = (page) => {
        history.push(`/${page}`)
    }



    return (
        <div className={classes.headerWrapper}>
                <div className={classes.logoWrapper}>
                <img className={classes.image} src={logo} alt="logo hipay"/>
                    <h2>Movies Achives</h2>
                </div>

                <MenuIcon className={classes.IconeBurger} onClick={()=> setMenuBurgerOpen(!MenuBurgerOpen)} color='inherit'/>

                <div className={classes.buttonWrapper}>
                    <ButtonNav 
                        text='Home'
                        OnClick={()=> {
                        setMenuBurgerOpen(!MenuBurgerOpen)
                        history.push('/')
                        }} 
                        size='medium' 
                        color='inherit'/>
                    <ButtonNav text='Research' OnClick={()=> 
                        {
                            setMenuBurgerOpen(!MenuBurgerOpen)
                            moveTo('research')
                            }
                            } 
                            size='medium' 
                            color='inherit'/>
                </div>

                <SideBar setMenuBurgerOpen={setMenuBurgerOpen}  isOpen={MenuBurgerOpen} />
        </div>
    )
}

export default Header;