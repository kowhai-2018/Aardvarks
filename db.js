const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const devDB = connection

// module.exports = {
//   getUsers: getUsers,
//   getTarget: getTarget,
//   getAct: getAct,
//   updateCompleted: updateCompleted
// }

// function getUser()

// function getTarget()

// function getAct()

// function updateCompleted()
