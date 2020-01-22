const db = require('../data/db.js');

module.exports = {
  find,
  findById,
  findSteps,
}

function find() {
  //https://github.com/knex/knex/issues/360
  // SELECT name FROM sqlite_master WHERE type='table';
  return db.select("*").from("schemes");
}


function findById(idPassed) {
  return db("schemes").where({id: idPassed})
}

function findSteps(idPassed) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "schemes.id" )
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions" )
    .where({scheme_id: idPassed})
    .orderBy('step_number', 'asc')
}

/*

return db("posts as p")
    .join("users as u", "p.user_id", "u.id")
    .where("p.id", id)
    .select("p.id as postId", "p.contents", "u.username as postedBy")
    .first();


{ id: 17,
scheme_name: 'Find the Holy Grail',

step_number: 1,

instructions: 'quest'}
*/
