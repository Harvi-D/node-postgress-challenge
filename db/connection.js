const { DATABASE_URL } = require("../config");

const db = require("knex")({
    client: "pg",
    connection: DATABASE_URL
})

module.exports = db;