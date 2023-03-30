require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes.js').router
const cors = require('cors')

const app = express();
let port = process.env.PORT || 3001;

const morgan = require('morgan')

// Serves up all static and generated assets in ../client/dist
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.use('/', router)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
})

console.log(`Listening at http://localhost:${port}`);