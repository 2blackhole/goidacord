const sqlite3 = require("sqlite3").verbose();
const dbname = "database/goidaData.db";

let db = new sqlite3.Database(dbname, (err) => {
    if (err) console.error(err.message);
    else {
        console.log("Database Connected");
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR(20) UNIQUE NOT NULL, password VARCHAR(40) NOT NULL, email VARCHAR(40) UNIQUE NOT NULL )", err => {
            if (err) console.error(err.message);
            else {console.log("Table users created / already exists");}
        });

        db.run("CREATE TABLE IF NOT EXISTS servers (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) UNIQUE NOT NULL, owner_id INTEGER NOT NULL)", err => {
            if (err) console.error(err.message);
            else {console.log("Table servers created / already exists");}
        })

        db.run("CREATE TABLE IF NOT EXISTS user_server " +
            "(user_id INTEGER NOT NULL," +
            "server_id INTEGER)", err => {
            if (err) console.error(err.message);
            else {console.log("Table user_server created / already exists");}
        })

        db.run("CREATE TABLE IF NOT EXISTS text_channels " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "server_id INTEGER NOT NULL," +
            "name VARCHAR(50))", err => {
            if (err) console.error(err.message);
            else {console.log("Table text_channels created / already exists");}
        })

        db.run("CREATE TABLE IF NOT EXISTS messages " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "channel_id INTEGER NOT NULL," +
            "type INTEGER, " +
            "content BLOB," +
            "text TEXT(5000)," +
            "time_stamp INTEGER NOT NULL," +
            "time_stamp_edited INTEGER" +
            "visible INTEGER)", err => {
            if (err) console.error(err.message);
            else {console.log("Table messages created / already exists");}
        })
    }
});

module.exports = db;
