const express = require('express');
const cors = require('cors')
const app = express();

const logger = require("./logger.js")
//middleware
app.use(cors())
app.use(express.json())
app.use(logger)


const fruitsRouter = require("./routes/fruits.js")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use('/fruits', fruitsRouter);

module.exports = app