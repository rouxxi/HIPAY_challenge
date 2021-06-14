import { makeStyles } from "@material-ui/styles";

const MovieCardStyle = makeStyles( {
    image: {
        width: '250px',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '15px',

        '@media(min-width: 680px)': {
            height: "700px",
            width: "400px",
            objectFit: 'cover',
            borderRadius: '15px',
    }}
}
)

export default MovieCardStyle;