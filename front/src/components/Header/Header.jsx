import React, { useState } from 'react';
import logo from '../../assert/logo-hipay.png'
import HeaderStyle from './HeaderStyle';
import ButtonNav from '../Common/Button/ButtonNav';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from '../Common/SideBar/SideBar';
function Header() {
    const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);

    const classes = HeaderStyle();

    const handleNavBar = (state) => {
        setMenuBurgerOpen(!state)
    }

    return (
        <div className={classes.headerWrapper}>
                <div className={classes.logoWrapper}>
                <img className={classes.image} src={logo} alt="logo hipay"/>
                    <h2>Movies Achives</h2>
                </div>

                <MenuIcon className={classes.IconeBurger} onClick={()=> setMenuBurgerOpen(!MenuBurgerOpen)} color='inherit'/>

                <div className={classes.buttonWrapper}>
                    <ButtonNav text='Home' size='medium' color='inherit'/>
                    <ButtonNav text='Research' size='medium' color='inherit'/>
                </div>

                <SideBar  isOpen={MenuBurgerOpen} />
        </div>
    )
}

export default Header;