import {makeStyles} from '@material-ui/core/styles';

const HeaderStyle = makeStyles({
    image: {
        width: '80px',
        margin: '10px',
    },

    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 25px',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },

    logoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default HeaderStyle;