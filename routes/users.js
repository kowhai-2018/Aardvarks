const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      db.getTarget(1).then(console.log)
      res.render('index', {users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.get('/profile/:id', (req, res) => {
// db.getUsers()
// .then(users => {
//   console.log(Math.floor(Math.random() * Math.floor(8))
// }
// }
// db.getUser()

// /completed
module.exports = router
