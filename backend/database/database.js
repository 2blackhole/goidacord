const sqlite3 = require("sqlite3").verbose();
const dbname = "database/goidaData.db";

let db = new sqlite3.Database(dbname, (err) => {
    if (err) console.error(err.message);
    else {
        console.log("Database Connected");
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT UNIQUE, password TEXT, email TEXT UNIQUE)", err => {
            if (err) console.error(err.message);
            else {console.log("Table created / already exists");}
        });
    }
});

module.exports = db;