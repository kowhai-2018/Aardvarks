
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Carel', pic: '/images/carel.jpeg'},
        {id: 2, name: 'Alina', pic: '/images/alina.jpeg'},
        {id: 3, name: 'Allie', pic: '/images/allie.jpeg'},
        {id: 4, name: 'Kiri', pic: '/images/kiri.jpeg'},
        {id: 5, name: 'Chris', pic: '/images/chris.jpeg'},
        {id: 6, name: 'Jeremy', pic: '/images/jeremy.png'},
        {id: 7, name: 'Maya', pic: '/images/maya.jpeg'},
        {id: 8, name: 'Dani', pic: '/images/dani.jpeg'}
      ])
    })
}
