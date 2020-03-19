const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps() {}

function add(scheme) {
    console.log(scheme)
    return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => findById(id))
}

function update(id, changes) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
