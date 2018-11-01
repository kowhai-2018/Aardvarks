
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', (t) => {
    t.increments('id').primary()
    t.string('tasks')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks')
}
