const sqlite3 = require("sqlite3").verbose();
const dbname = "database/goidaData.db";

let db = new sqlite3.Database(dbname, (err) => {
    if (err) console.error(err.message);
    else {
        console.log("Database Connected");
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR(20) UNIQUE, password VARCHAR(40), email VARCHAR(40) UNIQUE)", err => {
            if (err) console.error(err.message);
            else {console.log("Table users created / already exists");}
        });

        db.run("CREATE TABLE IF NOT EXISTS servers (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) UNIQUE)", err => {
            if (err) console.error(err.message);
            else {console.log("Table servers created / already exists");}
        })

        db.run("CREATE TABLE IF NOT EXISTS users_servers " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "user_id INTEGER," +
            "server_id INTEGER)", err => {
            if (err) console.error(err.message);
            else {console.log("Table users_servers created / already exists");}
        })
    }
});

module.exports = db;
