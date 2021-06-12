const Router = require('express').Router()
const directors = require('./directors/index.js');
const movies = require('./movies/index.js');

Router.use('/directors', directors)
Router.use('/movies', movies)



module.exports= Router;