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

router.get('/reviews/meta', (req, res) => {
  if (req.options.params.product_id === undefined) {
    res.status(404).send('Must provide a "product_id" parameter')
  }

  axios.get(`${HEROKU_API_END_POINT}/reviews/meta`, req.options)
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

// =====================================
//                POST
// =====================================

// -------------------------------------
//              REVIEWS
// -------------------------------------

router.post('/reviews', (req, res) => {
  if (req.body.product_id === undefined) {
    res.status(404).send('Must provide a "product_id" parameter')
  }

  axios.post(`${HEROKU_API_END_POINT}/reviews`, req.body, req.options)
    .then(response => {
      res.status(201).send('Successfully posted review to Atelier API');
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error connecting to Atelier Reviews API');
    })
})

// -------------------------------------
//              Q&A
// -------------------------------------

// ----- Questions -----
router.post('/qa/questions', (req, res) => {
  if (req.body.product_id === undefined) {
    res.status(404).send('Must provide a "product_id" parameter')
  }

  axios.post(`${HEROKU_API_END_POINT}/qa/questions`, req.body, req.options)
    .then(response => {
      res.status(201).send('Successfully posted question to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Questions API');
    })
})
// ----- Answers -----
router.post('/qa/questions/:question_id/answers', (req, res) => {
  if (req.params.question_id === undefined) {
    res.status(404).send('Must provide a "question_id" path parameter')
  }

  axios.post(`${HEROKU_API_END_POINT}/qa/questions/${req.params.question_id}/answers`, req.body, req.options)
    .then(response => {
      res.status(201).send('Successfully posted answer to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Questions API');
    })
})

// -------------------------------------
//              INTERACTIONS
// -------------------------------------

router.post('/interactions', (req, res) => {
  if (req.body.element === undefined) {
    res.status(404).send('Must provide an "element" body parameter')
  }
  if (req.body.widget === undefined) {
    res.status(404).send('Must provide a "widget" body parameter')
  }
  if (req.body.time === undefined) {
    res.status(404).send('Must provide a "time" body parameter')
  }

  axios.post(`${HEROKU_API_END_POINT}/interactions`, req.body, req.options)
    .then(response => {
      res.status(201).send('Successfully posted interaction to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Interactions API');
    })
})

// =====================================
//                PUT
// =====================================

// -------------------------------------
//              REVIEWS
// -------------------------------------

// ----- REVIEWS / ID / HELPFUL-----
router.put('/reviews/:review_id/helpful', (req, res) => {
  if (req.params.review_id === undefined) {
    res.status(404).send('Must provide a "review_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/reviews/${req.params.review_id}/helpful`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully marked review as helpful to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Reviews API');
    })
})
// ----- REVIEWS / ID / REPORT-----
router.put('/reviews/:review_id/report', (req, res) => {
  if (req.params.review_id === undefined) {
    res.status(404).send('Must provide a "review_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/reviews/${req.params.review_id}/report`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully reported review to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Reviews API');
    })
})

// -------------------------------------
//              Q&A
// -------------------------------------

// ----- Mark Question as Helpful -----
router.put('/qa/questions/:question_id/helpful', (req, res) => {
  if (req.params.question_id === undefined) {
    res.status(404).send('Must provide a "question_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/qa/questions/${req.params.question_id}/helpful`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully marked question as helpful to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Questions API');
    })
})
// ----- Report Question -----
router.put('/qa/questions/:question_id/report', (req, res) => {
  if (req.params.question_id === undefined) {
    res.status(404).send('Must provide a "question_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/qa/questions/${req.params.question_id}/report`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully reported question to Atelier API');
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error connecting to Atelier Reviews API');
    })
})
// ----- Mark Answer as Helpful -----
router.put('/qa/answers/:answer_id/helpful', (req, res) => {
  if (req.params.answer_id === undefined) {
    res.status(404).send('Must provide an "answer_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/qa/answers/${req.params.answer_id}/helpful`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully marked answer as helpful to Atelier API');
    })
    .catch(err => {
      res.status(404).send('Error connecting to Atelier Questions API');
    })
})
// ----- Report Answer -----
router.put('/qa/answers/:answer_id/report', (req, res) => {
  if (req.params.answer_id === undefined) {
    res.status(404).send('Must provide an "answer_id" path parameter')
  }

  axios.put(`${HEROKU_API_END_POINT}/qa/answers/${req.params.answer_id}/report`, {}, req.options)
    .then(response => {
      res.status(201).send('Successfully reported answer to Atelier API');
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error connecting to Atelier Reviews API');
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
