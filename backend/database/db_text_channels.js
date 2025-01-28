const db = require('./database.js')

const createItem = (name, server_id, callback) => {
    const sql = `INSERT INTO text_channels (server_id, name) VALUES (?, ?)`;
    db.run(sql, [server_id, name], callback);
}

const readItemById = (id, callback) => {
    const sql = `SELECT * FROM text_channels WHERE id = ?`;
    db.all(sql, id, callback);
}

const readItemsByServerId = (server_id, callback) => {
    const sql = `SELECT * FROM text_channels WHERE server_id = ?`;
    db.all(sql, server_id, callback);
}

const updateItem = (id, name, callback) => {
    const sql = `UPDATE text_channels SET name = ? WHERE id = ?`;
    db.run(sql, [name, id], callback);
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM text_channels WHERE id = ?`;
    db.run(sql, id, callback)
}

exports.createItem = createItem;
exports.readItemsByServerId = readItemsByServerId
exports.readItemById = readItemById;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem
