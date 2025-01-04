const db = require("./database");
const createItem = (name, owner_id, callback) => {
    const sql = `INSERT INTO servers (name, owner_id) VALUES (?, ?)`
    db.run(sql, [name, owner_id], function (err) {
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