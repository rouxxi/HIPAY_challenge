import { makeStyles } from "@material-ui/core";

const ResearchStyle = makeStyles({
    main: {
        padding: '110px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        textAlign: 'center',
        color: 'white',
    },
    button: {
        width: 'fit-content',
        margin: '0 0 30px 0',
        borderRadius: '8px',
        backgroundColor: 'rgba(108, 122, 137, 0.8)',
        color: 'black',
        '&:hover': {
            backgroundColor: 'rgba(108, 122, 137, 1)',
            color: 'white'
        },
    },
})

export default ResearchStyle;