import React from 'react';
import logo from '../../assert/logo-hipay.png'
import HeaderStyle from './HeaderStyle';
import ButtonNav from '../Common/Button/ButtonNav';

function Header() {
const classes = HeaderStyle()
    return (
        <div className={classes.headerWrapper}>

                
                <div className={classes.logoWrapper}>
                <img className={classes.image} src={logo} alt="logo hipay"/>
                    <h1>Movies Achives</h1>
                </div>
                <div className={classes.buttonWrapper}>
                    <ButtonNav text='Home' size='medium' color='primary'/>
                    <ButtonNav text='Research' size='medium' color='primary'/>
                </div>
        </div>
    )
}

export default Header;