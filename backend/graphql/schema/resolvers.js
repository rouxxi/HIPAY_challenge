//import des fake data
const movies = require('../fakeDB/movies');
const directors = require('../fakeDB/directors');


const resolvers = {
    Query: {
      getAllMovies: () => {
        return movies
      },
      getMoviesByName: (parent, args, context, info) => {
        const result = movies.filter((movie)=>  movie.name.toLowerCase().includes(args.name.toLowerCase()))
        return result
      }
    },
  };


module.exports = resolvers;