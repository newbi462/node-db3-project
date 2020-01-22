const db = require('../data/db.js');

module.exports = {
  find,
  findById,
}

function find() {
  //https://github.com/knex/knex/issues/360
  // SELECT name FROM sqlite_master WHERE type='table';
  return db.select("name").from("sqlite_master").where({type: "table"});
}


function findById(id) {

}
