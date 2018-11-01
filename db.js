const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const devDB = connection

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getTarget: getTarget,
  getAct: getAct,
  updateCompleted: updateCompleted
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}
function getRandom (arrLength, id) {
  return Math.floor(Math.random() * Math.floor(arrLength))
}

function getTarget (id, db = connection) {
  let i = id
  while ((i === 0) || (i === id)) {
    i = getRandom(9)
  }
  return db('users').where('id', i).first()
}

function getAct () {

}

function updateCompleted () {

}
