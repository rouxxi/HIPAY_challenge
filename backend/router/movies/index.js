const Router = require('express').Router()

Router.get('/', (req, res)=> {
    console.log('vous etes bien sur une route movies get!')
    res.status(200).send('vous etes bien sur une route movies get!')
})

module.exports= Router;