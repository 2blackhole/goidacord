const db = require('./database')

const createItem = (login, password, email, callback) => {
    const sql = `INSERT INTO users (login, password, email) VALUES (?, ?, ?)`
    db.run(sql, [login, password, email], function (err) {
        callback(err, {lastID: this.lastID})
    })
}

const readItems = (callback) => {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], callback)
}

const updateItem = (id, login, password, email, callback) => {
    const sql = `UPDATE users SET login = ?, password = ?, email = ? WHERE id = ?`;
    db.run(sql, [login, password, email, id], callback)
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    db.run(sql, id, callback)
}

const checkItemLogin = (login, callback) => {
    const sql = `SELECT * FROM users WHERE login = ?`;
    db.get(sql, login, function (err, result) {
        callback(err, result);
    })
}

const checkItemEmail = (email, callback) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, email, function (err, result) {
        callback(err, result);
    })
}

exports.createItem = createItem;
exports.readItems = readItems;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
exports.checkItemLogin = checkItemLogin;
exports.checkItemEmail = checkItemEmail;