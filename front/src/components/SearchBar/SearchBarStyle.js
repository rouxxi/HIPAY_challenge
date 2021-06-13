import { makeStyles } from "@material-ui/core";

const SearchBarStyle = makeStyles({
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start-flex',
        backgroundColor: 'rgba(42, 103, 156,0.8)',
        width:'70%',
        margin: '20px',
        padding: '5px',
        maxWidth: '400px',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'rgba(42, 103, 156,0.90)',
          },
    },
    searchInput: {
   
    }
    

})

export default SearchBarStyle;