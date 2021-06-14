const express = require('express');
const app = express()
const cors = require('cors');

const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql/schema/typeDefs');
const resolvers = require('./graphql/schema/resolvers');
const server = new ApolloServer({typeDefs, resolvers})

//gestion des cors

const corseOptions = {

    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
   

const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: '50mb' }));
app.use(cors(corseOptions));

server.applyMiddleware({app});


app.listen(PORT, ()=> console.log(`Vous avez un serveur en fonction  sur le port ${PORT} !`))



module.exports = app