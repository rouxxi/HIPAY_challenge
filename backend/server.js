const express = require('express');
const Router = require('./router/Router.js');
const app = express()

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Vous avez un serveur en fonction  sur le port ${PORT} !`))

app.use('/', Router)

module.exports = app