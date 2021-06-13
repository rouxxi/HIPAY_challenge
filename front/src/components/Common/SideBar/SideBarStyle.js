import { makeStyles } from "@material-ui/core";

const SideBarStyle = makeStyles({
    wrapper: {
        position: 'absolute'
    },
    overlayHidden: {
        '@media(min-width: 680px)': {
            display: 'none',
        },
    },
    overlayOpen: {
        zIndex: 50,
        backgroundColor: 'rgba(46, 49, 49, 1)',
        minHeight: '100vh',
        minWidth: '100%',
        left:0,
        bottom:0,
        top:0,
        transform: 'translateX(0)',
        transition: '0.8s all easy-in-out',
        '@media(min-width: 680px)': {
            display: 'none',
        },
    },
    sideBarHidden: {
        display: 'none',
    },
    sideBarOpen: {
        position: 'absolute',
        zIndex: 100,
        backgroundColor: 'rgba(31,31,31,1)',
        minHeight: '100vh',
        minWidth: '65%',
        left:0,
        bottom:0,
        top:0,
        boxShadow: '7px 9px 31px 10px rgba(74,74,74,0.86)',
        transform: 'translateX(0)',
        transition: '0.8s all easy-in-out',
        '@media(min-width: 680px)': {
            display: 'none',
        },
    },
    navMenu: {
        display: 'block',
        textAlign: 'center',
        color: 'white',
    },

    icon: {
        color: 'white',
    }

})

export default SideBarStyle;