const express = require('express');
const Router = require('./router/Router.js');
const app = express()

const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql/schema/typeDefs');
const resolvers = require('./graphql/schema/resolvers');
const server = new ApolloServer({typeDefs, resolvers})

const PORT = process.env.PORT || 8080;

app.use('/', Router);

server.applyMiddleware({app});


app.listen(PORT, ()=> console.log(`Vous avez un serveur en fonction  sur le port ${PORT} !`))



module.exports = app