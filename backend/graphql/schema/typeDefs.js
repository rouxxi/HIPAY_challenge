const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Movie {
    id: ID
    name: String!
    year: Int!
    image: String!
    director: Int!
  }

  type Director {
    id: ID
    firstname: String!
    lastname: String!
  }

  #Query
  type Query {
    getAllMovies: [Movie!]
    getMoviesByName(name:String!): [Movie!]
  }

  # Mutation
`;

module.exports = typeDefs;