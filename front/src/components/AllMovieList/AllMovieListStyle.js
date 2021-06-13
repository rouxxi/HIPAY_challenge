import { makeStyles } from "@material-ui/core";

const AllMovieListStyle = makeStyles({
    main: {
        minHeight: '80vh',
        backgroundColor: 'rgba(255,255,255,1)',
        width:'80%',
        maxWidth: '800px',
        borderRadius: '5px',
        boxShadow: '4px 8px 15px 5px rgba(97,97,97,0.54)',
        display:'flex',
        flexDirection:'column',
        alignItems: 'start-flex',
    }
})

export default AllMovieListStyle;