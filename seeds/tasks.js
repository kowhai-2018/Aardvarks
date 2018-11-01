
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, tasks: 'give a hug to '},
        {id: 2, tasks: 'listen uninterrupted for 2 mins to '},
        {id: 3, tasks: 'high five'},
        {id: 4, tasks: 'give a round of applause to '},
        {id: 5, tasks: 'share your lunch with '},
        {id: 6, tasks: 'make a coffee for '},
        {id: 7, tasks: 'walk with '},
        {id: 8, tasks: 'pair up with '},
        {id: 9, tasks: 'go out for a drink with '},
        {id: 10, tasks: 'create something for '},
        {id: 11, tasks: 'say something nice to '},
        {id: 12, tasks: 'pat on the back '},
        {id: 13, tasks: 'get the best beanbag for '},
        {id: 14, tasks: 'get the yoga equipment ready for '},
        {id: 15, tasks: 'clean the lunch dishes for '}
      ])
    })
}
