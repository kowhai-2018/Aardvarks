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

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id).then((giver) => {
    db.getAct().then((act) => {
      db.getTarget(id).then((target) => {
        res.render('profile', {target, act, giver})
      })
    })
  })
})

router.post('/profile/:id/done', (req, res) => {
  const completed = req.body.completed
  const caught = req.body.caught
  res.render('done', {completed, caught})
})
// db.getUsers()
// .then(users => {
//   console.log(Math.floor(Math.random() * Math.floor(8))
// }
// }
// db.getUser()

// /completed
module.exports = router
