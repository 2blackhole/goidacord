const db = require("./database");
const createItem = (name, callback) => {
    const sql = `INSERT INTO servers (name) VALUES (?)`
    db.run(sql, [name], function (err) {
        callback(err, {lastID: this.lastID})
    })
}

const readItems = (id, callback) => {
    const sql = `SELECT * FROM servers WHERE id = ?`;
    db.all(sql, [id], callback)
}

const updateItem = (id, name, callback) => {
    const sql = `UPDATE servers SET name = ? WHERE id = ?`;
    db.run(sql, [name, id], callback)
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM servers WHERE id = ?`;
    db.run(sql, id, callback)
}

exports.createItem = createItem;
exports.readItems = readItems;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;