import {makeStyles} from '@material-ui/core/styles';

const HeaderStyle = makeStyles({
    image: {
        width: '80px',
        margin: '10px',
    },

    headerWrapper: {
        position:'absolute',
        zIndex: 50,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
        transition: '0.8s all easy-in-out',
        boxShadow: '1px 8px 11px -2px rgba(74,74,74,0.77)',
        
    },

    IconeBurger: {
        cursor: 'Pointer',
        color: 'rgba(255,255,255,0.7)',
        border: '1px solid rgba(255,255,255,0.7)',
        borderRadius: '5px',
        margin: '0 15px 0 0',

        '@media(min-width: 680px)': {
            display: 'none',
        },
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    },
    buttonWrapper: {
        display: 'none',
        '@media(min-width: 680px)': {
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },
})

export default HeaderStyle;