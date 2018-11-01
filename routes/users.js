const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('it is working, hopefully')
})

//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// /profile/:id

// /completed
module.exports = router
