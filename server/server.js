require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes.js').router
const cors = require('cors')
var compression = require('compression')
var expressStaticGzip = require("express-static-gzip");

const app = express();
let port = process.env.PORT || 3000;

const morgan = require('morgan')

// Serves up all static and generated assets in ../client/dist
// app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use('/', expressStaticGzip(path.join(__dirname, "/../client/dist")));
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(compression());

app.use('/', router)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
})

console.log(`Listening at http://localhost:${port}`);