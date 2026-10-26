// npm i mysql2
const mysql = require("mysql2/promise")

const pool = mysql.createPool({

    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "", // nos Pcs da escola, senha "escola"
    database: "joao_2°ds"
})

module.exports = Object.freeze({
    pool: pool
})