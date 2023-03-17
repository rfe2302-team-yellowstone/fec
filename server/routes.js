const path = require('path')
const {Router} = require('express')
const router = Router()
const axios = require('axios')
const dotenv = require('dotenv')
const { ConcatenationScope } = require('webpack')

// Heroku API info
const HEROKU_API_END_POINT = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'
const HEROKU_HEADERS = {
  "Authorization" : `${process.env.API_KEY}`
}



// =====================================
//         Things to do for all...
// =====================================


router.all('*', (req, res, next) => {

  // Set options with our authorization and any passed in query parameters
  let options = {
    headers: HEROKU_HEADERS,
    params: req.query
  }

  // Attach to our request object
  req.options = options

  // Add Access Control to Response header to avoid web request error
  // https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios
  res.header("Access-Control-Allow-Origin", "*");

  next()
})
// =====================================
//                GET
// =====================================

// -------------------------------------
//              PRODUCTS
// -------------------------------------

// ----- ALL PRODUCTS -----
router.get('/products', (req, res) => {

  axios.get(`${HEROKU_API_END_POINT}/products`, req.options)
    .then ((result) => {

      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})


// ----- PRODUCTS / ID -----
router.get('/products/:product_id', (req, res) => {

  axios.get(`${HEROKU_API_END_POINT}/products/${req.params.product_id}`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// ----- PRODUCTS / ID / STYLES -----
router.get('/products/:product_id/styles', (req, res) => {

  axios.get(`${HEROKU_API_END_POINT}/products/${req.params.product_id}/styles`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// ----- PRODUCTS / ID / RELATED-----
router.get('/products/:product_id/related', (req, res) => {

  axios.get(`${HEROKU_API_END_POINT}/products/${req.params.product_id}/related`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})


// -------------------------------------
//              REVIEWS
// -------------------------------------


router.get('/reviews', (req, res) => {

  if (req.options.params.product_id === undefined) {
    res.status(404).send('Must provide a "product_id" parameter')
  }

  axios.get(`${HEROKU_API_END_POINT}/reviews`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})



// -------------------------------------
//              Q&A
// -------------------------------------

// ----- Questions -----
router.get('/qa/questions', (req, res) => {

  if (req.options.params.product_id === undefined) {
    res.status(404).send('Must provide a "product_id" parameter')
  }

  axios.get(`${HEROKU_API_END_POINT}/qa/questions`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})


// ----- Answers -----
router.get('/qa/questions/:question_id/answers', (req, res) => {

  if (req.params.question_id === undefined) {
    res.status(404).send('Must provide a "question_id" parameter')
  }

  axios.get(`${HEROKU_API_END_POINT}/qa/questions/${req.params.question_id}/answers`, req.options)
    .then ((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
})




// // ===== POST ======
// router.post('/sessions', (req, res) => {
//   console.log('get route!')
//   res.send('get route!')
// })


// // ===== POST ======
// router.post('/purchases', userController.get)



// //TESTING.......
// router.get('/purchases/:name', userController.getOneUser)





module.exports.router = router
