
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, Name: 'Carel', Pic: '/Public/images/carel.jpeg'},
        {id: 2, Name: 'Alina', Pic: '/Public/images/alina.jpeg'},
        {id: 3, Name: 'Allie', Pic: '/Public/images/allie.jpeg'},
        {id: 4, Name: 'Kiri', Pic: '/Public/images/kiri.jpeg'},
        {id: 5, Name: 'Chris', Pic: '/Public/images/chris.jpeg'},
        {id: 6, Name: 'Jeremy', Pic: '/Public/images/jeremy.png'},
        {id: 7, Name: 'Maya', Pic: '/Public/images/maya.jpeg'},
        {id: 8, Name: 'Dani', Pic: '/Public/images/dani.jpeg'}
      ])
    })
}
