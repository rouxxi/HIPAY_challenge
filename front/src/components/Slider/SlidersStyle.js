import {makeStyles} from '@material-ui/core/styles';

const SlidersStyle = makeStyles({
    sliderWrapper: {
        backgroundColor: 'black',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '30px',
    },
    sliderDisplayed: {
        height:'400px',
        width:'250px',
        overflow: 'hidden',
        margin: '30px 0',
        transition: '0.3 all ease-in-out',
    },
    swapButton: {
        border: '2px solid  rgba(255,255,255,0.3)',
        borderRadius:'5px',
        margin: '10px',
        "&:hover": {
            cursor: 'pointer',
          }
    }

})

export default SlidersStyle;