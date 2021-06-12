const express = require('express');
const app = express()

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Vous avez un serveur en fonction  sur le port ${PORT} !`))